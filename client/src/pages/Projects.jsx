import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Card, Typography, CardHeader, Button } from "@material-tailwind/react";
import { HiOutlineUserAdd } from "react-icons/hi";
import AddProjects from "../components/AddProjects";
import { useQuery } from "@apollo/client";
import { useGlobalContext } from "../context/context";

import { GET_PROJECTS, SEARCH_PROJECT } from "../queries/projects";
import EditProject from "../components/EditProject";
import DeleteProject from "../components/DeleteProject";
import ProjectRow from "../components/ProjectRow";

const Projects = () => {
  const {
    openModal,
    handleOpenModal,
    openEditModal,
    handleOpenEditModal,
    modalId,
    openDeleteModal,
    handleOpenDeleteModal,
  } = useGlobalContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState(false);

  const handleSearchQuery = (e) => {
    setSearchTerm(true);
    setSearchQuery(e.target.value);
  };

  const { loading: projectLoading, error: projectError, data: projectsData } = useQuery(GET_PROJECTS);
  const { loading: searchLoading, error: searchError, data: searchData } = useQuery(SEARCH_PROJECT, {
    variables: { query: searchQuery }
  });

  const projects = projectsData && projectsData.projects ? projectsData.projects : [];
  const searchedProjects = searchData && searchData.searchProjects ? searchData.searchProjects : [];

  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <>
      <Header />

      {openModal && (
        <AddProjects openModal={openModal} handleOpenModal={handleOpenModal} />
      )}

      {openEditModal && (
        <EditProject
          openEditModal={openEditModal}
          handleOpenEditModal={handleOpenEditModal}
          modalId={modalId}
        />
      )}

      {openDeleteModal && (
        <DeleteProject
          openDeleteModal={openDeleteModal}
          handleOpenDeleteModal={handleOpenDeleteModal}
          modalId={modalId}
        />
      )}

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
            <div className="flex flex-col items-start gap-3">
              <Button
                onClick={handleOpenModal}
                className="flex items-center text-white font-semibold gap-1"
              >
                <HiOutlineUserAdd size={15} />
                <span>Add Projects</span>
              </Button>
              <input
                className="bg-white outline-none rounded-md p-2 font-semibold text-sm"
                name="query"
                placeholder="Search Projects..."
                value={searchQuery}
                onChange={handleSearchQuery}
              />
            </div>
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
            {searchTerm && searchedProjects.length > 0
            ? searchedProjects.map((project, index) => (
                <ProjectRow
                  key={index}
                  index={index}
                  project={project}
                  handleOpenEditModal={handleOpenEditModal}
                  handleOpenDeleteModal={handleOpenDeleteModal}
                />
              ))
            : projects.map((project, index) => (
                <ProjectRow
                  key={index}
                  index={index}
                  project={project}
                  handleOpenEditModal={handleOpenEditModal}
                  handleOpenDeleteModal={handleOpenDeleteModal}
                />
              ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default Projects;
