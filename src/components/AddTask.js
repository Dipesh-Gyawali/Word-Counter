import React, { useState } from 'react'

export const AddTask = () => {
    const [word,setWord] = useState("");

    const handleClear = () => {
        setWord(" ");
    }
    return (
        <div>
            <h1>Word Counter</h1>
            <p>Free online character and word count tool</p>
            <textarea type="text" value={word} placeholder='Type or paste your text' onChange={(e) => setWord(e.target.value)} ></textarea>
            <br/>
            <button onClick={handleClear}>Clear</button>
            <br/>
            <button>Character</button>
            <button>Word</button>
        </div>
    )
    }
