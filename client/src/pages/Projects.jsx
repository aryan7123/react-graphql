import { useEffect } from "react";
import Header from "../components/Header";
import { Card, Typography, CardHeader, Button } from "@material-tailwind/react";
import { HiOutlineUserAdd, HiOutlineTrash  } from "react-icons/hi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import AddProjects from "../components/AddProjects";
import { useQuery } from "@apollo/client";
import { useGlobalContext } from "../context/context";

import { GET_PROJECTS } from "../queries/projects";
import EditProject from "../components/EditProject";

const Projects = () => {
  const { openModal, handleOpenModal, openEditModal, handleOpenEditModal } = useGlobalContext();
  const { loading, error, data } = useQuery(GET_PROJECTS);

  const projects = data && data.projects ? data.projects : [];

  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <>
      <Header />

      {openModal && <AddProjects openModal={openModal} handleOpenModal={handleOpenModal}/>}

      {openEditModal && <EditProject openEditModal={openEditModal} handleOpenEditModal={handleOpenEditModal}/>}
      
      <Card className="w-full md:max-w-6xl mx-auto mt-10 rounded-md md:overflow-hidden overflow-x-scroll">
        <CardHeader className="max-w-full bg-gray-700 rounded-none mx-0 mt-0 shadow-none">
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-0 md:items-center justify-between p-4">
            <div className="flex flex-col items-start">
              <Typography className="font-semibold text-white">
                Project List
              </Typography>
              <Typography className="font-normal text-white">
                See information about all the projects prepared by the students
              </Typography>
            </div>
            <Button onClick={handleOpenModal} className="flex items-center text-white font-semibold gap-1">
              <HiOutlineUserAdd size={15}/>
              <span>Add Project</span>
            </Button>
          </div>
        </CardHeader>
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  S No.
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Title
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Description
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Status
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Action
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
          {projects.map((project, index) => (
              <tr key={index}>
                <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {index + 1}
                </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {project.title}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50 w-[700px] text-ellipsis overflow-hidden">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {project.description}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {project.status}
                  </Typography>
                </td>
                <td className="p-4 flex items-center border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <Button onClick={handleOpenEditModal} className="p-2 mr-1.5 rounded-md text-white bg-green-600">
                      <HiOutlinePencilSquare size={20}/>
                    </Button>
                    <Button className="p-2 rounded-md text-white bg-red-600">
                      <HiOutlineTrash size={20}/>
                    </Button>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default Projects;
