import {useCallback} from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"


const toolbarOptions = [  

    ['undo','redo'], 
    ['print'],
    ['spellcheck'],
    ["paint"],

    [{ 'size': ['small', false, 'large', 'huge'] }],  
    [{ 'font': [] }],
    ['bold', 'italic', 'underline'],  
    [{ 'color': [] }, { 'background': [] }],  
    [ 'link', 'image' ],   
    [{ 'align': [] }],  
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],                                       
    [{ 'indent': '-1'}, { 'indent': '+1' }]  ,
    ['code-block'],
    ['clean'] ,

  
    ['pen'],   ["editing"], 
    ['dropdown']  ,
    ['uparrow']                           

  ];


  var icons = Quill.import("ui/icons");
    icons["undo"] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
    <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
  </svg>`;
    icons["redo"] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
    <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
  </svg>`;
  
  icons["print"] = `<img class='print' src="/print.png" alt="Pen" style="width: 18px; height: 18px;"  />`;
  icons["spellcheck"] = `<img class='spellcheck' src="/spellcheck.png" alt="Pen" style="width: 18px; height: 18px;"  />`;

  icons["paint"] = `<img class='paint' src="/print.avif" alt="Print" style="width: 18px; height: 18px;"  />`;

  icons["pen"] = `<img class='pen pen-editing' src="/pen.png" alt="Pen" style="width: 15px; height: 15px;" ></img>`;
  icons["editing"] = `<h3 class='editing penediting' style="font-weight: 500 " > Editing </h3>`;

  icons["dropdown"]= `<img class='drop-down' style="width: 20px; height: 20px;" src='/drop_down.png' alt='img'></img>`

  icons["uparrow"]= `<div class='up-arrow' ><img style="width: 20px; height: 20px;" src='/up_arrow.png' alt='img'></img></div>`



export default function TextEditor() {

    const wrapperRef = useCallback(wrapper => {
        if(wrapper == null) return 
        wrapper.innerHTML = ""
        const editor = document.createElement("div")
        wrapper.append(editor)
        new Quill(editor, {theme: "snow" , modules: {
            toolbar: toolbarOptions
        }})
    }, [])

  return (
    <div className='container' ref={wrapperRef}>

    </div>
  )
}
























