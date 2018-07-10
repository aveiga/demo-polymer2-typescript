/// <reference path="./bower_components/polymer/types/polymer-element.d.ts" />`
/**
     * `other-element`
     * 
     *
     * @customElement
     * @polymer
     * @demo demo/index.html
     */
class OtherElement extends Polymer.Element {
    static get is() { return 'other-element'; }
    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'other-element'
            }
        };
    }
}

window.customElements.define(OtherElement.is, OtherElement);