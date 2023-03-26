import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/system";

const Video = () => {
  const { id } = useParams();
  const [items, setItems] = useState();

  const apiKey = import.meta.env.VITE_API_KEY;

  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/videos",
    params: { part: "contentDetails,snippet,statistics", id: id },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  return (
    <Stack
      className="video"
      sx={{
        display: "flex",
        flexGrow: 1,
        marginTop: { xs: 20, md: 11 },
        marginLeft: { xs: 1, md: 32 },
        marginRight: { xs: 1, md: 4 },
        backgroundColor: "white",
        alignItems: "flex-start",
      }}
    >
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        controls
      />
      <Box display="flex" flexDirection="column" sx={{ p: 1 }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
        >{`${items?.items[0].snippet.title}`}</Typography>
        <Typography variant="subtitle2">
          {items?.items[0].snippet.channelTitle}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Video;
