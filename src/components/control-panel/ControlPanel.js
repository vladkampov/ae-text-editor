import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { SynonymBar } from '../';
import './ControlPanel.css';

class ControlPanel extends Component {
    handleClick = type => {
        this.props.uiStore.execCommand(type)
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" onClick={() => this.handleClick('bold')}><b>B</b></button>
                    <button className="format-action" type="button" onClick={() => this.handleClick('italic')}><i>I</i></button>
                    <button className="format-action" type="button" onClick={() => this.handleClick('underline')}><u>U</u></button>
                </div>
                <SynonymBar />
            </div>
        );
    }
}

export default inject('uiStore')(ControlPanel);
