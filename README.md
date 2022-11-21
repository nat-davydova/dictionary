# dictionary v1.0.0 (in progress) - ⚠️ it's a very draft =)

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

✅ last words which user has searched are shown in the 'Last searched' section and stored in `localStorage`; 

### Plans for v1.0.1
- [ ] fix error when on first app load click on last word and list replaced
- [ ] make set of unique words not in the list, but in the app (when putting on storage)
- [ ] re-arrange last searched words when there is a duplicate
- [ ] move api to service
- [ ] add stack bages into readme;

### Plans for v1.1.0
- [ ] add clear last words btn
- [ ] add delete btn for each word
- [ ] add favicon
- [ ] add better logo (with image)
- [ ] make Last Searched scrollable
- [ ] fix issues with words like 'hey'

### Plans for v1.1.1
- [ ] move to useReducer
- [ ] not reload if active word and clicked from last are equal
- [ ] improve error handling

### Plans for v2.0.0
- [ ] add links to synonims and antonyms
- [ ] add like btn to word and put liked words to a new page
- [ ] add like btn to last words list
- [ ] store list in the local storage
