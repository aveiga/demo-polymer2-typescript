/// <reference path="./bower_components/polymer/types/polymer-element.d.ts" />`

/**
     * `my-element`
     * 
     *
     * @customElement
     * @polymer
     * @demo demo/index.html
     */
class MyElement extends Polymer.Element {
    static get is() { return 'my-element'; }
    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'my-element'
            }
        };
    }
}

window.customElements.define(MyElement.is, MyElement);