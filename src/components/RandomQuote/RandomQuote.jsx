import React, { useState } from 'react'
import "./randomquote.css";

export const RandomQuote = () => {
    let quotes = [];

    let [quote, setQuote] = useState({
        text : "Don't worry about failures, worry about the chances you miss when you don't even try.",
        author: "Jack Canfield"
    });

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }

    

    loadQuotes();

  return (
    
    <div className='container' >
        <div className='top'>
            <div className='quote'>{quote?.text}</div>
        </div>
        <div className='line'></div>
        <div className='bottom'>
            <div className='author'>{quote?.author.split(',')[0]}</div>
            <div className='reload'>
                <p onClick={()=>random()}>Reload</p>
            </div>
        </div>
    </div>
  )
}
