const { connect } = require("mongoose");
const uri = process.env.DB_URI || "mongodb://localhost:27017/crudRestApi"



module.exports.connectDB = async() => {
    try {
        let con = await connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB Connected to : ${con.connection.host}@${con.connection.name}`)
    }
    catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit();
    }
}
