import mongoose from "mongoose";


const connDB = () => {
    mongoose
    .connect(process.env.DB_URL, {
        dbName: "lenslight_tr",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("bağlandı")
    }).catch((err)=> {
        console.log(err)
    })
}

export default connDB