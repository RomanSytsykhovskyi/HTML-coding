import React, { useState, useEffect } from "react";

//components
import Loading from "../components/Loading";

//images
import pratimbia from "../images/albums/pratimbia.jpg";
import ghattekuloBlood from "../images/albums/ghattekuloBlood.jpg";
import ayina from "../images/albums/ayina.jpg";
import superstar from "../images/albums/superstar.jpg";
import chupLaag from "../images/albums/chupLaag.jpg";
import ekadesh from "../images/albums/ekadesh.jpg";
import ecstacyInThePalace from "../images/albums/ecstacyInThePalace.jpg";
import cityOfAngels from "../images/albums/cityOfAngels.jpg";
import Realese from "./Release";

//imitation of interaction with db (*)
const requestToDB = [
  {
    id: 33,
    background: `url(${
      pratimbia || require("../images/albums/pratimbia.jpg")
    })`,
    title: "PRATIBIMBA",
    nickname: "Dong The Great",
  },
  {
    id: 34,
    background: `url(${
      ghattekuloBlood || require("../images/albums/pratimbia.jpg")
    })`,
    title: "GHATTEKULO BLOOD",
    nickname: "Roller X",
  },
  {
    id: 35,
    background: `url(${ayina || require("../images/albums/pratimbia.jpg")})`,
    title: "AYINA",
    nickname: "Ease Is Easy",
  },
  {
    id: 36,
    background: `url(${
      superstar || require("../images/albums/pratimbia.jpg")
    })`,
    title: "SUPERSTAR",
    nickname: "Vten",
  },
  {
    id: 37,
    background: `url(${chupLaag || require("../images/albums/pratimbia.jpg")})`,
    title: "CHUP LAAG",
    nickname: "Laure",
  },
  {
    id: 38,
    background: `url(${ekadesh || require("../images/albums/pratimbia.jpg")})`,
    title: "EKADESH",
    nickname: "Yama Buddha",
  },
  {
    id: 39,
    background: `url(${
      ecstacyInThePalace || require("../images/albums/pratimbia.jpg")
    })`,
    title: "EKADESH",
    nickname: "Yama Buddha",
  },
  {
    id: 40,
    background: `url(${
      cityOfAngels || require("../images/albums/pratimbia.jpg")
    })`,
    title: "CITY OF ANGELS",
    nickname: "Slim Boss",
  },
];

const Releases = () => {
  const [pending, setPending] = useState(true);
  const [albums, setAlbums] = useState([]);

  // for fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        //(*)
        setAlbums(requestToDB);

        setPending(false);
      } catch (e) {}
    };
    fetchData();
  }, []);

  return (
    <div className="releases">
      <div className="wrapper">
        <h3 className="subtitle">Recent released</h3>
        <h2 className="title">NEPALI RAP ALBUMBS</h2>
        <p className="paragraph">
          Support your favourite artist by buying the album.
        </p>
        <div className="albums_grid">
          {pending ? (
            <Loading />
          ) : (
            albums.map((album, id) => (
              <Realese
                key={album.id}
                id={id + 1}
                background={album.background}
                title={album.title}
                nickname={album.nickname}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Releases;
