import { database } from "./database";
import { runConsumer, stopConsumer } from "./kafka/consumer";
import server from "./server"


(async () => {
    try {
        server;
        await database()
        .catch((error: any) => {
            console.log(error)
            process.exit()
        })

        await runConsumer()
            .catch((error: any) => {
                console.log("Error while starting consumer", error);
                process.exit();
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