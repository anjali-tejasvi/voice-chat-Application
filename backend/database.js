const mongoose = require("mongoose");

function DbConnect(){
    const DB_URL  =  process.env.DB_URL;

    //database connection 
    mongoose.connect(DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    // .then(() =>{console.log("connection succesful")})
    // .catch((err)=>{console.log(err)})

    const db = mongoose.connection;
    db.on('error', console.error.bind(console,'connection error: '));
    db.once('open',()=>{
        console.log("Db connected...")
    })
}

module.exports = DbConnect;
