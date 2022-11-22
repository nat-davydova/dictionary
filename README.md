# dictionary v1.0.0 (in progress) - ⚠️ it's a very draft =)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

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
- [x] fix error when on first app load click on word and list replaced
- [x] make set of unique words not in the list, but in the app (when putting on storage)
- [ ] refactor setting word func
- [ ] re-arrange last searched words when there is a duplicate
- [ ] move api to service
- [x] add stack bages into readme;

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
