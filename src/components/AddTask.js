import React, { useState } from 'react'

export const AddTask = () => {
    const [word,setWord] = useState("");

    const handleClear = () => {
        setWord(" ");
    }
    const countWords = (text) => {
        const breakWord = text.trim().split(/\s+/);
        return breakWord.length;
      }

    return (
        <div>
            <h1>Word Counter</h1>
            <p>Free online character and word count tool</p>
            <textarea type="text" value={word} placeholder='Type or paste your text' onChange={(e) => setWord(e.target.value)} ></textarea>
            <br/>
            <button onClick={handleClear}>Clear</button>
            <br/>
            <button>Character Length {word.length}</button>
            <button>Number of words: {countWords(word)}</button>
            <hr/>
        </div>
    )
    }
