import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Channel from "./components/Channel";
import HomePage from "./components/HomePage";
import RootLayout from "./components/RootLayout";
import Video from "./components/Video";
import SearchCtx from "./context/SearchCtx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/channel/:id", element: <Channel /> },
      { path: "/video/:id", element: <Video /> },
    ],
  },
]);

function App() {
  const [search, setSearch] = useState("");

  return (
    <SearchCtx.Provider
      value={{
        search: search,
        onSearch: setSearch,
      }}
    >
      <RouterProvider router={router} />
    </SearchCtx.Provider>
  );
}

export default App;
