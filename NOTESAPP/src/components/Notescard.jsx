import React, { useState } from 'react'
import Folder from './Folder'
import Note from './Note'
import Card from './Card'

const Notescard = ({file,category}) => {
    const [notesfolder,setnotes]=useState([{"index":1,"topic":"personal"},{"index":2,"topic":"professional"},{"index":3,"topic":"finance"}])
    const [notesContent,setnotesContent]=useState([{"topic":"personal","text":"hello this is my personal notes"},{"topic":"personal","text":"hello this is my personal notes"},{"topic":"finance","text":"today i spent 55 rs"}]);
    const [newfolder,setnewfolder]=useState([]);
    
    const folder = notesfolder.map((no) => (
  <Card
    key={no.index}
    ke={no.index}
    topic={no.topic}
    notes={notesContent.filter(note => note.topic === no.topic)}
  />
));
    const handleingthenotes=(newnotetobeadded)=>{
        setnotesContent(prev=>[...prev,newnotetobeadded])
        console.log(notesContent);
    }
    const addinguptheFolder=(addnewfolder)=>{
        setnewfolder(prev=>[...prev,addnewfolder])
        console.log(newfolder);
    }
  return (
      <div className="content">
        <div className={`${category===false&&file===false?"notesfoldernone":"notesfolder"}`}> {category && !file ? <Folder onaddfolder={addinguptheFolder}/> : <Note onaddNote={handleingthenotes}/>}</div>
        <div className="content1">
            {folder}
        </div>
      </div>
  )
}

export default Notescard
