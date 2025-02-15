import express from 'express';
const router = express.Router();
import {getUsers, getUser} from './scripts/controllers/userController.js';

router.get("/user/:email", getUser);
router.get("/users", getUsers);

export default router;