const mongoose = require('mongoose');
module.exports.connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("success")
    } catch(error) {
        console.log("error")
    }
}
