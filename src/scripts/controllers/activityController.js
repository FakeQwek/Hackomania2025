
import Activities from "../models/activity.js";

export const getActivity = async (req,res) => {
    const email = req.params["email"];

    try {
        const activity = await Activities.findOne({"email" : email});
        res.status(200).json({success: true, data: activity});
    }
    catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const putActivity = async (req,res) => {

    
}





