import { HttpRequest, HttpResponse } from "../../ports/http";
// import { MissingParamError } from "./errors/missing-param-error";
import { badRequest, serverError, success } from "../../helpers/http-helper";
import { Controller } from "../../../core/types/controller";
import { CreatePlaceUseCase } from "../../../domain/usecases/place/create-place-usecase";
import { MissingParamError } from "../../errors";
import { PlaceEntity } from "../../../domain/entities/place-entity";
// import { RegisterUser } from "../../../usecases/register-user-on-mailing-list/register-user";
// import { SendEmail } from "../../../usecases/send-email-to-user-with-bonus/send-email";
// import { SendEmailResponse } from "../../../usecases/send-email-to-user-with-bonus/send-email-response";
// import { RegisterUserResponse } from "../../../usecases/register-user-on-mailing-list/register-user-response";

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
