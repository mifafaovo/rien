
const log = console.log

const resultBlock = document.getElementById("result-block")
const resultPage = document.createElement('div')
resultBlock.appendChild(resultPage)


// codemirror editor
const myTextArea = document.getElementById('editor-text')
const editor = CodeMirror.fromTextArea(myTextArea, {
  lineNumbers: true,
  mode: 'htmlmixed',
  htmlMode: true,
  theme: 'material',
  lineWrapping: true
});


let code, compiled, c;

const updateContent = () =>{
  code = editor.getValue()
  try {
    compiled = rien(code)
  } catch (e) {
    if (e.type !== 'ParseError') throw e;
    log(e.message);
  }
  log(compiled)
  eval(compiled);
  c = Component({ target: resultPage });
  c.create();
  c.mount(); 
}

updateContent();

editor.on('change', () => {
  c.detach();
  updateContent();
});

