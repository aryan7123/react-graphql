import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
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
import { GET_STUDENT, GET_STUDENTS } from "../queries/students";
import { EDIT_STUDENT } from "../mutations/students";

const EditStudent = ({ openEditModal, handleOpenEditModal, modalId }) => {
  const { loading, error, data } = useQuery(GET_STUDENT, {
    variables: { id: modalId },
  });

  const student = data?.student || {};

  const [studentData, setStudentData] = useState({
    name: student.name || "",
    age: student.age || "",
    email: student.email || "",
    mobileNumber: student.mobileNumber || "",
    subject: student.subject || "",
  });

  const [handleSaveStudent] = useMutation(EDIT_STUDENT, {
    variables: {
      id: modalId,
      ...studentData,
    },
    refetchQueries: [{ query: GET_STUDENTS }]
    // update(cache, { data: { handleSaveStudent } }) {
    //   const { students } = cache.readQuery({ query: GET_STUDENTS });
    //   cache.writeQuery({
    //     query: GET_STUDENTS,
    //     data: { students: [...students, handleSaveStudent] },
    //   });
    // },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (data?.student) {
      setStudentData({
        ...data.student,
      });
    }
  }, [data]);

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
              value={studentData.name || ""}
              onChange={handleChange}
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
              value={studentData.age || ""}
              onChange={handleChange}
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
              value={studentData.email || ""}
              onChange={handleChange}
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
              value={studentData.mobileNumber || ""}
              onChange={handleChange}
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
              value={studentData.subject || ""}
              onChange={handleChange}
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
            onClick={handleSaveStudent}
            className="bg-green-500 hover:bg-green-400"
          >
            <span>save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default EditStudent;
