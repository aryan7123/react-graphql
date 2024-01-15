import { useEffect } from "react";
import Header from "../components/Header";
import { Card, Typography, CardHeader, Button } from "@material-tailwind/react";
import { HiOutlineUserAdd, HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import AddStudents from "../components/AddStudents";
import { useGlobalContext } from "../context/context";

import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from "../queries/students";
import EditStudent from "../components/EditStudent";

const Students = () => {
  const {
    openModal,
    handleOpenModal,
    openEditModal,
    handleOpenEditModal,
    modalId,
  } = useGlobalContext();
  const { loading, error, data } = useQuery(GET_STUDENTS);

  const students = data && data.students ? data.students : [];

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
            <Button
              onClick={handleOpenModal}
              className="flex items-center text-white font-semibold gap-1"
            >
              <HiOutlineUserAdd size={15} />
              <span>Add Student</span>
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
            {students.map((student, index) => (
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
                    {student.name}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {student.email}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {student.mobileNumber}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {student.age}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {student.subject}
                  </Typography>
                </td>
                <td className="p-4 flex items-center border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <Button
                      onClick={() => handleOpenEditModal(student.id)}
                      className="p-2 mr-1.5 rounded-md text-white bg-green-600"
                    >
                      <HiOutlinePencilSquare size={20} />
                    </Button>
                    <Button className="p-2 rounded-md text-white bg-red-600">
                      <HiOutlineTrash size={20} />
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

export default Students;
