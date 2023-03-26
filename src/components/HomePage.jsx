import React, { useState, useEffect, useContext } from "react";
import Videos from "./Videos";
import SearchCtx from "../context/SearchCtx";
import axios from "axios";

import { Stack } from "@mui/material";

const HomePage = () => {
  const [homeVideos, setHomeVideos] = useState([]);

  const { search } = useContext(SearchCtx);

  const apiKey = import.meta.env.VITE_API_KEY;

  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: "New Movie Trailer" + search,
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
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
        setHomeVideos(response.data.items);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [search]);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1}
      sx={{
        marginTop: { xs: 18, md: 8 },
        marginLeft: { xs: 1, md: 29 },
      }}
    >
      <Videos videos={homeVideos} />
    </Stack>
  );
};

export default HomePage;
