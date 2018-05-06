const fs = require("fs");

const fetchNotes = () => {
    try {
        let notesString = fs.readFileSync("notes-data.json");
        return JSON.parse(notesString); // parse into an array, NOT a JSON.
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

const addNote = (title,body) => {
    // Get our array of our data objects.
    let notes = fetchNotes();
    // Create an object using our new data.
    let note = {
        title,
        body
    };

    // If an old note.title === the new title, then return it to the duplicateNotes array. Only if that array is empty...
    let duplicateNotes = notes.filter((each) => each.title === title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);

        // Return our new note. This allows us to access it in app.js
        return note;
    }
};

const getAll = (notes) => {
    return fetchNotes();
}

const getNote = (title) => {
    let notes = fetchNotes();
    let filtered = notes.filter((note) => title === note.title);
    return filtered[0];
}

const removeNote = (title) => {
    let notes = fetchNotes();
    let newNotes = notes.filter((each) => each.title !== title);
    saveNotes(newNotes);
    // If the array lengths are different, then a note was removed, and the function returns true.
    return notes.length !== newNotes.length;
}

const logNotes = (note) => {
    if(note) {
        console.log("\n -- \n", `Title: ${note.title} \n Body: ${note.body}`)
    } else {
        console.log("This failed.");
    }
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNotes
}
