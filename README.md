# dictionary v0.2.1 (in progress) - ⚠️ it's a very draft =)

✅ user can search words through WordsAPI <br/>
✅ user see a loader while request is loading <br/>
✅ user get an error notification if request fails <br/>
✅ word consists of:

* word itself;
* transcription (optionally);
* definition (or multiple);
* examples (optional);
* synonyms (optional);
* antonyms (optional);

### Plans for v1.0.0
- [x] add navbar
- [x] add sidebar with last words watched
- [x] save last words in the storage
- [x] fix bug with searching if input is empty;

### Plans for v1.0.1
- [ ] add clear last words btn
- [ ] fix error when on first app load click on last word and list replaced
- [ ] make set of unique words not in the list, but in the app (when putting on storage)
- [ ] re-arrange last searched words when there is a duplicate
- [ ] move api to service

### Plans for v1.0.2
- [ ] add favicon
- [ ] add better logo (with image)
- [ ] make Last Searched scrollable
- [ ] fix issues with words like 'hey'
- [ ] improve error handling

### Plans for v1.0.3
- [ ] move to useReducer
- [ ] add links to synonims and antonyms
- [ ] not reload if active word and clicked from last are equal

### Plans for v1.1.0
- [ ] add like btn to word and put liked words to a new page
- [ ] add like btn to last words list
- [ ] store list in the local storage
