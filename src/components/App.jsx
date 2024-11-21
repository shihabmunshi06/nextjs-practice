import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Show from "./Show";

import { useSelector } from "react-redux";

function App() {
    const fetchedAllTask = useSelector(state => state.allTask)


    return (
        <React.Fragment>

            <Header />
            <CreateArea />
            {fetchedAllTask.length > 0 && fetchedAllTask.map((each, index) => <Note key={index} data={each} index={index} />)}
            <Show />
            <Footer />
        </React.Fragment>
    );
}

export default App;
