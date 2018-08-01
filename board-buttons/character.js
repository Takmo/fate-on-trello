/* global Handlebars */

/* important page elements */
var generalInfo = document.getElementById("general-info")
var coreSkills = document.getElementById("core-skills")
var faeSkills = document.getElementById("fae-skills")

/* general functions */
function copyDescription(){
    document.getElementById('result').select();
    document.execCommand('copy');

    let button = document.getElementById('copy-description');
    button.innerHTML = "Copied!";
    window.setTimeout(function(){
        button.innerHTML = "Copy to Clipboard";
    }, 3000);
}

function generateMarkdown(){
    let md = '#' + document.getElementById('aspect-name').value + '\n\n';

    md += '## Aspects\n\n';
    md += aspectToMarkdown('high-concept', '**');
    md += aspectToMarkdown('trouble', '*');
    md += aspectToMarkdown('aspect-1');
    md += aspectToMarkdown('aspect-2');
    md += aspectToMarkdown('aspect-3');

    if (window.getComputedStyle(coreSkills).display !== 'none'){
        md += '## Skills\n\n';
        md += skillToMarkdown('Athletics');
        md += skillToMarkdown('Burglary');
        md += skillToMarkdown('Contacts');
        md += skillToMarkdown('Crafts');
        md += skillToMarkdown('Deceive');
        md += skillToMarkdown('Drive');
        md += skillToMarkdown('Empathy');
        md += skillToMarkdown('Fight');
        md += skillToMarkdown('Investigate');
        md += skillToMarkdown('Lore');
        md += skillToMarkdown('Notice');
        md += skillToMarkdown('Physique');
        md += skillToMarkdown('Provoke');
        md += skillToMarkdown('Rapport');
        md += skillToMarkdown('Resources');
        md += skillToMarkdown('Shoot');
        md += skillToMarkdown('Stealth');
        md += skillToMarkdown('Will');
    }else{
        md += '## Approach\n\n';
        md += skillToMarkdown('Careful');
        md += skillToMarkdown('Clever');
        md += skillToMarkdown('Flashy');
        md += skillToMarkdown('Forceful');
        md += skillToMarkdown('Quick');
        md += skillToMarkdown('Sneaky');
    }

    md += '## Stunts\n\n';
    md += aspectToMarkdown('stunt-1');
    md += aspectToMarkdown('stunt-2');
    md += aspectToMarkdown('stunt-3');

    document.getElementById('result').value = md;
}

/* page navigation functions */
function switchToCoreSkills(){
    document.getElementById('fae-skills').style = "display: none";
    document.getElementById('core-skills').style = "";
}

function switchToFaeSkills(){
    document.getElementById('core-skills').style = "display: none";
    document.getElementById('fae-skills').style = "";
}

function switchToForm(){
    document.getElementById('result-div').style = "display: none";
    document.getElementById('form-div').style = "";
}

function switchToResults(){
    generateMarkdown();
    document.getElementById('form-div').style = "display: none";
    document.getElementById('result-div').style = "";
}

/* fill in general information prompts */
generalInfo.innerHTML += Handlebars.templates.aspect({
    'id':           'name',
    'label':        'Name',
    'placeholder':  'e.g.: Batman, Bobanthy, Kob???',
    'description':  'A good name makes for a great character!'
});
generalInfo.innerHTML += Handlebars.templates.aspect({
    'id':           'high-concept',
    'label':        'High Concept',
    'placeholder':  'Eccentric Billionaire by Day, Masked Vigillante by Night',
    'description':  'If you had to describe your character in a single phrase, what would it be?'
});
generalInfo.innerHTML += Handlebars.templates.aspect({
    'id':           'trouble',
    'label':        'Trouble',
    'placeholder':  'Cannot Pull the Trigger / Will Not Kill',
    'description':  'What keeps getting your character into trouble?'
});
generalInfo.innerHTML += Handlebars.templates.aspect({
    'id':           'aspect-1',
    'label':        'Additional Aspect',
    'placeholder':  'Has Friends in the Police Force',
    'description':  'Tell us something meaningful about your character. ' +
    '(PRO TIP: what aspect about your character proved' +
    ' useful during one of their earlier adventures alone?)'
});
generalInfo.innerHTML += Handlebars.templates.aspect({
    'id':           'aspect-2',
    'label':        'Additional Aspect',
    'placeholder':  'Always Has the Coolest Gadgets',
    'description':  'Tell us something meaningful about your character. ' +
    '(PRO TIP: what aspect about your character proved' +
    ' useful during one of their earlier adventures with' +
    ' the player/character to your left?)'
});
generalInfo.innerHTML += Handlebars.templates.aspect({
    'id':           'aspect-3',
    'label':        'Additional Aspect',
    'placeholder':  'Demands Justice in a City Under Fire',
    'description':  'Tell us something meaningful about your character. ' +
    '(PRO TIP: what aspect about your character proved' +
    ' useful during one of their earlier adventures with' +
    ' the player/character to your right?)'
});
generalInfo.innerHTML += Handlebars.templates.aspect({
    'id':           'stunt-1',
    'label':        'Stunt 1',
    'placeholder':  'Grapelling Hook Skills',
    'description':  'What can your character do with a skill/approach ' +
    'better than everyone else?'
});
generalInfo.innerHTML += Handlebars.templates.aspect({
    'id':           'stunt-2',
    'label':        'Stunt 2',
    'placeholder':  'Batmobile - Charriot of the Night',
    'description':  'What can your character do with a skill/approach ' +
    'better than everyone else?'
});
generalInfo.innerHTML += Handlebars.templates.aspect({
    'id':           'stunt-3',
    'label':        'Stunt 3',
    'placeholder':  'Punching Things Repeatedly',
    'description':  'What can your character do with a skill/approach ' +
    'better than everyone else?'
});

/* fill in core skills */
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Athletics'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Burglary'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Contacts'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Crafts'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Deceive'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Drive'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Empathy'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Fight'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Investigate'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Lore'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Notice'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Physique'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Provoke'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Rapport'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Resources'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Shoot'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Stealth'});
coreSkills.innerHTML += Handlebars.templates.skill({'id': 'Will'});

/* fill in FAE skills */
faeSkills.innerHTML += Handlebars.templates.skill({'id': 'Careful'});
faeSkills.innerHTML += Handlebars.templates.skill({'id': 'Clever'});
faeSkills.innerHTML += Handlebars.templates.skill({'id': 'Flashy'});
faeSkills.innerHTML += Handlebars.templates.skill({'id': 'Forceful'});
faeSkills.innerHTML += Handlebars.templates.skill({'id': 'Quick'});
faeSkills.innerHTML += Handlebars.templates.skill({'id': 'Sneaky'});
