import express,{ Application } from "express";
import cookieParser from 'cookie-parser'


const app: Application = express()
const PORT: number = Number(process.env.PORT) || 4002

app.use(express.json())
app.use(cookieParser())


app.listen(PORT, () => {
    console.log(`connected to product service at ${PORT}`)
})

export default app;