# dictionary v0.1.0 (in progress) - ⚠️ really bad code for now, it's a very draft =)

⚙️ user can search words through WordsAPI <br/>
⚙️ user see very basic loader while request is loading <br/>
⚙️ user get a very basic error notification if request fails <br/>
⚙️ word consists of:

* word itself;
* transcription (optionally);
* definition (or multiple);
* examples (optional);
* synonyms (optional);
* antonyms (optional);

### Plans for v0.2.0

- [ ] add all the states of the word (initial/loading/loaded/error) to an enum;
- [x] split and decompose code to separate components;
- [x] add better loader;
- [x] add better error notification from MUI and better 'no such word' thing;
- [x] add search on enter;
- [x] add footer;
- [x] change `Styled` prefixes to `S`;
- [x] fix bug with empty word container;

### Plans for v0.2.1
- [ ] fix bug with searching if input is empty;
- [ ] add exlint rule to remove not used imports;
- [ ] make TS errors (if no prop passed) visible via overlay;
- [ ] migrate to emotion;
- [ ] props interfaces - with postfix

### Plans for v0.3.0
- [ ] improve error handling
- [ ] add navbar
