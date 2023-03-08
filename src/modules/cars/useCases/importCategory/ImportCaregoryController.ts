import { Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from "tsyringe";

import { ImportCaregoryUseCase } from "./ImportCaregoryUseCase";

class ImportCaregoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCategoryUseCase = container.resolve(ImportCaregoryUseCase);

    await importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCaregoryController };
