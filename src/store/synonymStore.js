import { observable, action, computed, decorate } from 'mobx';
import api from '../utils/api';

const SYNONIM_API = 'https://api.datamuse.com/words?rel_syn='

class SynonymsStore {
  lib = {};
  selectedWord = '';
  isLoading = false;

  getSynonym = word => {
    this.isLoading = true;
    this.selectedWord = word;
    
    return api(({ get }) => get(`${SYNONIM_API}${word}`))
      .then(({ data }) => {
        this.isLoading = false;
        this.lib[word] = data.map(({ word }) => word);
      });
  }

  resetSelectedWord = () => this.selectedWord = '';
  
  get synonyms() {
    return this.lib[this.selectedWord] || [];
  }
}

export default decorate(SynonymsStore, {
  lib: observable,
  selectedWord: observable,
  isLoading: observable,
  getSynonym: action,
  resetSelectedWord: action,
  synonyms: computed,
});
