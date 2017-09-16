// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import 'phoenix_html';
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import reactDom from 'react-dom';

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

const Home = () => (<h2>Home Page</h2>);
const About = () => (<h2>About Page</h2>);

const Routes = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            <hr/>
            <section>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </section>
        </div>
    </BrowserRouter>
);

reactDom.render(<Routes />, document.getElementById('app'));
