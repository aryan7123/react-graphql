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

const EditStudent = ({ openEditModal, handleOpenEditModal }) => {
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
        <DialogHeader className="w-full justify-between border-b border-gray-500">
          <h3>Add Student</h3>
          <MdClose
            size={30}
            className="cursor-pointer"
            onClick={handleOpenEditModal}
          />
        </DialogHeader>
        <DialogBody>
          <div className="mb-3">
            <Typography className="mb-2 font-semibold text-base">
              Name
            </Typography>
            <Input
              className="text-gray-900 font-medium text-sm"
              label="Name"
              type="text"
              name="name"
              size="lg"
            />
          </div>
          <div className="mb-3">
            <Typography className="mb-2 font-semibold text-base">
              Age
            </Typography>
            <Input
              className="text-gray-900 font-medium text-sm"
              label="Age"
              name="age"
              type="tel"
              size="lg"
            />
          </div>
          <div className="mb-3">
            <Typography className="mb-2 font-semibold text-base">
              Email
            </Typography>
            <Input
              className="text-gray-900 font-medium text-sm"
              label="Email"
              name="email"
              type="email"
              size="lg"
            />
          </div>
          <div className="mb-3">
            <Typography className="mb-2 font-semibold text-base">
              Mobile Number
            </Typography>
            <Input
              className="text-gray-900 font-medium text-sm"
              label="Mobile Number"
              name="mobileNumber"
              type="tel"
              size="lg"
            />
          </div>
          <div className="mb-3">
            <Typography className="mb-2 font-semibold text-base">
              Subject
            </Typography>
            <Input
              className="text-gray-900 font-medium text-sm"
              label="Subject"
              name="subject"
              type="text"
              size="lg"
            />
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
            className="bg-green-500 hover:bg-green-400"
          >
            <span>save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default EditStudent