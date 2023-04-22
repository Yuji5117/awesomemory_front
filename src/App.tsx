import axios from "axios";
import { useEffect, useState } from "react";

import { Album } from "@/types";

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const getAlbums = async () => {
      const res = await axios.get("http://localhost:3000/albums");

      setAlbums(res.data);
    };

    getAlbums();
  }, []);

  return (
    <div className="App">
      {albums.map((album) => (
        <div key={album.id}>
          <p>{album.id}</p>
          <p>{album.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
