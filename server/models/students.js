import mongoose from 'mongoose';

const studentModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
});

const Student = mongoose.model("students", studentModel);

export default Student;