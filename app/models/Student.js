const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    }
)

const Student = mongoose.model('Students', StudentSchema);
exports.Student = Student;