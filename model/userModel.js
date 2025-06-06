const { default: mongoose } = require("mongoose");

const user=mongoose.models.User || mongoose.model("User",{
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export default User;