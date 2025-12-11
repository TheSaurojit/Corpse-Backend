import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { ApiResponse } from "../utils/ApiResponse";

const service = new UserService();

export class UserController {
  static async create(req: Request, res: Response) {
    const user = await service.createUser(req.body);
    res.json(new ApiResponse(true, user));
  }

  static async all(req: Request, res: Response) {
    const users = await service.getUsers();
    res.json(new ApiResponse(true, users));
  }

  static async single(req: Request, res: Response) {
    const user = await service.getUser(req.params.id);
    res.json(new ApiResponse(true, user));
  }

  static async update(req: Request, res: Response) {
    await service.updateUser(req.params.id, req.body);
    res.json(new ApiResponse(true, null, "Updated successfully"));
  }
}
