import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Card, Typography, CardHeader, Button } from "@material-tailwind/react";
import { HiOutlineUserAdd } from "react-icons/hi";
import AddStudents from "../components/AddStudents";
import { useGlobalContext } from "../context/context";

import { useQuery } from "@apollo/client";
import { GET_STUDENTS, SEARCH_STUDENT } from "../queries/students";
import EditStudent from "../components/EditStudent";
import DeleteStudent from "../components/DeleteStudent";
import StudentRow from "../components/StudentRow";

const Students = () => {
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

  const {
    loading: studentLoading,
    error: studentError,
    data: studentsData,
  } = useQuery(GET_STUDENTS);

  const {
    loading: searchLoading,
    error: searchError,
    data: searchData,
  } = useQuery(SEARCH_STUDENT, {
    variables: { query: searchQuery },
  });

  const searchedStudents = searchData && searchData.searchStudents ? searchData.searchStudents : [];
  const students = studentsData && studentsData.students ? studentsData.students : [];

  useEffect(() => {
    document.title = "Students";
  }, []);

  return (
    <>
      <Header />

      {openModal && (
        <AddStudents openModal={openModal} handleOpenModal={handleOpenModal} />
      )}

      {openEditModal && (
        <EditStudent
          openEditModal={openEditModal}
          handleOpenEditModal={handleOpenEditModal}
          modalId={modalId}
        />
      )}

      {openDeleteModal && (
        <DeleteStudent
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
                Student List
              </Typography>
              <Typography className="font-normal text-white">
                See information about all the students
              </Typography>
            </div>
            <div className="flex flex-col items-start gap-3">
              <Button
                onClick={handleOpenModal}
                className="flex items-center text-white font-semibold gap-1"
              >
                <HiOutlineUserAdd size={15} />
                <span>Add Student</span>
              </Button>
              <input
                className="bg-white outline-none rounded-md p-2 font-semibold text-sm"
                name="query"
                placeholder="Search Students..."
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
                  Name
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Email
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Mobile Number
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Age
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Subject
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
          {searchTerm && searchedStudents.length > 0
          ? searchedStudents.map((student, index) => (
              <StudentRow
                key={index}
                index={index}
                student={student}
                handleOpenEditModal={handleOpenEditModal}
                handleOpenDeleteModal={handleOpenDeleteModal}
              />
            ))
          : students.map((student, index) => (
              <StudentRow
                key={index}
                index={index}
                student={student}
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

export default Students;
