import React from "react";
import Subtitle from "../components/Subtitle/Subtitle";
import List from "../components/List/List";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = ({ currentPage, subtitle, context }) => {
  return (
    <>
      <Subtitle text={subtitle} />
      <List currentPage={currentPage} context={context} />
      <Sidebar active={false} />
    </>
  );
};

export default Home;
