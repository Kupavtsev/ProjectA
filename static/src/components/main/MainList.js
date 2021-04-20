import React from "react";

import { YMInitializer } from 'react-yandex-metrika';

// My components
import CardTents from "./cards/CardTents";
import CardContainers from "./cards/CardContainers";
import CardArticles from "./cards/CardArticles";
import CardAbout from "./cards/CardAbout";



const MainList = () => {

    return (
        <>
            <div className="hero is-small is-primary">
                <div className="hero-body container">
                    <h4 className="title">Виды прицепов, контейнеров и контейнеровозов</h4>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="column columns is-multiline">
                    <CardTents />
                    <CardArticles />
                    <CardContainers />
                    <CardAbout />
                </div>
                <YMInitializer accounts={[75168874]} />
            </div>
        </>
    );
};

export default MainList;