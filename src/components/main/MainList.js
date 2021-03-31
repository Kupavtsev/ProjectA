import React from "react";

// My components
import CardTents from "./cards/CardTents";
import CardContainers from "./cards/CardContainers";
import CardTrucks from "./cards/CardTrucks";
import CardTNVED from "./cards/CardTNVED";



const MainList = () => {

    return (
        <>
            <div className="hero is-small is-primary">
                <div className="hero-body container">
                    <h4 className="title">Виды прицепов, контейнеров и ТН-ВЭД</h4>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="column columns is-multiline">
                    <CardTents />
                    <CardTrucks />
                    <CardContainers />
                    <CardTNVED />
                </div>
            </div>
        </>
    );
};

export default MainList;