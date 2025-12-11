import { UserRepository } from "../repositories/UserRepository";
import { CreateUserDTO, UpdateUserDTO } from "../dto/UserDTO";
import { UserModel } from "../models/UserModel";
import { ApiError } from "../utils/ApiError";

const repo = new UserRepository();

export class UserService {
    async createUser(data: CreateUserDTO): Promise<UserModel> {
        const now = Date.now();
        return await repo.create({
            ...data,
            isVerified: false,
            createdAt: now,
            updatedAt: now,
        });
    }

    async getUsers(): Promise<UserModel[]> {
        return await repo.findAll();
    }

    async getUser(id: string): Promise<UserModel> {
        const user = await repo.findById(id);
        if (!user) throw new ApiError("User not found", 404);
        return user;
    }

    async updateUser(id: string, data: UpdateUserDTO): Promise<boolean> {
        return await repo.update(id, {
            ...data,
            updatedAt: Date.now(),
        });
    }
}
