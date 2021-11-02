const fs = require("fs");
const chalk = require("chalk");

const getnotes = () => "Your Notes......";

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes([notes]);
    console.log(chalk.bgGreen("New Notes added!"));
  } else {
    console.log(chalk.bgRed("Note Already Taken!"));
  }
};

const saveNotes = ([notes]) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
const removeNote = (title) => {
  const notes = loadNotes();
  const exist = notes.filter((note) => note.title !== title);
  if (notes.length > exist.length) {
    saveNotes([exist]);
    console.log(chalk.bgGreen("Note Removed!"));
  } else {
    console.log(chalk.bgRed("No Note Found"));
  }
};

const listNotes = (title) => {
  const notes = loadNotes();
  console.log(chalk.bgGreen("Your Notes!"));
  notes.forEach((note) => {
    console.log(chalk.greenBright(note.title));
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const read = notes.find((note) => note.title === title);
  if (read) {
    console.log(chalk.bgRedBright(read.title));
    console.log(read.body);
  } else {
    console.log(chalk.bgRed("No Note Found"));
  }
};

module.exports = {
  getnotes: getnotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
