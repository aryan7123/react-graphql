import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

import { MdClose } from "react-icons/md";
import { useMutation } from "@apollo/client";

import { DELETE_PROJECT } from "../mutations/projects";
import { GET_PROJECTS } from "../queries/projects";

const DeleteProject = ({ openDeleteModal, handleOpenDeleteModal, modalId }) => {
  const [handleDeleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: modalId },
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <>
      <Dialog
        open={openDeleteModal}
        handler={handleOpenDeleteModal}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="w-full justify-between border-b border-gray-500">
          <h3>Delete Student</h3>
          <MdClose
            size={30}
            className="cursor-pointer"
            onClick={handleOpenDeleteModal}
          />
        </DialogHeader>
        <DialogBody>
          <Typography className="mb-2 font-semibold text-base">
            Are you sure you want to delete this project?
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button
            onClick={handleOpenDeleteModal}
            className="mr-2 bg-gray-600 hover:bg-gray-600"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-red-600 hover:bg-red-500"
            onClick={handleDeleteProject}
          >
            <span>Delete</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DeleteProject;
