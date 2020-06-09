import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand ml-5" href="/">Movie Engine</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href>Features</a>
                </li>
            </ul>
        </div>
    </nav>);
}