import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './FileZone.css';

class FileZone extends Component {
    componentDidMount() {
        this.props.uiStore.getText();
    }

    handleChange = e => {
        this.props.uiStore.setText(e.target.value);
    }

    handleClick = () => {
        const selection = window.getSelection();
        const selectedWord = selection.toString();

        if (selectedWord.length) {
            const { startOffset, endOffset } = selection.getRangeAt(0);
            this.props.synonymStore.getSynonym(selectedWord);
            this.props.uiStore.setSelectionRanges(startOffset, endOffset);
        } else {
            this.props.synonymStore.resetSelectedWord();
        }
    }

    render() {
        const { textArea } = this.props.uiStore;

        return (
            <div id="file-zone">
                <div
                    id="file"
                    contentEditable
                    onClick={this.handleClick}
                    onChange={this.handleChange}
                    dangerouslySetInnerHTML={{__html: textArea }}
                />
            </div>
        );
    }
}

export default inject('uiStore', 'synonymStore')(observer(FileZone));
