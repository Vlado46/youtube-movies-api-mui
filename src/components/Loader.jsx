import React from "react";
import { CircularProgress, Stack } from "@mui/material";

const Loader = () => (
  <Stack
    // direction="row"
    // justifyContent="flex-start"
    // alignItems="center"
    // height="80vh"
    marginX="43vw"
    marginY="40vh"
  >
    <CircularProgress />
  </Stack>
);

export default Loader;
