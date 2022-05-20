import { HttpRequest, HttpResponse } from "../../presentation/ports/http";

export interface Controller {
    handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}