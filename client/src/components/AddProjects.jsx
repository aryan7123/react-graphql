import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const AddProjects = ({ openModal, handleOpenModal }) => {
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
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
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
            onClick={handleOpenModal}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddProjects;
