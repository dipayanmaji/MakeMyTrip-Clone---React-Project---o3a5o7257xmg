import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Header2 from "./components/Header2/Header2";


ReactDOM.render(
    <BrowserRouter>
        {/* <Header /> */}
        {/* <Header2 /> */}
        <App/>
        {/* <Footer /> */}
    </BrowserRouter>,
    document.getElementById("root")
);