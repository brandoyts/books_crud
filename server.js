const app = require("./app");
const db = require("./config/database");

db.authenticate(() =>
    console.log("database connection has been established")
).catch(err => console.log(`database connection failed: ${err}`));

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
