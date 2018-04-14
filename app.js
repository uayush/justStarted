// console.log('starting app.js');
const fs = require('fs');
const notes = require('./note.js');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs
.command('add','Add a new note',{
	title: {
			describe:'title of note',
			demand: true,
			alias : 't'
	},
	body: {
			describe:'body of note',
			demand: true,
			alias : 'b'
	}
})
.command('list','lists all commands')
.command('read','reads a command',
	{
	title: {
			describe:'title of note',
			demand: true,
			alias : 't'
		}
	})
.command('remove','removes the note',
{
	title: {
			describe:'title of note',
			demand: true,
			alias : 't'
		}
	})
.argv;

var command = process.argv[2];
// console.log('command:', command);
// console.log('yargs',argv);

if (command === 'read')
{
	var note = notes.readNote(argv.title);
	if(note)
	{
			console.log('note found');
			notes.logNote(note);
	}else{

		console.log('note does not exist');
	}

} else if (command === 'remove') 
{

var noteRemoved = notes.removeNote(argv.title);
var message = noteRemoved ? 'note was removed' : 'note not found';
console.log(message);

}else if (command === 'list') 
{

var allNotes = notes.getAll();
console.log(`printing ${allNotes.length} note(s).`);
allNotes.forEach((note) => notes.logNote(note));

}else if (command === 'add') 
{

var note = notes.addNote(argv.title,argv.body);
notes.logNote(note);

}else  
{

console.log('command not recognised');

}

console.log(process.argv)