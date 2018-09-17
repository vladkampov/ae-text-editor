import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import './SynonymBar.css';

class SynonymBar extends Component {
  handleChooseSynonym = e => {
    this.props.uiStore.replaceWord(e.target.innerHTML);
  }

  render() {
    const { synonyms, selectedWord } = this.props.synonymStore;

    return (
      <div id="synonym-bar">
        {!!selectedWord.length && synonyms && !!synonyms.length && (
          <Fragment>
            Synonyms: 
            <div id="synonym-scroll">
              {synonyms.map(w => (
                <span onClick={this.handleChooseSynonym} key={`${selectedWord}${w}`}>
                  {w}
                </span>
              ))}
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default inject('synonymStore', 'uiStore')(observer(SynonymBar));
