import React from 'react';
import { ControlPanel, FileZone } from "./components";
import './App.css';

export default () => (
    <div className="App">
        <header>
            <span>Simple Text Editor</span>
        </header>
        <main>
            <ControlPanel/>
            <FileZone/>
        </main>
    </div>
);
