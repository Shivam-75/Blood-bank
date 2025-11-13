import { BloodRequest } from "../models/bloodRequest.model.js";

export const bloodRequestController = async (req, res) => {
    const { patientName, gender, bloodGroup, unitsBlood, hospitalName, doctorName, age, contactNumber } = req.body;
    try {

        if (!patientName || !gender || !bloodGroup || !unitsBlood || !hospitalName || !doctorName || !age || !contactNumber) {
            return res.status(400).json({ message: "All Field Are Require !!", success: false });
        }

        const BloodRequestList = await BloodRequest.create({
            patientName, gender, bloodGroup, unitsBlood, hospitalName, doctorName, age, contactNumber
        })

        const saveDatabaseOrNot = await BloodRequest.findById(BloodRequestList._id);

        if (!saveDatabaseOrNot) {
            return res.status(400).json({ message: "Request Not Send  !!", success: false });
        }

        return res.status(200).json({ message: "Successfully Submit Request !!", success: true, data: saveDatabaseOrNot });


    } catch (err) {
        return res.status(500).json({ message: "Server Error blood Request !!", success: false, extraError: err.message })
    }
}