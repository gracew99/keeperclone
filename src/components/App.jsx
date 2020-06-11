import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";

function App(){


    function createNote(obj){
        return <Note 
            key={obj.key}
            title={obj.title}
            content={obj.content}
        />;
    }

    return (<div>
        <Header />
        {notes.map(createNote)}
        <Footer />
    </div>);

}

export default App;