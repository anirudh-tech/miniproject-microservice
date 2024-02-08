import express,{Application, Express, NextFunction, Request, Response} from "express"
import cookieParser from 'cookie-parser'
import session from 'express-session'
import cors from 'cors'
import userRoutes from "./routes/userRoute"


const app : Application = express()
const PORT : number = Number(process.env.PORT) || 4000

app.use(express.json())
app.use(cookieParser())

app.use(userRoutes)

app.use((
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err);
      const errorResponse = {
      errors: [{ message: 'Something went wrong' }],
    };
  
    return res.status(500).json(errorResponse);
  })

app.listen(4000,()=> {
    console.log('running')
})

export default app