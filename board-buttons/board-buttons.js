var currentSelection = '';

/* template control functions */
function onAspectFocus(id){
    if(currentSelection !== '' && currentSelection !== id){
        let lastSection = document.getElementById('aspect-' + currentSelection + '-hidden');
        lastSection.style = "display: none";
    }
    let newSection = document.getElementById('aspect-' + id + '-hidden');
    newSection.style = "display: block";
    currentSelection = id;
}

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

/* Markdown generation functions */
function aspectToMarkdown(id, format=''){
    let aspect = document.getElementById('aspect-' + id).value;
    if (aspect == ''){
        return '';
    }

    let md = '### ' + format;
    md += aspect + format + '\n\n';

    let desc = document.getElementById('aspect-' + id + '-additional').value;
    if (desc == ''){
        return md;
    }

    md += desc + '\n\n';
    return md;
}

function skillToMarkdown(id){
    return '- **' + id + ':** ' + document.getElementById('skill-' + id).value + '\n\n';
}
