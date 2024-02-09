import express,{ Application, NextFunction, Request, Response } from "express";
import cookieParser from 'cookie-parser'
import productRouter from './routes/productRoutes'


const app: Application = express()
const PORT: number = Number(process.env.PORT) || 4003

app.use(express.json())
app.use(cookieParser())

app.use(productRouter)

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

app.listen(PORT, () => {
    console.log(`connected to admin service at ${PORT}`)
})

export default app;



