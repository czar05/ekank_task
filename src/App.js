//import logo from './logo.svg';
import './App.css';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css"
import { useState } from 'react';

function App() {
  const[body,setBody] = useState("");

  const handleBody = (e)=>{
    console.log(e);
    setBody(e);
  }
  return (
    <div className="App">
      <h1>Ekank task</h1>
      <h2>Text Editor</h2>
      <p>Double click to enable Editor</p>
      <ReactQuill 
       theme='bubble'
        placeholder='write somethimg here...'
        modules={App.modules}
        formats={App.formats}
        onChange={handleBody}
        value={body}
      />
    </div>
  );
}

App.modules = {
  toolbar: [
    [{header:"1"},{header:"2"},{header:[3,4,5,6]}, {font: []}],
    [{size: []}],
    ['bold', 'italic','underline','strike','blockquote'],
    [{list: 'ordered'},{list:'bullet'}],
    ['link','image','video'],
    ['clean'],
    ['code-block']
  ],
};

App.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block"
]

export default App;
