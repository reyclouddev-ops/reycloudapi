require("dotenv").config();

const app = require("./src/app");
const connectDatabase = require("./src/config/database");

const PORT = process.env.PORT || 3000;

async function startServer() {

    await connectDatabase();

    app.listen(PORT, () => {

        console.clear();

        console.log("================================");

        console.log("🚀 ReyCloudAPI v1.0.0");

        console.log("🌐 Port :", PORT);

        console.log("📡 Status : ONLINE");

        console.log("================================");

    });

}

startServer();
