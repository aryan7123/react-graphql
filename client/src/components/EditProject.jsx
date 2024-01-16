import {
  Button,
  Typography,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

import { useMutation, useQuery } from "@apollo/client";
import { GET_STUDENTS } from "../queries/students";
import { GET_PROJECTS, GET_PROJECT } from "../queries/projects";
import { EDIT_PROJECT } from "../mutations/projects";

const EditProject = ({ openEditModal, handleOpenEditModal, modalId }) => {
  const { data: allStudentData } = useQuery(GET_STUDENTS);
  const students = allStudentData && allStudentData.students ? allStudentData.students : [];

  const { data: projectData } = useQuery(GET_PROJECT, {
    variables: { id: modalId },
  });
  // console.log(projectData);

  const project = projectData?.project || {};
  // console.log(project);

  const [projectFormData, setProjectFormData] = useState({
    title: project.title || "",
    description: project.description || "",
    status: project.status || "",
    student: project.student || ""
  });

  const { title, description, student, status} = projectFormData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const [handleSaveProject] = useMutation(EDIT_PROJECT, {
    variables: {
      id: modalId,
      ...projectFormData,
    },
    refetchQueries: [{ query: GET_PROJECTS }]
    // update(cache, { data: { handleSaveProject } }) {
    //   const { projects } = cache.readQuery({ query: GET_PROJECTS });
    //   cache.writeQuery({
    //     query: GET_PROJECTS,
    //     data: { projects: [...projects, handleSaveProject] },
    //   });
    // },
  });

  useEffect(() => {
    if (projectData?.project) {
      setProjectFormData({
        ...projectData.project,
      });
    }
  }, [projectData]);

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
              value={title}
              onChange={handleChange}
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
              value={description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Typography className="mb-2 font-semibold text-base">
              Status
            </Typography>
            <select
              label="Select Status"
              name="status"
              value={status}
              onChange={handleChange}
              className="border rounded-md w-full p-3 border-blue-gray-200 text-gray-900 font-medium text-sm"
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
              value={student}
              onChange={handleChange}
              className="border rounded-md w-full p-3 border-blue-gray-200 text-gray-900 font-medium text-sm"
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
            onClick={handleSaveProject}
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
