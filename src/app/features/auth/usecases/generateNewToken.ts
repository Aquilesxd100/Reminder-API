import { authEnv } from "../../../envs/env";
import jwt from "jsonwebtoken";

export default function generateNewTokenMiddleware(userId : string) : string {
    const newToken : string = jwt.sign({userId: userId}, authEnv, 
    { expiresIn: '15d' });
    return newToken;
};