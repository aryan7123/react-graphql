import {
  Button,
  Typography,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { MdClose } from "react-icons/md";

import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from "../queries/students";
import { GET_PROJECTS , GET_PROJECT } from "../queries/projects";
import { EDIT_PROJECT } from "../mutations/projects";
import { useState } from "react";

const EditProject = ({ openEditModal, handleOpenEditModal, modalId }) => {
  const { loading, error, data } = useQuery(GET_STUDENTS);
  const students = data && data.students ? data.students : [];

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    status: "",
    student: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <>
      <Dialog
        open={openEditModal}
        handler={handleOpenEditModal}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="w-full justify-between">
          <h3>Add Project</h3>
          <MdClose
            size={30}
            className="cursor-pointer"
            onClick={handleOpenEditModal}
          />
        </DialogHeader>
        <DialogBody>
          <div className="mb-3">
            <Typography className="mb-2 font-semibold text-base">
              Title
            </Typography>
            <Input
              className="text-gray-900 font-medium text-sm"
              label="Title"
              type="text"
              name="title"
              size="lg"
              value={handleChange}
            />
          </div>
          <div className="mb-3">
            <Typography className="mb-2 font-semibold text-base">
              Description
            </Typography>
            <Input
              className="text-gray-900 font-medium text-sm"
              label="Description"
              name="description"
              type="text"
              size="lg"
              value={handleChange}
            />
          </div>
          <div className="mb-3">
            <Typography className="mb-2 font-semibold text-base">
              Status
            </Typography>
            <select
              label="Select Status"
              name="status"
              className="border rounded-md w-full p-3 border-blue-gray-200 text-gray-900 font-medium text-sm"
              value={handleChange}
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="mb-3">
            <Typography className="mb-2 font-semibold text-base">
              Student
            </Typography>
            <select
              label="Select Student"
              name="studentId"
              className="border rounded-md w-full p-3 border-blue-gray-200 text-gray-900 font-medium text-sm"
              value={handleChange}
            >
              <option value="" disabled>
                Select Students
              </option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>{student.name}</option>
              ))}
            </select>
          </div>
          <span className="text-sm font-medium text-red-500"></span>
        </DialogBody>
        <DialogFooter>
          <Button
            onClick={handleOpenEditModal}
            className="mr-2 bg-red-500 hover:bg-red-400"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-400"
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default EditProject;
