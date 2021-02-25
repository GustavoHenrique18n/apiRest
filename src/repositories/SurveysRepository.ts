import { EntityRepository, Repository } from "typeorm";
import {Survey} from "../models/Surveys"
 @EntityRepository(Survey)
class SurveysRepository extends Repository<Survey>{}
 




export{SurveysRepository}