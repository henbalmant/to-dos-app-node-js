import { CreateUserUseCase } from "../usecases/create-user-use-case";
import { Request, Response } from "express";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, username } = request.body;

    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute({
      name,
      username
    });

    return response.status(201).json(result);
  }
}
