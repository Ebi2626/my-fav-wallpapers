import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "../Image/Image";
import axios from "axios";
import FullScreen from "../Image/FullScreen";
import { useLocation } from "react-router-dom";

const StyledList = styled.div`
  display: grid;
  width: 90%;
  max-width: 1400px;
  min-width: 360px;
  margin-left: 80px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const List = ({ querySettings, currentPage }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [page, setPage] = useState(currentPage);
  let location = useLocation().pathname;
  useEffect(() => {
    setPage(location);
    console.log(location);
  }, [location]);

  const [imageListHome, setImageListHome] = useState([
    { src: "test" },
    { src: "test" },
    { src: "test" },
    { src: "test" },
    { src: "test" },
    { src: "test" },
    { src: "test" },
    { src: "test" },
    { src: "test" },
  ]);
  const [imageListPrivate, setImageListPrivate] = useState([{}]);
  const [queryParams, setQueryParams] = useState({
    url: "https://api.unsplash.com/photos/random/",
    clientId: "D1BrfRZHaHSCkEaTzrj2Cp5VwBPhUW4939Ph0CuVHBI",
    parameters: `summer&count=9&orientation=landscape`,
  });
  async function fetchPhotos() {
    let newList = JSON.parse(JSON.stringify(imageListHome));
    let request = `${queryParams.url}?client_id=${queryParams.clientId}&query=${queryParams.parameters}`;
    console.log(newList);
    let response = await axios.get(request);
    let data = await { newList, response: response.data };
    return await data;
  }
  useEffect(() => {
    if (page === "/") {
      if (imageListHome[0].src === "test") {
        fetchPhotos()
          .then((data) => {
            console.log(
              "Nowa lista to:" + data.newList + "A dane to: " + data.response
            );
            return data;
          })
          .then((data) => {
            data.newList.forEach((item, index) => {
              item.src = data.response[index].urls.regular;
              item.full = data.response[index].urls.raw;
              item.source = data.response[index].links.self;
              item.author = data.response[index].user.name;
              item.authorPage = data.response[index].user.portfolio_url;
            });
            setImageListHome(data.newList);
          })
          .then(setTimeout(() => console.log(imageListHome[0].src), 1000))
          .catch((err) => console.log(err));
      }
    } else if (page === "/private") {
      if (localStorage.getItem("pictures") === null) {
        console.log("Nie ma żadnych zdjęć");
        console.log(currentPage);
      } else {
        console.log(JSON.parse(localStorage.getItem("pictures")));
        console.log(currentPage);
      }
    } else {
      console.log("Błąd przy nieprzewidzianym adresie");
      console.log("A ten adres to: " + page);
    }
  });
  console.log(currentItem);
  console.log(fullScreen);
  return (
    <StyledList>
      {fullScreen && (
        <FullScreen
          src={currentItem.src}
          closingFn={() => {
            setCurrentItem(false);
            setFullScreen(false);
          }}
        ></FullScreen>
      )}
      {page === "/"
        ? imageListHome.map((item, index) => (
            <Image
              src={item.src}
              key={index}
              full={item.full}
              source={item.source}
              author={item.author}
              authorPage={item.authorPage}
              openFullScreen={() => {
                setCurrentItem({ src: item.src });
                return setFullScreen(true);
              }}
            />
          ))
        : imageListPrivate.map(
            (item, index) => item.src && <Image src={item.src} key={index} />
          )}
    </StyledList>
  );
};
export default List;
