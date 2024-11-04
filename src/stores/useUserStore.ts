import UserEntity from '@/entities/UserEntity'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toast-notification'
import eventBus from '@/eventbus/eventBus'

const openDatabase = (): Promise<IDBDatabase> => {
  let db: IDBDatabase | null = null
  return new Promise<IDBDatabase>((resolve, reject) => {
    if (db) {
      return resolve(db) // Return existing connection
    }

    const request = indexedDB.open('userDB', 1)

    request.onupgradeneeded = event => {
      const database = (event.target as IDBOpenDBRequest).result
      // Create the object store for users
      database.createObjectStore('users', { keyPath: 'id' })
    }

    request.onerror = event => {
      console.error('DB Error:', event)
      reject(event)
    }

    request.onsuccess = event => {
      db = (event.target as IDBOpenDBRequest).result
      resolve(db)
    }
  })
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as UserEntity[],
    disabledList: ['#/properties/email'],
    info: {
      color: 'bg-[color:#32ADE6]',
      title: 'Profile Detail',
      message:
        'This is the personal information you use to access and manage your account. Your email address will be used for account securty, recovery, and notifications.',
    },
    hasInfo: false,
    user: new UserEntity(),
  }),
  actions: {
    async fetchUsers() {
      const database = await openDatabase()
      const transaction = database.transaction('users', 'readonly')
      const objectStore = transaction.objectStore('users')
      const request = objectStore.getAll()
      request.onsuccess = event => {
        const result = (event.target as IDBRequest<UserEntity[]>).result
        this.users = result
      }
    },
    async deleteUser(userId: string) {
      const database = await openDatabase()
      const transaction = database.transaction('users', 'readwrite')
      const objectStore = transaction.objectStore('users')
      const deleteRequest = objectStore.delete(userId)

      deleteRequest.onsuccess = () => {
        this.users = this.users.filter((user: UserEntity) => user.id !== userId)
      }

      deleteRequest.onerror = event => {
        console.error('Delete Error:', event)
      }
    },
    async updateUser(updatedUser: UserEntity) {
      const database = await openDatabase()
      const transaction = database.transaction('users', 'readwrite')
      const objectStore = transaction.objectStore('users')
      const updateRequest = objectStore.put(updatedUser)

      updateRequest.onsuccess = () => {
        const index = this.users.findIndex(
          (user: UserEntity) => user.id === updatedUser.id,
        )
        if (index !== -1) {
          this.users[index] = updatedUser // Update the user in the state
        }
      }

      updateRequest.onerror = event => {
        console.error('Update Error:', event)
      }
    },
    async saveUser() {
      const sanitizedUser = JSON.parse(JSON.stringify(this.user))
      const database = await openDatabase()
      const transaction = database.transaction('users', 'readwrite')
      const objectStore = transaction.objectStore('users')
      const addRequest = objectStore.add(sanitizedUser)
      const $toast = useToast()
      addRequest.onsuccess = () => {
        this.users.push(sanitizedUser) // Add the new user to the state
        eventBus.emit('resetFormMessage')
        $toast.success('User saved successfully', { position: 'top-right' })
      }

      addRequest.onerror = event => {
        console.error('Add Error:', event)
        const target = event.target as IDBRequest
        $toast.error(`Something went wrong: ${target!.error}`, {
          position: 'top-right',
        })
      }
    },
    addToDisableList(id: string) {
      this.disabledList.push(id)
    },
    removeFromDisabledList(id: string) {
      this.disabledList = this.disabledList.filter(e => e != id)
    },
    setInfoColor(color: string) {
      this.info.color = color
    },
    resetForm() {
      this.user = new UserEntity()
    },
    setHasInfo(val: boolean) {
      this.hasInfo = val
    },
  },
})
