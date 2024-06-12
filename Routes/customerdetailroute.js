import express from "express";
import { customerbooked, persondetails } from "../Controllers/customerdetails.js";

const customerrouter=express.Router();

customerrouter.get('/customerdetails',persondetails)
customerrouter.get('/multiplebooking/:customerid',customerbooked)

export default customerrouter;