import { NextFunction , Request , Response  } from "express";
import logger from "../logger";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("Middleware Error Hadnling");
    //@ts-ignore
    
    const errStatus = res.statusCode;
    const errMsg = err.message || 'Something went wrong';
    if (errStatus >= 500) {
        logger.error(err);
    }
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}

export default errorHandler;