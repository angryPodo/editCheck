import express from "express";
import { userSignin } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post('/signin', userSignin); //url로 post 요청을 보내면 userSignin이 동작. 응답 전달은 controller에서 한다.
