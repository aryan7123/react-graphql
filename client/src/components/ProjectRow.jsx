import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Typography, Button } from "@material-tailwind/react";

const ProjectRow = ({
  index,
  project,
  handleOpenEditModal,
  handleOpenDeleteModal,
}) => {
  const { title, description, status, id } = project;
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
            {title}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50 w-[700px] text-ellipsis overflow-hidden">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {description}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {status}
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

export default ProjectRow;
