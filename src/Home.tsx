import * as React from "react";
import "./Home.css";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export const Home = () => (
    <div>
        <h3>Ich möchte...</h3>
        <Link to="/help">
            <h2>helfen</h2>
        </Link>
        <Link to="/get-help">
            <h2>Hilfe</h2>
        </Link>
        <br/>
        <br/>
        <sub>
            Icons by <a href="https://www.flaticon.com/authors/freepik">Freepik@Flaticon</a>
        </sub>
        <Link to="/about">
            <h4 id="about-link">Anleitung</h4>
        </Link>
    </div>
)