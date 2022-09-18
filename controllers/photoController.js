
import Photo from "../models/PhotoModel.js";

const createPhoto = async (req, res) => {
    try {
        const photo = await Photo.create(req.body)
        res.status(201).json({
            succes: true,
            photo,
        });
    }
    catch (err) {
        res.status(500).json({ message: "Error creating photo", err });
    }
}

const getallPhoto = async (req, res) => {
    try {
        const photo = await Photo.find(req.body)
        res.status(200).json({
            success: true, photo
        })
    }
    catch (err) {
        res.status(500).json({ message: "Error creating photo", err });
    }
}
export { createPhoto, getallPhoto };
