import React, { useState, useEffect } from "react";

//components
import Loading from "../components/Loading";

//images
import pratimbia from "../images/galleries/pratimbia.jpg";
import ayina from "../images/galleries/Ayina.jpg";
import left from "../images/galleries/left.png";
import right from "../images/galleries/right.png";

//imitation of interaction with db (*)
const gallery1 = [
  {
    id: 0,
    content: (
      <div className="pratimbimba">
        <h3>DonG - The Great</h3>
        <h2>PRATIBIMBA</h2>
        <p>The album is coming soon. PreOrder now.</p>
        <button>Order Now</button>
      </div>
    ),
    background: `url(${
      pratimbia || require("../images/galleries/pratimbia.jpg")
    })`,
    alt: function () {
      return `gallery img ${this.id}`;
    },
  },
  {
    id: 1,
    content: (
      <div className="pratimbimba">
        <h3>DonG - The Great</h3>
        <h2>PRATIBIMBA</h2>
        <p>The album is coming soon. PreOrder now.</p>
        <button>Order Now</button>
      </div>
    ),
    background: `url(${
      pratimbia || require("../images/galleries/pratimbia.jpg")
    })`,
    alt: function () {
      return `gallery img ${this.id}`;
    },
  },
];

const gallery2 = [
  {
    id: 74,
    content: (
      <div className="ayina">
        <div className="buyAyina">
          <h3>EASE IS EASY</h3>
          <h2>AYINA 2022</h2>
          <p>
            Ease’s new album is releasing this summer.
            <br /> You can pre order now
          </p>
          <ul>
            <li>$9.99</li>
            <li>
              <button>Order Now</button>
            </li>
          </ul>
        </div>
        <div className="imgAyina">
          <img src={ayina} alt="ayina" />
        </div>
      </div>
    ),
    background: "#31333E",
    alt: function () {
      return `gallery img ${this.id}`;
    },
  },
  {
    id: 98,
    content: (
      <div className="ayina">
        <div className="buyAyina">
          <h3>EASE IS EASY</h3>
          <h2>AYINA 2022</h2>
          <p>
            Ease’s new album is releasing this summer.
            <br /> You can pre order now
          </p>
          <ul>
            <li>$9.99</li>
            <li>
              <button>Order Now</button>
            </li>
          </ul>
        </div>
        <div className="imgAyina">
          <img src={ayina} alt="ayina" />
        </div>
      </div>
    ),
    background: "#31333E",
    alt: function () {
      return `gallery img ${this.id}`;
    },
  },
];

const Gallery = ({ url, horizontalDimension }) => {
  //console.log("Gallery");
  const [pending, setPending] = useState(true);
  const [imgs, setImgs] = useState([]);
  const [position, setPosition] = useState(0);

  // for fetch
  useEffect(() => {
    const fetchData = async () => {
      console.log(horizontalDimension);
      try {
        //(*)
        if (url === "/api/order/album/1") {
          setImgs(gallery1);
        } else if (url === "/api/order/album/2") {
          setImgs(gallery2);
        }
        setPending(false);
      } catch (e) {}
    };
    fetchData();
  }, [horizontalDimension, url]);

  const increaseHandler = () => {
    if (position + 1 >= imgs.length) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  };

  const reduceHandler = () => {
    if (position <= 0) {
      setPosition(imgs.length - 1);
    } else {
      setPosition(position - 1);
    }
  };

  const clickNavHandler = (id) => {
    setPosition(id);
  };

  return (
    <div className="gallery">
      <div
        className="boxContainer"
        style={{
          width: `${imgs.length * horizontalDimension}px`,
          left: `${-position * horizontalDimension}px`,
        }}
      >
        {pending ? (
          <div className="box" style={{ width: "100%" }}>
            <Loading />
          </div>
        ) : (
          imgs.map((img) => (
            <div
              className="box"
              key={img.id}
              style={{
                background: img.background,
                width: `${100 / imgs.length}%`,
              }}
            >
              <div className="wrapper">{img.content}</div>
            </div>
          ))
        )}
      </div>
      <div className="gallery_navigation">
        <div className="wrapper">
          <button
            className="galleryButton galleryButtonLeft"
            onClick={reduceHandler}
            disabled={pending}
          >
            <img src={left} alt="a left button to switch a slide in leftward" />
          </button>
          <button
            className="galleryButton galleryButtonRight"
            onClick={increaseHandler}
            disabled={pending}
          >
            <img
              src={right}
              alt="a right button to switch a slide in rightward"
            />
          </button>
        </div>
      </div>
      <ul className="navigation_panel">
        {imgs.map((img, id) => (
          <li
            className={id === position ? "active" : ""}
            key={id}
            onClick={() => clickNavHandler(id)}
          >
            {id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
