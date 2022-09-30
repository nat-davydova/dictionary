# dictionary v0.1.0 (in progress)

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
- [ ] split and decompose large `definition` part (also synonyms-antonyms outsource as common part);
- [ ] add better loader;
- [ ] add better error notification from MUI and better 'no such word' thing;
- [ ] add search on enter;
- [ ] add footer;
- [ ] remove all the `Styled` prefixes;
