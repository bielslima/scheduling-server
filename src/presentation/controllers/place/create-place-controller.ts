import { HttpRequest, HttpResponse } from "../../ports/http";
import { badRequest, serverError, success } from "../../helpers/http-helper";
import { Controller } from "../../../core/types/controller";
import { CreatePlaceUseCase } from "../../../domain/usecases/place/create-place-usecase";
import { MissingParamError } from "../../errors";

export class CreatePlaceController implements Controller {
  private readonly createPlaceUseCase: CreatePlaceUseCase;

  constructor(createPlaceUseCase: CreatePlaceUseCase) {
    this.createPlaceUseCase = createPlaceUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.body.name) {
        return badRequest(new MissingParamError("name"));
      }
      const placeData = {
        name: httpRequest.body.name,
      };

      const createPlaceResponse = await this.createPlaceUseCase.run(placeData);

      if (createPlaceResponse.isLeft()) {
        return badRequest(createPlaceResponse.value);
      }

      return success(createPlaceResponse);
    } catch (error) {
      return serverError("internal");
    }
  }
}
