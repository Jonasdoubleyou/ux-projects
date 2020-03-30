import * as React from "react";
import "./Home.css";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export const Home = () => (
    <div>
        <Logo />

        <h3>Ich möchte...</h3>
        <Link to="/help">
            <h2>helfen</h2>
        </Link>
        <Link to="/get-help">
            <h2>Hilfe</h2>
        </Link>

        <Link to="/about">
            <h4 id="about-link">Info</h4>
        </Link>
    </div>
)