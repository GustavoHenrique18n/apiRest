import {Request , Response} from "express"
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUserRepository } from "../repositories/SurveysUserRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import SendMailService from "../services/SendMailService";

class SendMainController{
    async execute(req:Request,res:Response){
        const { email , survey_id} = req.body;

        const userRepository = getCustomRepository(UsersRepository)
        const surveyRepository = getCustomRepository(SurveysRepository)
        const surveyUsersRepository = getCustomRepository(SurveysUserRepository)

        const userAlreadyExists = await userRepository.findOne({email});

        if(!userAlreadyExists){
            return res.status(400).json({
                error:"User does not exists",
            });
        }

        const survey = await surveyRepository.findOne({id: survey_id})

        if(!survey){
            return res.status(400).json({
                error:"Survey does not exists",
            });
        }
         //salvando info na tabela surveyUser
         const surveyUser = surveyUsersRepository.create({
             user_id: userAlreadyExists.id,
             survey_id
         })
         await surveyUsersRepository.save(surveyUser)
         // enviar email para o usuario
         await SendMailService.execute(email, survey.title, survey.description)

         return res.json(surveyUser)
    }
}

export{ SendMainController}