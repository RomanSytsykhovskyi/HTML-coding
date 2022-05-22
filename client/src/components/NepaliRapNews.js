import React from "react";

//components
import OneNew from "./OneNew";

//images
import latestNews from "../images/news/news.jpg";
import firstLatestNew from "../images/news/firstLatestNew.jpg";
import secondLatestNew from "../images/news/secondLatestNew.jpg";
import thirdLatestNew from "../images/news/thirdLatestNew.jpg";

//imitation of interaction with db (*)
const news = [
  {
    id: 300,
    background: `url(${
      firstLatestNew || require("../images/news/firstLatestNew.jpg")
    })`,
    title: (
      <>
        Gbob is dropping a <br /> DISS TRACK
      </>
    ),
    paragraph: (
      <>
        Gbob is coming back with brand new <br />
        rap.
      </>
    ),
    date: "22 April 2021",
    quantityComments: 10,
  },
  {
    id: 348,
    background: `url(${
      secondLatestNew || require("../images/news/firstLatestNew.jpg")
    })`,
    title: (
      <>
        Beef between Ease, <br /> Dong and Nasty
      </>
    ),
    paragraph: (
      <>
        Back to back disstracks are being <br /> dippped.
      </>
    ),
    date: "22 April 2021",
    quantityComments: 10,
  },
  {
    id: 403,
    background: `url(${
      thirdLatestNew || require("../images/news/firstLatestNew.jpg")
    })`,
    title: (
      <>
        Will Yodda quit
        <br /> rapping ???
      </>
    ),
    paragraph: (
      <>
        On instagram Sanam Gurung aka
        <br /> Yodda posted saying he doesnt feel...
      </>
    ),
    date: "22 April 2021",
    quantityComments: 10,
  },
];

const NepaliRapNews = () => {
  return (
    <div className="NepaliRapNews">
      <div className="wrapper">
        <h3>Nepali Rap News And Blogs</h3>
        <h2>Nepali Rap News</h2>
        <img src={latestNews} alt="rap news" />
        <h4>Every News and update of Nepali Rap Industry </h4>
        <div className="news_grid">
          {news.map((New, id) => (
            <OneNew
              key={New.id}
              id={id + 1}
              background={New.background}
              title={New.title}
              paragraph={New.paragraph}
              date={New.date}
              quantityComments={New.quantityComments}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NepaliRapNews;
