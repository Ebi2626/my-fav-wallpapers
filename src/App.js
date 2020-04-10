import React, { useState, useEffect } from "react";
import Wrapper from "./styles/Wrapper";
import Footer from "./components/Footer/Footer";
import Home from "./views/home";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import { getTime, getSeason } from "./utils";
import GlobalContext from "./context/globalContext";
import {   BrowserRouter as Router,
  Switch,
  Link,
  Route,
useLocation} from "react-router-dom";


function App() {
  // Functions handling query params

  const queryParamsHandler = ({ season, term, color }) => {
    let newQueryParams = {
      season, term, time: getTime()
    }
    let newState = Object.assign({}, appState, {
      themeColor: color,
      queryParams: newQueryParams
    })
    setAppState(newState)
  }
  const privateWallAdd = (item, prevContext) => {
    let newPrivateWall = prevContext.privateWall.slice();
    newPrivateWall.push(item);
    let newState = Object.assign({}, prevContext, {
       privateWall:[...newPrivateWall]
    })
    if (localStorage.getItem("pictures") !== null) {
      let oldPictures = JSON.parse(localStorage.getItem("pictures"));
      oldPictures.push(item);
      localStorage.setItem("pictures", JSON.stringify(oldPictures));
    } else {
      localStorage.setItem("pictures", JSON.stringify(newPrivateWall));
    }
   setAppState(newState)
  }
  const privateWallRemove = (removeId, prevContext) => {
    if (localStorage.getItem("pictures") !== null) {
      let oldPrivateWall = JSON.parse(localStorage.getItem("pictures"))
      let newPrivateWall = oldPrivateWall.filter((item) => item.id !== removeId);
      localStorage.setItem("pictures", JSON.stringify(newPrivateWall));
      let newState = Object.assign({}, prevContext, {
        privateWall: [...newPrivateWall]
      });
      setAppState(newState)
    } else {
      if (prevContext.privateWall[0].id !== null) {
        let oldPrivateWall = prevContext.privateWall;
        let newPrivateWall = oldPrivateWall.filter((item) => item.id !== removeId);
        localStorage.setItem("pictures", JSON.stringify(newPrivateWall));
        let newState = Object.assign({}, prevContext, {
       privateWall:[...newPrivateWall]
     })
        setAppState(newState)
      } else {
        console.log("Jakiś błąd");
      }
    }
  }

  // Default context and state of root comoponent

  const defaultContext = {
    themeColor: "purple",
    privateWall: [],
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

  const location = window.location.href;
  useEffect(() => {
    if (location.match(/private/i)) {
      setPage('/private');
    } else {
      setPage('/')
    }
  }, [location])
  

  return (
    <GlobalContext.Provider value={appState}>
    <Wrapper>
        <Header title="My Wallpapers"/>
      <Router>
        <Link to={page === "/" ? "/private" : "/"} onClick={() => setPage(page === "/" ? "/private" : "/")}><Button>{page === "/" ? "Private wall" : "Recommended" }</Button></Link>
        <Switch>
          <Route exact path="/">
              <Home
                context={appState}
              currentPage={page}
                subtitle="Recommended wallpapers" />
          </Route>
          <Route path="/private">
              <Home
                 context={appState}
              currentPage={page}
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
// Podpiąć ustawienia do aplikacji
// Podpiąć serduszka do zapisywania w localStorage
