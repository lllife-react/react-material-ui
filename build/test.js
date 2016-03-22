/// <reference path="../../typings/global.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var MyCard;
    return {
        setters:[],
        execute: function() {
            MyCard = (function (_super) {
                __extends(MyCard, _super);
                function MyCard() {
                    _super.apply(this, arguments);
                }
                MyCard.prototype.render = function () {
                    return (React.createElement("span", null, "Hello, world!"));
                };
                return MyCard;
            }(React.Component));
            ReactDOM.render(React.createElement(MyCard, null), document.getElementById("react"));
        }
    }
});
