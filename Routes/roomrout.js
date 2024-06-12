import express from "express"
import { createrooms, getroomdetails, roombookingdata } from "../Controllers/room.js";



const router=express.Router();

//rooms
router.post('/createroom',createrooms);
router.get('/getroomdetails',getroomdetails);
router.get('/bookedroomdetails',roombookingdata);

export default router;