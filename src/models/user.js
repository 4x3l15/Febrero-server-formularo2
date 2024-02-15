const mongoose = require("mongoose");

const userSchema = mongoose.userSchema({
    name :{
       type:String,
       required: true
    },
    age :{
        type:Number,
        required: true
    },
    gmail :{
        type:String,
        required: true
    },
})

module.exports = mongoose.model('User',userSchema);