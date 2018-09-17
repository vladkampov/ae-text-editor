import { observable, action, decorate } from 'mobx';
import getMockText from '../text.service';

class UiStore {
  textArea = '';
  rangeStart = null;
  rangeEnd = null;

  replaceWord = (str, indexStart = this.rangeStart, indexEnd = this.rangeEnd) => {
    this.textArea = this.textArea.slice(0, indexStart) + str + this.textArea.slice(indexEnd);
  }

  getText = () => getMockText()
    .then(text => {
      this.textArea = text;
    });
  
  setText = text => {
    this.textArea = text;
  }

  setSelectionRanges = (start, end) => {
    this.rangeStart = start;
    this.rangeEnd = end;
  }
  
  execCommand = cmd => document.execCommand(cmd);
}

export default decorate(UiStore, {
  textArea: observable,
  execCommand: action,
  replaceWord: action,
  getText: action,
  setText: action,
  setSelectionRanges: action,
});
