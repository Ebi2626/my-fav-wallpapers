import React, { useState } from "react";
import Wrapper from "./styles/Wrapper";
import Footer from "./components/Footer/Footer";
import Home from "./views/home";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import { getTime, getSeason } from "./utils";

import {   BrowserRouter as Router,
  Switch,
  Link,
  Route} from "react-router-dom";
import GlobalContext from "./context/globalContext";

function App(props) {

  // Functions handling query params

  const queryParamsHandler = ({ season, time, term }) => {
    let newQueryParams = {
      season, time, term
    }
    let newState = Object.assign({}, appState, {
      queryParams: newQueryParams
    })
    setAppState(newState)
  }
  const privateWallAdd = (items) => {
    let newPrivateWall = [...appState.privateWall, items];
    let newState = Object.assign({}, appState, {
      privateWall: newPrivateWall
    })
    setAppState(newState)

  }
  const privateWallRemove = (removeIndex) => {
    let newPrivateWall = appState.privateWall.filter((item, index) => index !== removeIndex);
    let newState = Object.assign({}, appState, {
      privateWall: newPrivateWall
    });
    setAppState(newState)

  }

  // Default context and state of root comoponent

  const defaultContext = {
    themeColor: "purple",
    privateWall: [{}],
    queryParams: {
        season: getSeason(),
        time: getTime(),
        term: "landscape"
    },
    queryParamsHandler,
    privateWallAdd,
    privateWallRemove
  }

  // Initialization of state and separately pages for convinient of use
  const [appState, setAppState] = useState(defaultContext)
  const [page, setPage] = useState("/")

  return (
    <GlobalContext.Provider value={appState}>
    <Wrapper>
          <Header title="My Wallpapers" />
      <Router>
        <Link to={page === "/" ? "/private" : "/"} onClick={() => setPage(page === "/" ? "/private" : "/")}><Button>{page === "/" ? "Private wall" : "Recommended" }</Button></Link>
        <Switch>
          <Route exact path="/">
            <Home
              currentPage="home"
                subtitle="Recommended wallpapers" />
          </Route>
          <Route path="/private">
            <Home
              currentPage="private"
              subtitle="Private wall"/>
          </Route>
        </Switch>
      </Router>
      <Footer><p>Prepared by <a href="https://linkedin.com/in/edwin-harmata/">Edwin</a> in 2020 with React</p></Footer>
      </Wrapper>
      </GlobalContext.Provider>
  );
}

export default App;
