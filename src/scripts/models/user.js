import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        Username: {
            type: String,
            required: true,
        },
        
        Email: {
            type: String,
            required: true,
        },

        Password: {
            type: String,
            required: true,
        },

        Image: {
            type: String,
            required: true,
        },

        Raised: {
            type: Number,
            required: true,
        },

        Goal: {
            type: Number,
            required: true,
        },

        Supporters: {
            type: Number,
            required: true,
        }
        
    }, {
        timestamps: true,
        collection: 'Addictee'
    });

const Users = mongoose.model("Addictee", UserSchema);

export default Users;




    