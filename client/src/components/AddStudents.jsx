import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { useMutation } from "@apollo/client";

import { GET_STUDENTS } from "../queries/students.js";
import { ADD_STUDENTS } from "../mutations/students.js";

import { MdClose } from "react-icons/md";

const AddStudents = ({ openModal, handleOpenModal }) => {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    email: "",
    mobileNumber: "",
    subject: "",
  });

  const { name, age, email, mobileNumber, subject } = studentData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const [handleSaveStudent, { data, loading, error }] = useMutation(
    ADD_STUDENTS,
    {
      refetchQueries: [GET_STUDENTS, "getStudents"],
    }
  );

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

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
        <DialogHeader className="w-full justify-between border-b border-gray-500">
          <h3>Add Student</h3>
          <MdClose
            size={30}
            className="cursor-pointer"
            onClick={handleOpenModal}
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
              value={name}
              onChange={handleChange}
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
              value={age}
              onChange={handleChange}
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
              value={email}
              onChange={handleChange}
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
              value={mobileNumber}
              onChange={handleChange}
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
              value={subject}
              onChange={handleChange}
            />
          </div>
          <span className="text-sm font-medium text-red-500"></span>
        </DialogBody>
        <DialogFooter>
          <Button
            onClick={handleOpenModal}
            className="mr-2 bg-red-500 hover:bg-red-400"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-400"
            onClick={() =>
              handleSaveStudent({
                variables: { name, age, email, mobileNumber, subject },
              })
            }
          >
            <span>save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddStudents;
