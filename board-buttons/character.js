/* global Handlebars */

/* important page elements */
var generalInfo = document.getElementById("general-info")
var coreSkills = document.getElementById("core-skills")
var faeSkills = document.getElementById("fae-skills")
var faeSkills = document.getElementById("fae-skills")
var characterStunts = document.getElementById('character-stunts');

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

    let extra = document.getElementById('additional-information');
    if (extra.value !== ''){
        md += '## Additional Information\n\n';
        md += extra.value;
    }

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

/* fill in core skills */
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Athletics',
    'link': 'https://fate-srd.com/fate-core/athletics'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Burglary',
    'link': 'https://fate-srd.com/fate-core/burglary'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Contacts',
    'link': 'https://fate-srd.com/fate-core/contacts'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Crafts',
    'link': 'https://fate-srd.com/fate-core/crafts'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Deceive',
    'link': 'https://fate-srd.com/fate-core/deceive'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Drive',
    'link': 'https://fate-srd.com/fate-core/drive'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Empathy',
    'link': 'https://fate-srd.com/fate-core/empathy'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Fight',
    'link': 'https://fate-srd.com/fate-core/fight'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Investigate',
    'link': 'https://fate-srd.com/fate-core/investigate'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Lore',
    'link': 'https://fate-srd.com/fate-core/lore'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Notice',
    'link': 'https://fate-srd.com/fate-core/notice'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Physique',
    'link': 'https://fate-srd.com/fate-core/physique'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Provoke',
    'link': 'https://fate-srd.com/fate-core/provoke'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Rapport',
    'link': 'https://fate-srd.com/fate-core/rapport'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Resources',
    'link': 'https://fate-srd.com/fate-core/resources'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Shoot',
    'link': 'https://fate-srd.com/fate-core/shoot'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Stealth',
    'link': 'https://fate-srd.com/fate-core/stealth'
});
coreSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Will',
    'link': 'https://fate-srd.com/fate-core/will'
});

/* fill in FAE skills */
faeSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Careful',
    'link': 'https://fate-srd.com/fate-accelerated/how-do-stuff-outcomes-actions-and-approaches#choose-your-approach'
});
faeSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Clever',
    'link': 'https://fate-srd.com/fate-accelerated/how-do-stuff-outcomes-actions-and-approaches#choose-your-approach'
});
faeSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Flashy',
    'link': 'https://fate-srd.com/fate-accelerated/how-do-stuff-outcomes-actions-and-approaches#choose-your-approach'
});
faeSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Forceful',
    'link': 'https://fate-srd.com/fate-accelerated/how-do-stuff-outcomes-actions-and-approaches#choose-your-approach'
});
faeSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Quick',
    'link': 'https://fate-srd.com/fate-accelerated/how-do-stuff-outcomes-actions-and-approaches#choose-your-approach'
});
faeSkills.innerHTML += Handlebars.templates.skill({
    'id': 'Sneaky',
    'link': 'https://fate-srd.com/fate-accelerated/how-do-stuff-outcomes-actions-and-approaches#choose-your-approach'
});

/* fill in the stunts section */
characterStunts.innerHTML += Handlebars.templates.aspect({
    'id':           'stunt-1',
    'label':        'Stunt 1',
    'placeholder':  'Grapelling Hook Skills',
    'description':  'What can your character do with a skill/approach ' +
    'better than everyone else?'
});
characterStunts.innerHTML += Handlebars.templates.aspect({
    'id':           'stunt-2',
    'label':        'Stunt 2',
    'placeholder':  'Batmobile - Charriot of the Night',
    'description':  'What can your character do with a skill/approach ' +
    'better than everyone else?'
});
characterStunts.innerHTML += Handlebars.templates.aspect({
    'id':           'stunt-3',
    'label':        'Stunt 3',
    'placeholder':  'Punching Things Repeatedly',
    'description':  'What can your character do with a skill/approach ' +
    'better than everyone else?'
});
