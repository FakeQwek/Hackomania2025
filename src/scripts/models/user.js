import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        Username: {
            type: String,
            required: true,
        },

        Password: {
            type: String,
            required: true,
        },
        
    }, {
        timestamps: true,
        collection: 'User'
    });

const Locations = mongoose.model("Users", UsersSchema);

export default Users;




    