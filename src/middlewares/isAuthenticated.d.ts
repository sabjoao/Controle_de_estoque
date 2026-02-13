import {Response, Request, NextFunction} from "express";
import {Payload} from "../models/interfaces/users/auth/Payload";
import {verify} from "jsonwebtoken";


export function isAuthenticated(
    request: Request,
    repsonse: Response,
    next: NextFunction
){
    //acessar o token jwt
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {

    //validar o token
    const { sub }  = verify(token, process.env.JWT_SECRET) as Payload;
    request.user_id = sub;
    return next(); //deixa que a requisicao prossiga 
    } catch(error){

    }
    
}