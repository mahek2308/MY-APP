"use client";
import CreateIcon from "@mui/icons-material/Create";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBack from "@mui/icons-material/ArrowBack";
import BadgeIcon from "@mui/icons-material/Badge";
import PasswordIcon from "@mui/icons-material/Password";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //  width:400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

import Link from "next/link";
import { RoundedCorner } from "@mui/icons-material";
export default function Profile() {
  const [openNameModel, setOpenNameModel] = React.useState(false);
  const [openEmailModel, setOpenEmailModel] = React.useState(false);
  const [openPasswordModel, setOpenPasswordModel] = React.useState(false);

  const handleOpen = (modalName: string) => {
    console.log("modalOpen : ", modalName);

    if (modalName === "email") {
      setOpenEmailModel(true);
    } else if (modalName === "password") {
      setOpenPasswordModel(true);
    } else {
      setOpenNameModel(true);
    }
  };

  const handleClose = (modalName:string) => {
    console.log("modalClose : ", modalName);

    if (modalName === "email") {
      setOpenEmailModel(false);
    } else if (modalName === "password") {
      setOpenPasswordModel(false);
    } else {
      setOpenNameModel(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center ml-2 mr-2 ">
        <div>
          <button className="border-2 rounded-full ml-2 h-10 w-10">
            <Link href={"/user3"}>
              <ArrowBack />
            </Link>
          </button>
        </div>
        <div className=" mt-12 text-bold text-2xl text-center mr-40 ">
          <h1>Profile</h1>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 mt-44">
        <div className="flex justify-between items-center border-b-2 mt-12 ">
          <div className="text-xl text-[#8F959E] text-black ">
            <BadgeIcon></BadgeIcon>
          </div>
          <input
            className=" w-full p-4 text-xl  "
            type="text"
            placeholder="Name"
          />
          <button onClick={() => handleOpen("name")}>
            <CreateIcon />
          </button>
          <Modal open={openNameModel} onClose={() => handleClose("name")}>
            <Box sx={style}>
              <div className="text-2xl">Name</div>
              <div className=" text-2xl">
                <input className=" border-b-2" type="text" />
              </div>
              <button className="bg-violet-700 w-full text-xl text-white mt-5 h-10">
                Save
              </button>
            </Box>
          </Modal>
        </div>

        <div className="flex justify-between items-center border-b-2">
          <EmailIcon></EmailIcon>
          <input
            className="w-full p-4 text-xl"
            type="email"
            placeholder="Email"
          />
          <button onClick={() => handleOpen("email")}>
            <CreateIcon />
          </button>
          <Modal open={openEmailModel} onClose={() => handleClose("email")}>
            <Box sx={style}>
              <div className="text-2xl">Email</div>
              <div className=" text-2xl">
                <input className=" border-b-2" type="email" />
              </div>
              <button className="bg-violet-700 w-full text-xl text-white mt-5 h-10">
                Save
              </button>
            </Box>
          </Modal>
        </div>
        <div className="flex justify-between items-center border-b-2">
          <PasswordIcon />

          <input
            className=" p-4 text-xl"
            type="password"
            placeholder="Password"
          />
          <button onClick={() => handleOpen("password")}>
            <CreateIcon />
          </button>
          <Modal
            open={openPasswordModel}
            onClose={() => handleClose("password")}
          >
            <Box sx={style}>
              <div className="text-2xl">Password</div>
              <div className=" text-2xl">
                <input className=" border-b-2" type="text" />
              </div>
              <button className="bg-violet-700 w-full text-xl text-white mt-5 h-10">
                Save
              </button>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
