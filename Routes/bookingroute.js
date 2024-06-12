import express from "express"
import { listallcustomers, newbooking } from "../Controllers/booking.js";


const router=express.Router();

router.post('/bookroom',newbooking)
router.get('/customerbookeddata',listallcustomers)



export default router;