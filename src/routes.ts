import { Router } from 'express'
import {UserController} from './controllers/UserController'
import {SurveysController} from './controllers/SurveysController'
import { SendMainController } from './controllers/SendEmailController';

const router = Router();

const userController = new UserController();
const SurveyController = new SurveysController()
const sendMailController = new SendMainController()
router.post("/users" , userController.create)
router.post("/surveys", SurveyController.create)
router.get("/surveys", SurveyController.show)
router.post("/sendmail" , sendMailController.execute)

export {router}
