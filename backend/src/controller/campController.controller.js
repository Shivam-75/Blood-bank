import { Camp } from "../models/camp.models.js";


export const AddcampController = async (req, res) => {
  const { location, date, time, contact, organized } = req.body;

  try {
    if (!location || !date || !time || !contact || !organized) {
      return res.status(400).json({ message: "Fill All column !! ", success: false });
    }

    const requestDatabase = await Camp.create({
      location, date, time, contact, organized
    })

    const CheckUplaodOrNot = await Camp.findById(requestDatabase._id);

    if (!CheckUplaodOrNot) {
      return res.status(400).json({ message: "Not Upladed Details !!", success: false });
    }

    return res.status(200).json({ message: "Successfully Uploaded !!", success: true, data: CheckUplaodOrNot });

  } catch (err) {
    return res.status(500).json({ message: "Server Error Add camp  !!", success: false, err: err.message })
  }

}

//? Get Camp Details

export const GetCampDetails = async (req, res) => {
  const campFindDetails = await Camp.find();

  try {
    if (!campFindDetails) {
      return res.status(400).json({ message: "Camp Not Found ", success: false });
    }

    return res.status(200).json({ message: "Successfully Fached Data !!", success: true, data: campFindDetails });
  } catch (err) {
    return res.status(500).json({ message: "Server Error get Request  !!", success: false, err: err.message });

  }
}