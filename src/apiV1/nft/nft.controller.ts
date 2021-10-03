import { Request, Response } from "express";
import axios from "axios";
import * as config from "config";

const { apiKey, apiUrl } = config.get("NftMaker");

export default class NftController {
    public getNfts = async (req: Request, res: Response): Promise<any> => {
        try {
            const { id, state } = req.params;
            const { data } = await axios.get(`${apiUrl}/GetNfts/${apiKey}/${id}/${state}`)
            
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

    public getMatadataById = async (req: Request, res: Response): Promise<any> => {
        try {
            const { id, nftid } = req.params;
            const response = await axios.get(`${apiUrl}/GetNftDetailsById/${apiKey}/${id}/${nftid}`);

            res.status(200).send({
                success: true,
                data: response,
            });
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString()
            });
        }
    };

    public uploadNft = async (req: Request, res: Response): Promise<any> => {
        try {
            if (req.body) {
                throw new Error("Missing body params.")
            }
            const { id } = req.params;
            const response = await axios.post(`${apiUrl}/UploadNft/${apiKey}/${id}/`, req.body);
            
            res.status(200).send({
                success: true,
                data: response,
            });
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString()
            });
        }
    };

    public mintNft = async (req: Request, res: Response): Promise<any> => {
        try {
            const { id, nftid, count, address } = req.params;
            const response = await axios.get(`${apiUrl}/MintAndSendSpecific/${apiKey}/${id}/${nftid}/${count}/${address}`);
            
            res.status(200).send({
                success: true,
                data: response,
            });
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString()
            });
        }
    };

    public buyNft = async (req: Request, res: Response): Promise<any> => {
        try {
            if (!req.body) {
                throw new Error("Missing body params.")
            }
            const { id } = req.params;
            const response = await axios.post(`${apiUrl}/GetAddressForSpecificNftSale/${apiKey}/${id}`, req.body);
            
            res.status(200).send({
                success: true,
                data: response,
            });
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString()
            });
        }
    };
}
