import mongoose from 'mongoose';

const projectModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const Project = mongoose.model("projects", projectModel);

export default Project;