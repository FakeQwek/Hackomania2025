import express from 'express';
const router = express.Router();
import {getLocationsByRegion, getLocation, postLocation} from './scripts/controllers/userController.js';



router.get("/getLocationsByRegion/:region", getLocationsByRegion);
router.get("/getLocation/:title", getLocation);
router.post("/postLocation", postLocation);

export default router;