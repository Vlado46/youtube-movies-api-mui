import { IconButton, Paper, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import SearchCtx from "../context/SearchCtx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const ctx = useContext(SearchCtx);
  const navigate = useNavigate();

  const [searchTherm, setSearchTherm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    ctx.onSearch(searchTherm);
    navigate("/");
    setSearchTherm("");
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      height="45px"
      p={1}
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#111",
        justifyContent: "space-between",
        zIndex: 1,
      }}
    >
      <YouTubeIcon
        style={{ color: "#db0101", width: "3rem", height: "3rem" }}
      />

      <Paper
        component="form"
        onSubmit={submitHandler}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 1.5,
          boxShadow: "none",
          mr: { xs: 3, md: 12 },
        }}
      >
        <input
          className="search-bar"
          placeholder="New Movie Search..."
          value={searchTherm}
          onChange={(e) => setSearchTherm(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "7px", color: "black" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default Navbar;
