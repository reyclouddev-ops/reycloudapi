require("dotenv").config();

const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.clear();

    console.log("======================================");

    console.log("🚀 ReyCloudAPI v1.0.0");

    console.log("🌐 PORT :", PORT);

    console.log("📡 STATUS : ONLINE");

    console.log("======================================");

});
