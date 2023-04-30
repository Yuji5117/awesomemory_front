import axios from "axios";
import { useEffect, useState } from "react";
import { Reset } from "styled-reset";

import { Sidebar } from "./components/Sidebar";

import { Album } from "@/types";

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const getAlbums = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/albums`);

      setAlbums(res.data);
    };

    getAlbums();
  }, []);

  return (
    <>
      <Reset />
      <div className="App">
        <Sidebar />
      </div>
    </>
  );
}

export default App;
