var currentSelection = '';

function onTextboxFocus(id){
    if(currentSelection !== '' && currentSelection !== id){
        let lastSection = document.getElementById(currentSelection + '-hidden');
        lastSection.style = "display: none";
    }
    let newSection = document.getElementById(id + '-hidden');
    newSection.style = "display: block";
    currentSelection = id;
}
