import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Typography, Button } from "@material-tailwind/react";

const StudentRow = ({
  index,
  student,
  handleOpenEditModal,
  handleOpenDeleteModal,
}) => {
  const { id, name, email, mobileNumber, age, subject } = student;
  return (
    <>
      <tr key={index}>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {index + 1}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {name}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {email}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {mobileNumber}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {age}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {subject}
          </Typography>
        </td>
        <td className="p-4 flex items-center border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            <Button
              onClick={() => handleOpenEditModal(id)}
              className="p-2 mr-1.5 rounded-md text-white bg-green-600"
            >
              <HiOutlinePencilSquare size={20} />
            </Button>
            <Button
              onClick={() => handleOpenDeleteModal(id)}
              className="p-2 rounded-md text-white bg-red-600"
            >
              <HiOutlineTrash size={20} />
            </Button>
          </Typography>
        </td>
      </tr>
    </>
  );
};

export default StudentRow;
