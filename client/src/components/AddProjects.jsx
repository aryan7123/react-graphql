import {
  Button,
  Typography,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { MdClose } from "react-icons/md";

import { GET_STUDENTS } from "../queries/students.js";
import { GET_PROJECTS } from "../queries/projects.js";
import { ADD_PROJECTS } from "../mutations/projects.js";

const AddProjects = ({ openModal, handleOpenModal }) => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    status: "",
    studentId: "",
  });

  const { title, description, status, studentId } = projectData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const [handleSaveProject] = useMutation(ADD_PROJECTS, { 
    variables: { title, description, status, studentId },
    update(cache, { data: { handleSaveProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, handleSaveProject] },
      });
    }
  });

  const { loading, data, error } = useQuery(GET_STUDENTS);

  const students = data && data.students ? data.students : [];

  return (
    <>
      <Dialog
        open={openModal}
        handler={handleOpenModal}
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
            onClick={handleOpenModal}
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
              value={title}
              onChange={handleChange}
              size="lg"
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
              value={description}
              onChange={handleChange}
              size="lg"
            />
          </div>
          <div className="mb-3">
            <Typography className="mb-2 font-semibold text-base">
              Status
            </Typography>
            <Select
              label="Select Status"
              name="status"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              onChange={handleChange}
              value={status}
            >
              <Option value="Not Started">Not Started</Option>
              <Option value="In Progress">In Progress</Option>
              <Option value="Completed">Completed</Option>
            </Select>
          </div>
          <div className="mb-3">
            <Typography className="mb-2 font-semibold text-base">
              Student
            </Typography>
            <Select
              label="Select Student"
              name="studentId"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              onChange={handleChange}
              value={studentId}
            >
              {students.map((student) => (
                <Option key={student.id} value={student.id}>{student.name}</Option>        
              ))}
            </Select>
          </div>
          <span className="text-sm font-medium text-red-500"></span>
        </DialogBody>
        <DialogFooter>
          <Button
            onClick={handleOpenModal}
            className="mr-2 bg-red-500 hover:bg-red-400"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-400"
            onClick={handleSaveProject}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddProjects;
