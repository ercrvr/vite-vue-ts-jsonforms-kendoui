import { UserBase } from './UserBase'
import { v4 as uuidv4 } from 'uuid'

export default class UserEntity extends UserBase {
  public id?: string = uuidv4()
  public createdAt?: string
  public modifiedAt?: string
}
