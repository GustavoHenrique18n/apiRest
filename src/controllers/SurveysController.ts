import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import {SurveysRepository} from '../repositories/SurveysRepository'


class SurveysController{
    async create(req:Request , res:Response){
        const {title , description} = req.body
        
        const SurveyRepository = getCustomRepository(SurveysRepository)

        const survey = SurveyRepository.create({
            title,
            description
        })

        await SurveyRepository.save(survey)
        res.status(201).json(survey)
    }

    async show(req:Request , res:Response){
        const SurveyRepository = getCustomRepository(SurveysRepository)
        const all = await SurveyRepository.find()

        res.json(all)
    }
}

export {SurveysController}