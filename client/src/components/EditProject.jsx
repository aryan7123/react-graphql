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

const EditProject = () => {
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
              size="lg"
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
            >
              <option value="" disabled>
                Select Students
              </option>
            </select>
          </div>
          <span className="text-sm font-medium text-red-500"></span>
        </DialogBody>
        <DialogFooter>
          <Button
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
