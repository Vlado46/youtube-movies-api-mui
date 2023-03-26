import React, { useContext } from "react";
import SearchCtx from "../context/SearchCtx";
import { channels } from "../utils/channels";
import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../App.css";

const Saidbar = () => {
  const { onSearch } = useContext(SearchCtx);

  const searchResetHandler = () => {
    onSearch("");
  };

  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        position: "fixed",
        top: { xs: 24, md: 22, xl: 28 },
        height: { xs: "auto", md: "92%" },
        width: { xs: "100%", md: 221 },
        flexDirection: { md: "column" },
        paddingTop: 4,
        paddingBottom: { xs: 0, md: 3 },
      }}
    >
      <Box
        onClick={searchResetHandler}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          borderRadius: "24px",
        }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navLinkActive" : "navLinkInactive"
          }
          end
        >
          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS0mjxVDbtZcnmAion2zhvPEAqQNmUCIu6LETWQE-FT4jMrWpjWI5SLz84OildrOClTKM&usqp=CAU"
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
              }}
            />
          </span>
          <span>
            <Typography
              variant="subtitle1"
              paddingLeft={"4px"}
              sx={{ display: { xs: "none", md: "inline" } }}
            >
              New Movies
            </Typography>
          </span>
        </NavLink>
      </Box>

      {channels.map((channel) => (
        <Box
          onClick={searchResetHandler}
          sx={{
            display: "flex",
            alignItems: "center",

            borderRadius: "24px",
          }}
          key={channel.name}
        >
          <NavLink
            to={`/channel/${channel.id}`}
            className={({ isActive }) =>
              isActive ? "navLinkActive" : "navLinkInactive"
            }
            end
          >
            <span>
              <img
                src={channel.icon}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                }}
              />
            </span>
            <span>
              <Typography
                variant="subtitle1"
                paddingLeft={"4px"}
                sx={{ display: { xs: "none", md: "inline" } }}
              >
                {channel.name}
              </Typography>
            </span>
          </NavLink>
        </Box>
      ))}
    </Stack>
  );
};

export default Saidbar;
