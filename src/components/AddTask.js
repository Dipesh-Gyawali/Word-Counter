import React, { useState } from 'react'
import "../App.css"
export const AddTask = () => {
    const [word,setWord] = useState("");

    const handleClear = () => {
        setWord(" ");
    }
    
    const countWords = (text) => {
        if (text.trim() === "") {
            return 0;
        }
        const breakWord = text.trim().split(/\s+/);
        return breakWord.length;
      }

      return (
        <div className='addtask'>
            <h1>Word Counter</h1>
            <p>Free online character and word count tool</p>
            <textarea type="text" value={word} placeholder='Type or paste your text' onChange={(e) => setWord(e.target.value)} ></textarea>
            <br/>
            <button onClick={handleClear}>Clear</button>
            <br/>
            <div className='btns'>
                <span>Character Length {word.length}</span>
                <span>Number of words: {countWords(word)}</span>
            </div>
        </div>
    )
    }
