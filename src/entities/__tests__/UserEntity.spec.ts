import { describe, it, expect } from 'vitest'
import UserEntity from '../UserEntity'

describe('UserEntity', () => {
  it('should create an instance with default values', () => {
    const user = new UserEntity()

    expect(user).toBeInstanceOf(UserEntity)
    expect(user.id).toBeDefined() // Check if ID is generated
    expect(user.createdAt).toBeUndefined() // CreatedAt should be undefined initially
    expect(user.modifiedAt).toBeUndefined() // ModifiedAt should be undefined initially
    expect(user.foreName).toBe('') // Default value for foreName
    expect(user.surname).toBe('') // Default value for surname
    expect(user.dateOfBirth).toBe(null) // Default value for dateOfBirth
    expect(user.age).toBeUndefined() // Age is not set, should be undefined
    expect(user.email).toBeUndefined() // Email should be undefined initially
  })

  it('should allow setting properties', () => {
    const user = new UserEntity()

    user.foreName = 'John'
    user.surname = 'Doe'
    user.dateOfBirth = '2000-01-01'
    user.age = 24
    user.email = 'john.doe@example.com'

    expect(user.foreName).toBe('John')
    expect(user.surname).toBe('Doe')
    expect(user.dateOfBirth).toBe('2000-01-01')
    expect(user.age).toBe(24)
    expect(user.email).toBe('john.doe@example.com')
  })

  it('should have a unique id for each instance', () => {
    const user1 = new UserEntity()
    const user2 = new UserEntity()

    expect(user1.id).toBeDefined()
    expect(user2.id).toBeDefined()
    expect(user1.id).not.toBe(user2.id) // Ensure IDs are unique
  })
})
