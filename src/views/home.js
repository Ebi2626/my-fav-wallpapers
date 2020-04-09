import React, { useState } from "react";
import Subtitle from "../components/Subtitle/Subtitle";
import Images from "../data/mocukpImages";
import List from "../components/List/List";
import Sidebar from "../components/Sidebar/Sidebar";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";

const Home = ({ currentPage, subtitle }) => {
    console.log(currentPage)
    return (
        <>
            <Subtitle text={subtitle} />
            <List items={Images} currentPage={currentPage}/>
            <Sidebar active={false} />
        </>
        )
    } 

export default Home;