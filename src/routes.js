import express from 'express';
const router = express.Router();
import {getUsers, getUser} from './scripts/controllers/userController.js';
import { getActivity } from './scripts/controllers/activityController.js';

router.get("/user/:email", getUser);
router.get("/users", getUsers);
router.get("/activity/:email", getActivity);

export default router;