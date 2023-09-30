const fs=require("fs")
const chalk=require("chalk")

function loadNotes(){
    try{
        const notesBuffer=fs.readFileSync("./notes.json")
        return JSON.parse(notesBuffer.toString())
    }catch(e){
        return []
    }
}

function saveNotes(notes){
    fs.writeFileSync("./notes.json",JSON.stringify(notes))
}

function getNotes(){
    return "Your notes..."
}

function addNote(title,body){
    
    const notes=loadNotes();
    const element=notes.find(note=>note.title===title)
    if(element!==undefined){
        console.log(chalk.red.bold(`Note with title:${title} already exists`))
        return;
    }
    notes.push({
        title,
        body
    })
    saveNotes(notes)
    console.log(chalk.green("Note added successfully.."))
}

function removeNote(title){
    const notes=loadNotes()
    const element=notes.find(note=>note.title===title)
    if(element===undefined){
        console.log(chalk.red.bold(`Note with title:${title} doesnt exist.`))
        return;
    }

    const newNotes=notes.filter(note=>note.title!==title);
    saveNotes(newNotes);

    console.log(chalk.green("Note removed successfully.."))
}

function listNotes(){
    const notes=loadNotes();
    if(notes.length===0){
        console.log(chalk.red("OOPS!! Looks like you dont have any notes created."))
        return;
    }
    console.log(chalk.greenBright.bold("Here are your notes:"))
    
    notes.forEach(note=>{
        console.log(chalk.whiteBright.bold(note.title))
        console.log(chalk.cyan.italic(note.body))
        console.log("---------------")
    })
}




module.exports={
    getNotes,
    addNote,
    removeNote,
    listNotes
}