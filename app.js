const express= require('express')  
const app =express()
const morgan = require ('morgan')
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

// load env variables
const dotenv = require('dotenv');
dotenv.config()
//

//db connection



mongoose.connect(
 
    process.env.MONGO_URI, {useNewUrlParser: true,useUnifiedTopology: true},function(){
      
   }
 )
  .then(() => console.log('DB Connected'))
   
  mongoose.connection.on('MongooseError', err => {
    console.log(`DB connection error: ${err.message}`)
 });

//brings the routes
const postRoutes= require("./routes/post")



//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use("/",postRoutes)
  
const port = process.env.PORT || 8080;
app.listen(port,()=>{
console.log( `a node js API is listening:  $(port)`)

})