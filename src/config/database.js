const mongoose = require("mongoose");

async function connectDatabase() {

    try {

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("🗄️ MongoDB : CONNECTED");

    } catch (err) {

        console.error("❌ MongoDB :", err.message);

        process.exit(1);

    }

}

module.exports = connectDatabase;
