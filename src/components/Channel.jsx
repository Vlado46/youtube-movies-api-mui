import React, { useEffect, useState } from "react";
import axios from "axios";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

const Channel = () => {
  const [channelVideos, setChannelVideos] = useState([]);

  const { id } = useParams();

  const apiKey = import.meta.env.VITE_API_KEY;

  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      channelId: id,
      part: "snippet,id",
      order: "date",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setChannelVideos(response.data.items);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1}
      sx={{
        marginTop: { xs: 18, md: 8 },
        marginLeft: { xs: 1, md: 29 },
      }}
    >
      <Videos videos={channelVideos} />
    </Stack>
  );
};

export default Channel;
