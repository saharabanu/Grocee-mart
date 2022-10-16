const mongoose = require('mongoose')

const connectDB = async () => {

    try {
        mongoose.connect("mongodb+srv://DevZeroOne:DevZeroOne@cluster0.2kdey3p.mongodb.net/Dev_Commerce?retryWrites=true&w=majority")
            .then(data => {
                console.log(`MongoDB connected with server: ${data.connection.host}`)
            })
    } catch (err) {
        

        console.log(err.message)
    }
}


module.exports = connectDB;