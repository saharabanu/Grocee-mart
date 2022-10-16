const app = require("./app/app");
const connectDB = require("./db/database");
const cloudinary = require('cloudinary');

//config
require("dotenv").config({ path: "./config/.env" })


//global error handler
app.use((err, req, res, next) => {

    const statusCode = err.status ? err.status : 500;
    const message = err.message ? err.message : "Server Error Occurred";

    res.status(statusCode).json({ message })

})



// database connection
connectDB();
// cloudinary added 

cloudinary.config({ 
    cloud_name:'dbz86abqu', 
    api_key:'778568258634195', 
    api_secret:'6CkuwieNfMRQvly4wEntCSTMcx4',
    secure: true
  });

const port = process.env.PORT || 8080
// console.log(port)
app.listen(port, () => {
    console.log("listening on port ", port)
});