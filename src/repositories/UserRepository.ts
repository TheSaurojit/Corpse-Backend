import { BaseRepository } from "./BaseRepository";
import { UserModel } from "../models/UserModel";

export class UserRepository extends BaseRepository<UserModel> {
  constructor() {
    super("users"); // collection name
  }
}
