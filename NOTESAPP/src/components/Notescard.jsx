import React, { useState,useEffect } from 'react'
import Folder from './Folder'
import Note from './Note'
import Card from './Card'

const Notescard = ({ file, category }) => {
  const [notesfolder, setnotes] = useState([{ "index": 1, "topic": "personal" }, { "index": 2, "topic": "professional" }, { "index": 3, "topic": "finance" }])
  const [notesContent, setnotesContent] = useState([{ "topic": "personal", "text": "today i completed my first react notes app i am very happy and excited" }, { "topic": "personal", "text": "hello this is my personal notes" }, { "topic": "finance", "text": "today i spent 55 rs" }]);
  const [displaynotes, setdisplay] = useState(null);
  const showing = displaynotes
  ? notesContent.filter((no, ind) =>
      no.topic === displaynotes.topic && ind === displaynotes.ind
    )
  : [];
  const folder = notesfolder.map((no,index) => (
    <Card
      key={index}
      ke={no.index}
      topic={no.topic}
      notes={notesContent
  .map((note, index) => ({ ...note, realIndex: index }))  // ADD REAL INDEX
  .filter(note => note.topic === no.topic)
}
      setdisplay={setdisplay}
    />
  ));
  const handleingthenotes = (newnotetobeadded) => {
    setnotesContent(prev => ([...prev, newnotetobeadded]))
    console.log(notesContent);
  }
  let ind = 3;
  const addinguptheFolder = (addnewfolder) => {
    ind++;
    let obj = { index: ind, topic: addnewfolder.category }
    setnotes(prev => [...prev, obj])
    console.log(newfolder);
  }
 const handleclose = () => {
    setdisplay(null); // hide displayed note
  };
  return (
    <div className="content">
      <div className={`${category === false && file === false ? "notesfoldernone" : "notesfolder"}`}> {category && !file ? <Folder onaddfolder={addinguptheFolder} /> : <Note onaddNote={handleingthenotes} />}</div>
      <div className="content1">
        {folder}
      </div>
<div className="hero" style={{ display: displaynotes ? 'block' : 'none' }}>
  <div className='crossing' onClick={handleclose}>❌</div>
  {showing.map((note, index) => (
    <p key={index}>{note.text}</p>
  ))}
</div>


    </div>
  )
}

export default Notescard
