import mongoose from "mongoose";

const ActivitySchema = mongoose.Schema(
    {
        
        Email: {
            type: String,
            required: true,
        },

        Activities: {
            type: Number,
            required: true,
        },

        Streak: {
            type: Number,
            required: true,
        },

        Points: {
            type: Number,
            required: true,
        },

    }, {
        timestamps: true,
        collection: 'Activity'
    });

const Activities = mongoose.model("Activity", ActivitySchema);

export default Activities;




    