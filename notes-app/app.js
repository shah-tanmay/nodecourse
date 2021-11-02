const yargs = require("yargs");
const notes = require("./notes.js");
yargs.version("1.1.0");

// Creating a command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Main",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "removes the note",
  builder: {
    title: {
      describe: "Removing",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "Lists the note",
  handler() {
    notes.listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "Read only mode",
  builder: {
    title: {
      describe: "Read",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
