const getInput = document.getElementById("input"); // input
const getBtn = document.getElementById("form_button"); // button click
const formBlock = document.getElementById("form-block");

const includeBlock = document.getElementById("include"); //block add
let i = 1;


getBtn.addEventListener("click", (event)=> {
    event.preventDefault();

    const file = getInput.files[0];
    closeBlock();
    readerJSON(file, (fileParse) =>{
            //name create
            const input_name = document.createElement('h1');
            input_name.textContent = fileParse.name;
            input_name.classList.add('include_name');
            includeBlock.appendChild(input_name);


            fileParse.fields.forEach(field => {
                try{
                //block create
                const input_block = document.createElement('div');
                input_block.classList.add('input-block');
                includeBlock.appendChild(input_block);

                //label create
                if (field.label) label = createLabel(field.label, input_block);

                //input create
                if (field.input) input = createInput(field.input, input_block);

                //связка id
                if(label && input) {
                    label.htmlFor = input.id;
                    i++;
                }
                }
                catch{
                    alert('Error!')
                }
                
            });
            fileParse.buttons.forEach(button => {
                const include_btn = document.createElement('button');
                include_btn.textContent = button.text;
                include_btn.classList.add('include_btn');
                includeBlock.appendChild(include_btn);
            })
        

    })
});



function createLabel(name, path){
    const block = document.createElement('label');
    block.textContent = name;
    block.classList.add('include_name');
    path.appendChild(block);
    return block;
}

function createInput(name, path){
    const input = document.createElement('input');

    const fieldInput = name;
    input.type = fieldInput.type;
    input.id = i;

    if (fieldInput.placeholder) input.setAttribute('placeholder', fieldInput.placeholder);
    if (fieldInput.required) input.required = true;
    if (fieldInput.multiple) input.multiple = true;
    if (fieldInput.filetype) input.setAttribute('accept', fieldInput.filetype);
    path.appendChild(input);
    return input;
}


function closeBlock(){
    formBlock.style.display = 'none';
}

function readerJSON(file, back){
    const fr = new FileReader();
    fr.readAsText(file);
    fr.onload = () =>{
        const fileParse = JSON.parse(fr.result);
        back(fileParse);
    }
}

// заметки мои

// парсить ток стринги через file reader - 

// - при загрузке файла появляется кнопка*(идея)