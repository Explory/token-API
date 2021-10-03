import { Request, Response } from 'express';
import axios from "axios";
import * as config from "config";

const { apiKey, apiUrl } = config.get("NftMaker");

export default class ProjectController {
  public getProjects = async (req: Request, res: Response): Promise<any> => {
    try {
      const { data } = await axios.get(`${apiUrl}/ListProjects/${apiKey}`);
      res.status(200).send({
        success: true,
        data,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString()
      });
    }
  };

  public createProject = async (req: Request, res: Response): Promise<any> => {
    try {
      if (!req.body) {
        throw new Error("Missing body params.");
      }

      const { data } = await axios.post(`${apiUrl}/CreateProject/${apiKey}`, req.body);
      res.status(200).send({
        success: true,
        data,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString()
      });
    }
  };
}
