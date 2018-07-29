function onTextboxFocus(id){
    let description = document.getElementById(id + '-description');
    description.style = "display: block";
}

function onTextboxLeave(id){
    let description = document.getElementById(id + '-description');
    description.style = "display: none";
}
