
import Users from "../models/user.js";
/*
export const getLocationsByRegion = async (req, res) => {
    try {
        const region = req.params["region"];
        console.log(region);
        const locations = await Locations.find({Region : region});
        console.log(locations);
        res.status(200).json({success: true, data: locations});
    }
    catch(error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}
*/

export const getUsers = async (req,res) => {
    try {
        const user = await Users.find();
        console.log(user);
        res.status(200).json({success: true, data: user});
    }
    catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const getUser = async (req,res) => {
    const email = req.params["email"];
    try {
        const user = await Users.findOne({"Email" : email});
        console.log(user);
        res.status(200).json({success: true, data: user});
    }
    catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}


export const postUser = async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    try {
        const location = await Users.create({
            Username: title,
            Password: description,
            Image:"None",
            Raised: 0,
            Goal: 0,
            Supporters: 0
        });
        console.log(location);
        res.status(200).json({success: true, data: location});
    }
    catch(error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}
