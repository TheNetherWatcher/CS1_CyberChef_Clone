import React from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const state = {
        "n" : "Bharat",
        "age" : "19"
    }
    return(
        <NoteContext.Provider>
            {props.children}
        </NoteContext.Provider>
    )
} 

export default NoteState;