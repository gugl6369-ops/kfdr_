const getInput = document.getElementById("input"); // input
const getBtn = document.getElementById("form_button"); // button click
const formBlock = document.getElementById("form-block");

const includeBlock = document.getElementById("include"); //block add



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
                //block create
                const input_block = document.createElement('div');
                input_block.classList.add('input-block');
                includeBlock.appendChild(input_block);


                //label create
                if (field.label) createLabel(field.label, input_block);

                //input create
                

                //связка 
              //  if() label.htmlFor = input.id;

                
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
}

function createInput(name, path){
    const input = document.createElement('input');
    input.classList.add('input-bock_input-', toString(name.type));
    

    const fieldInput = field.input;
    console.log(typeof(fieldInput));
    input.type = fieldInput.type;
    if (fieldInput.placeholder) input.setAttribute('placeholder', fieldInput.placeholder);
    if (fieldInput.required) input.setAttribute('required', '');
    input_block.appendChild(input);
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