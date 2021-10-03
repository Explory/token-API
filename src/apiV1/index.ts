import { Router } from 'express';
import project from './project/project.route';
import nft from './nft/nft.route';

const router: Router = Router();

router.use('/project', project);
router.use('/nft', nft);

export default router;
