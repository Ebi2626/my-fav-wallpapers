import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "../Image/Image";
import axios from "axios";
import FullScreen from "../Image/FullScreen";
import Error from "../Error/Error";
import { useLocation } from "react-router-dom";

const StyledList = styled.div`
  display: grid;
  width: 90%;
  max-width: 1400px;
  margin-bottom: 120px;
  min-width: 360px;
  margin-left: 80px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  @media all and (max-width: 800px){
      grid-template-columns: 1fr;
      min-width: 200px;
      margin-left: auto;
      margin-right: auto;
    }
    
`;

const List = ({ currentPage, context }) => {
  // Fullscreen of any photo
  const [fullScreen, setFullScreen] = useState(false);

  // Fullscreen items data
  const [currentItem, setCurrentItem] = useState({});

  // Connection between logic of component with location
  const [page, setPage] = useState(currentPage);
  let location = useLocation().pathname;

  useEffect(() => {
    setPage(location);
  }, [location]);

  // Initial list of pictures in home
  const [imageListHome, setImageListHome] = useState([
    { src: "initial" },
    { src: "initial" },
    { src: "initial" },
    { src: "initial" },
    { src: "initial" },
    { src: "initial" },
    { src: "initial" },
    { src: "initial" },
    { src: "initial" },
  ]);

  // Initial list of pictures in private wall
  const [imageListPrivate, setImageListPrivate] = useState([
    { src: "initial" },
  ]);

  // State of axios query parameters
  const [queryParams, setQueryParams] = useState({
    url: "https://api.unsplash.com/photos/random/",
    clientId: "D1BrfRZHaHSCkEaTzrj2Cp5VwBPhUW4939Ph0CuVHBI",
    parameters: `summer&count=9&orientation=landscape`,
  });

  // Update query parameters, when context change
  useEffect(() => {
    const newParameters = `${context.queryParams.term || "rose"},${
      context.queryParams.season
    },${context.queryParams.time}&count=9&orientation=landscape`;
    const newQueryParams = Object.assign({}, queryParams, {
      parameters: newParameters,
    });
    setQueryParams(newQueryParams);
    //eslint-disable-next-line
  }, [context.queryParams]);

  // Update list of private wall photos
  useEffect(() => {
    if (localStorage.getItem("pictures") !== null) {
      let newList = JSON.parse(localStorage.getItem("pictures"));
      setImageListPrivate(newList);
    }
    //eslint-disable-next-line
  }, [context.privateWall]);

  // Fetch photos when there is right location and queryParams change (state)
  useEffect(() => {
    if (page === "/" || page === "home") {
      fetchPhotos(queryParams, page)
        .then((data) => {
          data.newList.forEach((item, index) => {
            item.src = data.response[index].urls.regular;
            item.full = data.response[index].urls.raw;
            item.source = data.response[index].links.self;
            item.author = data.response[index].user.name;
            item.authorPage = data.response[index].user.portfolio_url;
            item.id = data.response[index].id;
          });
          setImageListHome(data.newList);
        })
        .catch((err) => console.log(err));
    } else if (page === "/private") {
      if (localStorage.getItem("pictures") !== null) {
        let privatePictures = JSON.parse(localStorage.getItem("pictures"));
        setImageListPrivate(privatePictures);
      }
    } else {
      console.log("Błąd przy nieprzewidzianym adresie");
      console.log("A ten adres to: " + page);
    }
    //eslint-disable-next-line
  }, [queryParams, location]);

  // Function to fetching photos
  async function fetchPhotos(queryParams, page) {
    let newList =
      page === "home" || page === "/"
        ? JSON.parse(JSON.stringify(imageListHome))
        : JSON.parse(JSON.stringify(imageListPrivate));
    let request = `${queryParams.url}?client_id=${queryParams.clientId}&query=${queryParams.parameters}`;
    let response = await axios.get(request);
    let data = await { newList, response: response.data };
    return data;
  }

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
      {page === "/" ? (
        imageListHome[0].id ? (
          imageListHome.map(
            (item, index) =>
              item.src !== "initial" && (
                <Image
                  id={item.id}
                  src={item.src}
                  key={item.id}
                  full={item.full}
                  source={item.source}
                  author={item.author}
                  authorPage={item.authorPage}
                  private={false}
                  openFullScreen={() => {
                    setCurrentItem({ src: item.src });
                    return setFullScreen(true);
                  }}
                />
              )
          )
        ) : (
          <Error>Brak zdjęć do wyświetlenia</Error>
        )
      ) : imageListPrivate.length > 0 ? (
        imageListPrivate.map(
          (item) =>
            item.src &&
            item.src !== "initial" && (
              <Image
                src={item.src}
                key={item.id}
                id={item.id}
                full={item.full}
                source={item.source}
                author={item.author}
                authorPage={item.authorPage}
                private={true}
                openFullScreen={() => {
                  setCurrentItem({ src: item.src });
                  return setFullScreen(true);
                }}
              />
            )
        )
      ) : (
        <Error>Brak zdjęć do wyświetlenia</Error>
      )}{" "}
    </StyledList>
  );
};
export default List;
