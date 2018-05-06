
// CONVERTING JSON TO OBJECTS

// const obj = {
//     name: "Harrison"
// };
//
// const stringObj = JSON.stringify(obj);
//
// console.log("This is a ", typeof stringObj);
// console.log(stringObj);
//
// const myself = JSON.parse(stringObj);
// console.log("This is an ", typeof myself);
// console.log(myself);


const fs = require("fs");

const originalNote = {
    title: "Some title",
    body: "Some body"
};

const originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync("notes.json", originalNoteString);

const noteString = fs.readFileSync("notes.json");
const note = JSON.parse(noteString);
console.log("And voila, we have our original" , typeof note, note.title);
// originalNoteString