console.log("Starting app...");

// import dependencies
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
// Require functions from separate file
const notes = require("./notes.js");
// Use yargs to convert arguments entered in CLI.


// Create Option objects for our node commands.
const titleOpts = {
    describe: "Title of note", // Tells what it does.
    demand: true, // The add command MUST have title. If the demand is not met, this will automatically be set to false.
    alias: "t" // quick route for running command
}

const bodyOpts = {
    describe: "body of the note",
    demand: true,
    alias: "b"
}

// set up yargs
// Command: sets up options for commands. The co
// 1) The string of the command.
// 2) A description of what that command does.
// 3) Options for the command, in an object format. Each object pertains to a different --flag argument. If an argument is not listed, it is not required.
const argv = yargs
    .command("add", "Add a new note", {
        title: titleOpts,
        body: bodyOpts
    })
    .command("list", "List all arguments") // No options needed, it accepts no arguments.
    .command("read", "Read a note", {
        title: titleOpts
    })
    .command("remove","remove a note", {
        title: titleOpts
    })
    .help() // Sets up yargs to return info to user.
    .argv;
// Command is the 3rd argument, array value 2 (after node start);
// Or, the first argument in the lodash array when the arguments are parsed by yargs.
const command = argv._[0];

        debugger;

//console.log("Yargs: ", argv); // Print out transformed current arguments array

switch(command) {
    case "add":
        debugger;
        var note = notes.addNote(argv.title,argv.body); // Pass into the addNote function, that we imported from notes.js
        notes.logNotes(note);
        break;
    case "list":
        var allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s).`)
        debugger;
        allNotes.forEach((note) => {
            notes.logNotes(note);
        })
        break;
    case "read":
        var note = notes.getNote(argv.title);
        notes.logNotes(note);
        break;
    case "remove":
        let didRemove = notes.removeNote(argv.title);
        console.log(didRemove ? "Note removed." : "No note removed");
        break;
    default:
        console.log("help")
}