

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var polished = require('polished');
var media = require('styled-media-query');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var media__default = /*#__PURE__*/_interopDefaultLegacy(media);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var buttonModifiers = {
    primary: function (theme) { return styled.css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    background: ", ";\n    color: ", ";\n\n    &:hover {\n      background: ", ";\n    }\n  "], ["\n    background: ", ";\n    color: ", ";\n\n    &:hover {\n      background: ", ";\n    }\n  "])), theme.colors.primary, theme.colors.white, polished.tint(0.2, theme.colors.black)); },
    secondary: function (theme) { return styled.css(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    background: ", ";\n    color: ", ";\n\n    &:hover {\n      background: ", ";\n    }\n  "], ["\n    background: ", ";\n    color: ", ";\n\n    &:hover {\n      background: ", ";\n    }\n  "])), theme.colors.white, theme.colors.black, polished.darken(0.05, theme.colors.white)); }
};
var ButtonWrapper = styled__default["default"].button(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return styled.css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n    border: none;\n    padding: ", " ", ";\n    transition: background-color ", ";\n    font-family: ", ";\n    font-weight: ", ";\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    ", ";\n  "], ["\n    border: none;\n    padding: ", " ", ";\n    transition: background-color ", ";\n    font-family: ", ";\n    font-weight: ", ";\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    ", ";\n  "])), theme.spacings.medium, theme.spacings.medium, theme.transition.fast, theme.font.family, theme.font.weights.light, !!variant && buttonModifiers[variant](theme));
});
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4$1;

var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, children = _a.children, onClick = _a.onClick;
    return (React__namespace.createElement(ButtonWrapper, { variant: variant, onClick: onClick }, children));
};

var Container = styled__default["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: ", ";\n    padding-left: calc(", " / 2);\n    padding-right: calc(", " / 2);\n\n    ", "\n\n    ", "\n  "], ["\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: ", ";\n    padding-left: calc(", " / 2);\n    padding-right: calc(", " / 2);\n\n    ", "\n\n    ", "\n  "])), theme.grid.smarthphone.container, theme.grid.smarthphone.gutter, theme.grid.smarthphone.gutter, media__default["default"].greaterThan('small')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      max-width: ", ";\n      padding-left: calc(", " / 2);\n      padding-right: calc(", " / 2);\n    "], ["\n      max-width: ", ";\n      padding-left: calc(", " / 2);\n      padding-right: calc(", " / 2);\n    "])), theme.grid.tablet.container, theme.grid.tablet.gutter, theme.grid.tablet.gutter), media__default["default"].greaterThan('medium')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      max-width: ", ";\n      padding-left: calc(", " / 2);\n      padding-right: calc(", " / 2);\n    "], ["\n      max-width: ", ";\n      padding-left: calc(", " / 2);\n      padding-right: calc(", " / 2);\n    "])), theme.grid.desktop.container, theme.grid.desktop.gutter, theme.grid.desktop.gutter));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

exports.Button = Button;
exports.Container = Container;
//# sourceMappingURL=index.js.map
