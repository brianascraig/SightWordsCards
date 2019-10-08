import React from 'react';
import './Flashcards-page.css';
import Cards from "./cards/Cards";
import Practice from "./practice/Practice";
import Quiz from "./quiz/Quiz";

export default function FlashcardsPage() {
    return (
        <div className="FlashcardsPage">
            <Cards/>
            <Practice/>
            <Quiz/>
        </div>
    );
}
