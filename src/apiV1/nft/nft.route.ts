import { Router } from 'express';
import Controller from './nft.controller';

const nftRouter: Router = Router();
const controller = new Controller();

nftRouter.get('/:id/:state', controller.getNfts);
nftRouter.get('/metadata/:id/:nftid', controller.getMatadataById);
nftRouter.post('/upload/:id', controller.uploadNft);
nftRouter.get('/mint/:id/:nftid/:count/:address', controller.mintNft);

export default nftRouter;
