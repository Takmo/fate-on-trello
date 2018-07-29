/* global Handlebars */

var generalInfo = document.getElementById("general-info")

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
