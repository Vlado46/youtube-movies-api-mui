import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Saidbar from "./Saidbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Stack direction={{ xs: "column", md: "row" }}>
        <Saidbar />

        <Outlet />
      </Stack>
    </>
  );
};

export default RootLayout;
