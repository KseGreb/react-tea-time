import { useState } from "react";
import { QuotesSlider } from "../Data/QuotesSlider";

export function SliderQuotes(){

    const [newQuote, setNewQuote] = useState(0);
    const {id, quote, author} = QuotesSlider[newQuote];

    const previousQuote = () => {
        setNewQuote(newQuote => {
            newQuote--;
            if (newQuote < 0) {
                newQuote = QuotesSlider.length -1;
            }
            return(newQuote)
        })
    }
    
    const nextQuote = () => {
        setNewQuote(newQuote =>{
            newQuote++;
            if (newQuote > QuotesSlider.length -1){
                newQuote = 0
            } 
            return(newQuote)
        })
    }

    return(
        <div className="quotesContainer">
            <button onClick={previousQuote}>Previous</button>
            <div>
                <h2>"{quote}"</h2>
                <p>{author}</p>
            </div>
            {/* <div className="buttonContainer"> */}
                
                <button onClick={nextQuote}>Next</button>
            {/* </div> */}
        </div>
    )
}