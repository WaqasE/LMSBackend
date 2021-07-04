const mongoose = require('mongoose');
const AssignmentSchema = new mongoose.Schema(
    {
        file: {
            type: String,
            required: true,
        },
        startTime: {
            type: Date,
            required: true,
        },
        endTime: {
            type: Date,
            required: true,
        },
        submittedBy:{
            type:mongoose.Types.Array,
        },
        isLive:{
            type: Boolean,
            required: true,
        }
    }
)

const Assignment = mongoose.model('Assignments', AssignmentSchema);
exports.Assignment = Assignment;