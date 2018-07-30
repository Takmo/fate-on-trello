var currentSelection = '';

function onSkillSelect(id, button){
    // reset button states
    [0, 1, 2, 3, 4].map(function(num){
        let elem = document.getElementById('skill-' + id + '-' + num);
        elem.className = '';
    });

    // update the selected button state
    let elem = document.getElementById('skill-' + id + '-' + button);
    elem.className = 'mod-primary';

    // update the hidden text
    let skill = document.getElementById('skill-' + id);
    skill.value = elem.innerHTML;
}

function onTextboxFocus(id){
    if(currentSelection !== '' && currentSelection !== id){
        let lastSection = document.getElementById(currentSelection + '-hidden');
        lastSection.style = "display: none";
    }
    let newSection = document.getElementById(id + '-hidden');
    newSection.style = "display: block";
    currentSelection = id;
}
