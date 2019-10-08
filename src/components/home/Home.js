import React from 'react';
import './Home.css';
import FirstGrade from "./first-grade/First-grade";
import Kindergarten from "./kindergarten/Kindergarten";
import PreK from "./pre-k/Pre-k";
import SecondGrade from "./second-grade/Second-grade";
import ThirdGrade from "./third-grade/Third-grade";
import Slider from "./slider/Slider";

export default function Home() {
    return (
        <div className="Home">
            <Slider/>
            <PreK/>
            <Kindergarten/>
            <FirstGrade/>
            <SecondGrade/>
            <ThirdGrade/>
        </div>
    );
}
