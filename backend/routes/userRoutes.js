import express from "express";
import { createUser } from "../controllers/userController.js";

const router=express.Router();


router.route("/").post(createUser)
               //  .get(authenticate,authorizeAdmin,getAllUsers);




export default router;