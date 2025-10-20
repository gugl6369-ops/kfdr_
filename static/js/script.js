const getInput = document.getElementById("input"); // input
const getBtn = document.getElementById("form_button"); // button click
const formBlock = document.getElementById("form-block");

const includeBlock = document.getElementById("include"); //block add



getBtn.addEventListener("click", (event)=> {
    event.preventDefault();

    const file = getInput.files[0];
    closeBlock();
    readerJSON(file, (fileParse) =>{

            fileParse.fields.forEach(field => {
                const label = document.createElement('label'); 
                label.textContent = field.label;
                includeBlock.appendChild(label);
            });
    })
});

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