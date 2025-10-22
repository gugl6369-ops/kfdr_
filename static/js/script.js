const getInput = document.getElementById("input"); // input
const getBtn = document.getElementById("form_button"); // button click
const formBlock = document.getElementById("form-block");
const bodyBlock = document.getElementById('body');
const labelBlock = document.getElementsByClassName('.form_input-wrap');
const textLabel = document.getElementById('text-content');

const mainBlock = document.getElementById("main");
const includeBlock = document.getElementById("include"); //block add
let i = 1;
companion();

getInput.addEventListener('input', (event) =>{
    const fileInput = getInput.files[0];
    textLabel.textContent = "Файл: " + fileInput.name +"  Тип: " + fileInput.type;
});



getBtn.addEventListener("click", (event)=> {
    event.preventDefault();
   
    
    const file = getInput.files[0];
    if (fileCheck(0, getInput.files)){}
    else{
        return alert('бред!');
    }
    closeInclude();
    closeBlock(mainBlock, formBlock);
    readerJSON(file, (fileParse) =>{
            
            //name create
            const input_name = document.createElement('h1');
            input_name.textContent = fileParse.name;
            input_name.classList.add('include_name');   
            includeBlock.appendChild(input_name);

            const field_block = document.createElement('div');
            field_block.classList.add('include_field-block');
            includeBlock.appendChild(field_block);
            fileParse.fields.forEach(field => {
                
                //block create
                const input_block = document.createElement('div');
                input_block.classList.add('include_input-block');
                field_block.appendChild(input_block);

                //label create
                if (field.label) label = createLabel(field.label, input_block);

                //input create
                if (field.input) input = createInput(field.input, input_block);

                //связка id
                if(label && input) {
                    label.htmlFor = input.id;
                }
               
                
            });

            if (fileParse.references){
                const references_block = document.createElement('div');
                references_block.classList.add('include_references-block');
                field_block.appendChild(references_block);

                const references_btn_block = document.createElement('div');
                references_btn_block.classList.add('include_references-btn-block');
                references_block.appendChild(references_btn_block);

                fileParse.references.forEach(referenc => {
                    if(referenc.input){ createInput(referenc.input, references_btn_block)}
                    if(referenc.text){ 
                        const references_block_text = document.createElement('div');
                        references_block_text.classList.add('include_references-block-text');
                        references_block.appendChild(references_block_text);
                        createReference(referenc, references_block_text)}
                });
            }
            

            if (fileParse.buttons){
                const btn_block = document.createElement('div');
                btn_block.classList.add('include_btn-block');
                includeBlock.appendChild(btn_block);

                fileParse.buttons.forEach(button => {
                    const include_btn = document.createElement('button');
                    include_btn.textContent = button.text;
                    include_btn.classList.add('btn', 'include_btn');
                    btn_block.appendChild(include_btn);
                })
            }
            if (!fileParse.buttons){
                const blocki = document.createElement('div');
                blocki.classList.add('include_blocki');
                includeBlock.appendChild(blocki);
            }
            
    })
    
});



function createReference(name, path){
    if(name["text without ref"]){ 
        const block_text_ref = document.createElement('p');
        block_text_ref.textContent = name["text without ref"];
        block_text_ref.classList.add('include_references-text-ref');
        path.appendChild(block_text_ref);
    }
    const block_text = document.createElement('a');
    block_text.textContent = name.text;
    block_text.classList.add('include_references-text');
    block_text.href = name.ref;
    path.appendChild(block_text);
}



function createLabel(name, path){
    const block = document.createElement('label');
    block.textContent = name;
    block.classList.add('include_label');
    path.appendChild(block);
    return block;
}

function fileCheck(list, fileList){
    if(fileList.length == 0){
        return false;
    }


    if (list == 0){
        list = ['js', 'json'];
    }

    console.log(fileList);
    
    for(let i = 0; i < fileList.length; i++){
        let fileName = fileList[i].name;
        let type = fileName.slice(fileName.lastIndexOf('.') + 1);  
        if(!list.includes(type)){
            console.log('все НЕ окей');
            return false;
        }
    }
    return true;
}



function createInput(name, path){
    const input = document.createElement('input');

    const fieldInput = name;
    input.type = fieldInput.type;
    input.id = i++;
    input.classList.add('include_input');
     if (fieldInput.colors || fieldInput.technologies){ 
        let fieldType; 
        if(fieldInput.colors){ fieldType = fieldInput.colors; }
        if(fieldInput.technologies){fieldType = fieldInput.technologies}
        createSelect(name, path, fieldType);
        return true;
    }
    if (fieldInput.placeholder) input.setAttribute('placeholder', fieldInput.placeholder);
    if (fieldInput.required) input.required = true;
    if (fieldInput.multiple) input.multiple = true;
    if (fieldInput.filetype) { 
        input.addEventListener('change', () => {
            if (!fileCheck(fieldInput.filetype, input.files)){
                alert('Плохой файл!');
                input.value = '';
            };
        })
    };
   
    path.appendChild(input);
    return input;
}



function closeBlock(blockOpen, blockClose){
    blockClose.style.display = 'none';
    blockOpen.style.display = 'block';
}

function readerJSON(file, back){
   // if (fileCheck(0, file)){
    try{
        const fr = new FileReader();
        fr.readAsText(file);
        fr.onload = () =>{
            const fileParse = JSON.parse(fr.result);
            back(fileParse);
        }
    }
    catch{
        alert('Error!');
    }
  //  }
 //   else{
  //      alert('a?');
    //}
}

function closeInclude(){
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('include_btn-x');
    includeBlock.appendChild(closeBtn);
    closeBtn.addEventListener('click', () =>  {
        closeBlock(formBlock, mainBlock);
        includeBlock.innerHTML = '';
    })
}

function createSelect(name, path, fieldType){
    const block = document.createElement('select');
    for(let i = 0; i < fieldType.length; i++){
        const blockOption = document.createElement('option');
        blockOption.value = fieldType[i];
        blockOption.textContent = fieldType[i];
        let check = String(fieldType[i]);
        if(check.startsWith("#")){
            blockOption.classList.add('include_color');
            blockOption.style.backgroundColor = fieldType[i];
        }
        block.appendChild(blockOption);
    }
    block.id = i++;
    if (name.required) block.required = true;
    if (name.multiple) block.multiple = true;
    path.appendChild(block);
}


function companion(){
    const pet = document.createElement('div');
    pet.classList.add('body_pet');
    body.appendChild(pet);
    
    pet.addEventListener('click', (event) => {

        let shiftX = event.clientX - pet.getBoundingClientRect().left;
        let shiftY = event.clientY - pet.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            pet.style.left = pageX + 20 + 'px';
            pet.style.top = pageY + 20 + 'px';
            
        }

        function onMouseMove(event){
            moveAt(event.pageX, event.pageY)
        }

        document.addEventListener('mousemove', onMouseMove);

    })
    pet.addEventListener('click', (event) => { alert('Ура, вы нашли Зиги, таперь он ваш паразит/друг на проверке!')})
}
