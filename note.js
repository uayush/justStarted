// console.log('starting note.js');
const fs = require('fs');

var fetchNotes = () =>
{

	try
{
	var noteString = fs.readFileSync('notes-data.json');
	return JSON.parse(noteString);

}catch(e){

}
};

var saveNotes = (notes) =>
{
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));


}


var addNote = (title,body) => 
{
 	var notes = fetchNotes();
 	var note = {

 		title,
 		body
 };
//try /catch block is used because if the user enters the title and  the body for the first time it will throw an error as the file does not exist



var duplicateNotes = notes.filter((note) => note.title === title);

if(duplicateNotes.length === 0)

{
	
	notes.push(note);

	saveNotes(notes);
	console.log('note successfully saved')
	return note;
	
	
}else{
	console.log('note already present')
}
};



var getAll = () =>
{

	return fetchNotes();

}
var readNote = (title) =>
{
	var notes = fetchNotes();
	var foundNote = notes.filter((note) => note.title === title);
	return foundNote;
}
var removeNote = (title) =>
{

	var notes = fetchNotes();
	var deleteNote = notes.filter((note) => note.title !== title);
	saveNotes(deleteNote);

	return notes.length !== deleteNote.length;
}
var logNote = (note) =>
{
	console.log('----------');
	 console.log(`title: ${note.title}`);
	 console.log(`body:  ${note.body}`);

}
module.exports = {

addNote,
getAll,
readNote,
logNote,
removeNote
}
