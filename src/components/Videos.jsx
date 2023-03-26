import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack direction="row" justifyContent="center" flexWrap="wrap">
      {videos?.map((video, index) => (
        <Paper
          className="videos"
          elevation={5}
          key={index}
          sx={{ height: 320, width: 360, m: 1, background: "White" }}
        >
          <Link
            to={`/video/${video.id.videoId}`}
            style={{ color: "#000", textDecoration: "none" }}
          >
            <img
              src={`${video.snippet.thumbnails.high.url}`}
              style={{ height: "240px", width: "360px" }}
            />

            <Typography variant="subtitle1" fontWeight="bold" paddingX={1}>
              {video.snippet.title.slice(0, 70)}
            </Typography>
            <Typography variant="subtitle2" paddingX={1}>
              {video.snippet.channelTitle}
            </Typography>
          </Link>
        </Paper>
      ))}
    </Stack>
  );
};

export default Videos;
