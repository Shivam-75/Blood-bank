import { Donar } from "../models/donar.models.js";

export const donarController = async (req, res) => {
    const { email, donarName, age, gender, number, address } = req.body;

    try {
        if (!email || !donarName || !age || !gender || !number || !address) {
            return res.status(400).json({ message: "Fill All Column !!", success: false });
        }

        const donarListAdd = await Donar.create({
            email, donarName, age, gender, number, address
        })

        const saveDataFind = await Donar.findById(donarListAdd._id);
        if (!saveDataFind) {
            return res.status(400).json({ message: "Request Faild Try Again !!", success: false })
        }

        return res.status(200).json({ message: "Successfully Request Added !! ", success: true, data: saveDataFind });

    } catch (err) {
        return res.status(500).json({ message: "Server Error donar  !!", success: false, err: err.message });

    }
}


//todo Get Donar list ---api

export const getDonarController = async (req, res) => {
    const donerRequestList = await Donar.find();

    try {
        if (!donerRequestList) {
            return res.status(400).json({ message: "Donar Request Empty !!", success: false });
        }

        return res.status(200).json({ message: "Successful data Fatced !!", success: true, data: donerRequestList });

    } catch (err) {
        return res.status(500).json({ message: "Server Error donar get  !!", success: false, err: err.message });
    }
}