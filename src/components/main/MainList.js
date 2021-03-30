import React from "react";
import Containers from "./Containers";
import Tents from "./Tents";
import Trucks from "./Trucks";
import Wagons from "./Wagons";


const MainList = () => {

    return (
        <>
            <div className="hero is-primary">
                <div className="hero-body container">
                    <h4 className="title">Types</h4>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="column columns is-multiline">
                    <Tents />
                    <Trucks />
                    <Containers />
                    <Wagons />
                </div>
            </div>
        </>
    );
};

export default MainList;