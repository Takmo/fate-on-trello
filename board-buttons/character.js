/* global Handlebars */

var generalInfo = document.getElementById("general-info")
var coreSkills = document.getElementById("core-skills")
var faeSkills = document.getElementById("fae-skills")

generalInfo.innerHTML += Handlebars.templates.textbox({
    'id':           'name',
    'label':        'Name',
    'placeholder':  'e.g.: Batman, Bobanthy, Kob???',
    'description':  'A good name makes for a great character!'
});
generalInfo.innerHTML += Handlebars.templates.textbox({
    'id':           'high-concept',
    'label':        'High Concept',
    'placeholder':  'Eccentric Billionaire by Day, Masked Vigillante by Night',
    'description':  'If you had to describe your character in a single phrase, what would it be?'
});
generalInfo.innerHTML += Handlebars.templates.textbox({
    'id':           'trouble',
    'label':        'Trouble',
    'placeholder':  'Cannot Pull the Trigger / Will Not Kill',
    'description':  'What keeps getting your character into trouble?'
});
generalInfo.innerHTML += Handlebars.templates.textbox({
    'id':           'aspect-1',
    'label':        'Additional Aspect',
    'placeholder':  'Has Friends in the Police Force',
    'description':  'Tell us something meaningful about your character. ' +
                    '(PRO TIP: what aspect about your character proved' +
                    ' useful during one of their earlier adventures alone?)'
});
generalInfo.innerHTML += Handlebars.templates.textbox({
    'id':           'aspect-2',
    'label':        'Additional Aspect',
    'placeholder':  'Always Has the Coolest Gadgets',
    'description':  'Tell us something meaningful about your character. ' +
                    '(PRO TIP: what aspect about your character proved' +
                    ' useful during one of their earlier adventures with' +
                    ' the player/character to your left?)'
});
generalInfo.innerHTML += Handlebars.templates.textbox({
    'id':           'aspect-3',
    'label':        'Additional Aspect',
    'placeholder':  'Demands Justice in a City Under Fire',
    'description':  'Tell us something meaningful about your character. ' +
                    '(PRO TIP: what aspect about your character proved' +
                    ' useful during one of their earlier adventures with' +
                    ' the player/character to your right?)'
});
generalInfo.innerHTML += Handlebars.templates.textbox({
    'id':           'stunt-1',
    'label':        'Stunt 1',
    'placeholder':  'Grapelling Hook Skills',
    'description':  'What can your character do with a skill/approach ' +
                    'better than everyone else?'
});
generalInfo.innerHTML += Handlebars.templates.textbox({
    'id':           'stunt-2',
    'label':        'Stunt 2',
    'placeholder':  'Batmobile - Charriot of the Night',
    'description':  'What can your character do with a skill/approach ' +
                    'better than everyone else?'
});
generalInfo.innerHTML += Handlebars.templates.textbox({
    'id':           'stunt-3',
    'label':        'Stunt 3',
    'placeholder':  'Punching Things Repeatedly',
    'description':  'What can your character do with a skill/approach ' +
                    'better than everyone else?'
});

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

faeSkills.innerHTML += Handlebars.templates.skill({'id': 'Careful'});
faeSkills.innerHTML += Handlebars.templates.skill({'id': 'Clever'});
faeSkills.innerHTML += Handlebars.templates.skill({'id': 'Flashy'});
faeSkills.innerHTML += Handlebars.templates.skill({'id': 'Forceful'});
faeSkills.innerHTML += Handlebars.templates.skill({'id': 'Quick'});
faeSkills.innerHTML += Handlebars.templates.skill({'id': 'Sneaky'});

function switchAccelerated(){
    document.getElementById('core-skills').style = "display: none";
    document.getElementById('fae-skills').style = "";
}

function switchCore(){
    document.getElementById('fae-skills').style = "display: none";
    document.getElementById('core-skills').style = "";
}
