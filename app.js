const yargs=require("yargs")
const noteUtils=require("./notes.js")
// Notes App: Add, Remove, Read, List

yargs.version="1.1.0"

// Anatomy of a note:
// Title: Title of Note
// Body: Body of Note


// Add a note
yargs.command({
    command:'add',
    describe:'Add a note.',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        console.log("Ran after add command")
        noteUtils.addNote(argv.title,argv.body)
    }
})

// Remove a note
yargs.command({
    command:'remove',
    describe:'Remove a note.',
    builder:{
        title:{
            description:"Note Title",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        console.log("Ran after remove command")
        noteUtils.removeNote(argv.title)
    }
})

// Read a note
yargs.command({
    command:'read',
    describe:'Read a note.',
    handler:function(){
        console.log("Ran after read command")
    }
})

// List all notes
yargs.command({
    command:'list',
    describe:'List all notes',
    handler:function(){
        noteUtils.listNotes()
    }
})

yargs.parse()
