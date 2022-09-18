import Photo from "models/PhotoModel.js";

const createPhoto = (req,res) => {
    const photo = Photo.create(req.body)
    res.status(201).json({
        succes: true,
        photo,
    });
}

export {createPhoto};