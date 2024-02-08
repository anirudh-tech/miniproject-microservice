import server from './server'
import { dbConnection } from './database'
(async ()=> {
    try {
        server;
        await dbConnection()
        .catch((error:any) => {
            console.log(error);
            process.exit();
        })
    } catch (error: any) {
        console.log(error?.message)
    }
})()