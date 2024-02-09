import server from './server'
import { runConsumer, stopConsumer } from './kafka/consumer';
import { dbConnection } from './database';

(async() => {
    try {
        server;
        await dbConnection()
        .catch((error:any) => {
            console.log(error?.message);
            process.exit();
        })

        await runConsumer()
        .catch((error: any) => {
            console.log(error);
            process.exit()
        })

        process.on('SIGTERM', async () => {
            console.info("SIGTERM received");
            console.log("consumer stopping");
            stopConsumer();
            });
    } catch (error: any) {
        console.log(error?.message);
    }
})();
