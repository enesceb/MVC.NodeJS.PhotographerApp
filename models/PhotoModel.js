import mongoose from "mongoose";

const {Schema} = mongoose;

const photoSchema = new Schema ({
    name: {
        tpye: String,
        required: true,
        trim: true
    },
    description:{
        tpye: String,
        required: true,
        trim: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
})

const Photo = mongoose.model("Photo",photoSchema);


export default Photo