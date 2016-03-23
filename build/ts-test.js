/// <reference path="../typings/browser.d.ts" />
System.register(['react', "react-dom", 'material-ui/lib/card/card', 'material-ui/lib/card/card-actions', 'material-ui/lib/card/card-header', 'material-ui/lib/card/card-media', 'material-ui/lib/card/card-title', 'material-ui/lib/flat-button', 'material-ui/lib/card/card-text'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var react_1, react_dom_1, card_1, card_actions_1, card_header_1, card_media_1, card_title_1, flat_button_1, card_text_1;
    var CardExampleWithAvatar;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (card_actions_1_1) {
                card_actions_1 = card_actions_1_1;
            },
            function (card_header_1_1) {
                card_header_1 = card_header_1_1;
            },
            function (card_media_1_1) {
                card_media_1 = card_media_1_1;
            },
            function (card_title_1_1) {
                card_title_1 = card_title_1_1;
            },
            function (flat_button_1_1) {
                flat_button_1 = flat_button_1_1;
            },
            function (card_text_1_1) {
                card_text_1 = card_text_1_1;
            }],
        execute: function() {
            CardExampleWithAvatar = function () { return (react_1.default.createElement(card_1.default, null, 
                react_1.default.createElement(card_header_1.default, {title: "URL Avatar", subtitle: "Subtitle", avatar: "http://lorempixel.com/100/100/nature/"}), 
                react_1.default.createElement(card_media_1.default, {overlay: react_1.default.createElement(card_title_1.default, {title: "Overlay title", subtitle: "Overlay subtitle"})}, 
                    react_1.default.createElement("img", {src: "http://lorempixel.com/600/337/nature/"})
                ), 
                react_1.default.createElement(card_title_1.default, {title: "Card title", subtitle: "Card subtitle"}), 
                react_1.default.createElement(card_text_1.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit." + ' ' + "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi." + ' ' + "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque." + ' ' + "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."), 
                react_1.default.createElement(card_actions_1.default, null, 
                    react_1.default.createElement(flat_button_1.default, {label: "Action1"}), 
                    react_1.default.createElement(flat_button_1.default, {label: "Action2"})))); };
            react_dom_1.default.render(react_1.default.createElement(CardExampleWithAvatar, null), document.getElementById("react"));
        }
    }
});
