import { Router } from 'express'
import {UserController} from './controllers/UserController'
import {SurveysController} from './controllers/SurveysController'

const router = Router();

const userController = new UserController();
const SurveyController = new SurveysController()
router.post("/users" , userController.create)
router.post("/surveys", SurveyController.create)
router.get("/surveys", SurveyController.show)

export {router}
