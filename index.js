/* global TrelloPowerUp */

//var Promise = TrelloPowerUp.Promise;

var DO_WE_NEED_ICON = 'dunno.png';

TrelloPowerUp.initialize({
    'card-buttons': function(t, options) {
        return [
            {
                icon: DO_WE_NEED_ICON,
                text: 'Roll Dice',
                callback: function(t) {
                    return t.modal({
                        title: "Create a new Location",
                        url: 'card-buttons/roll.html',
                    });
                }
            },
            {
                icon: DO_WE_NEED_ICON,
                text: 'Invoke Aspect',
                callback: function(t) {
                    return t.modal({
                        title: "Create a new Character",
                        url: 'card-buttons/invoke.html',
                    });
                }
            },
            {
                icon: DO_WE_NEED_ICON,
                text: 'Set Outcome',
                callback: function(t) {
                    return t.modal({
                        title: "Create a new Character",
                        url: 'card-buttons/outcome.html',
                    });
                }
            }
        ];
    },
    'board-buttons': function(t, options) {
        return [
            {
                icon: DO_WE_NEED_ICON,
                text: 'New Location',
                callback: function(t) {
                    return t.popup({
                        title: "Create a new Location",
                        url: 'board-buttons/location.html',
                    });
                }
            },
            {
                icon: DO_WE_NEED_ICON,
                text: 'New Character',
                callback: function(t) {
                    return t.popup({
                        title: "Create a new Character",
                        url: 'board-buttons/character.html',
                    });
                }
            },
            {
                icon: DO_WE_NEED_ICON,
                text: 'New Encounter',
                callback: function(t) {
                    return t.popup({
                        title: "Create a new Encounter",
                        url: 'board-buttons/encounter.html',
                    });
                }
            }
        ];
    }
});
