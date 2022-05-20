import { PlaceController } from "../../presentation/controllers/place-controller"

export const makePlaceController = (): PlaceController => {
    // const mongodbUserRepository = new MongodbUserRepository()
    // const registerUserOnMailingList = new RegisterUserOnMailingList(mongodbUserRepository)
    // const nodemailerEmailService = new NodemailerEmailService()
    // const sendEmailToUserWithBonus = new SendEmailToUserWithBonus(getEmailOptions(), nodemailerEmailService)
    // const registerUserController = new RegisterUserController(registerUserOnMailingList, sendEmailToUserWithBonus)
    // return registerUserController

    return new PlaceController();
  }