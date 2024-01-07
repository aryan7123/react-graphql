import mongoose from 'mongoose';

const studentModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const Student = mongoose.model("students", studentModel);

export default Student;