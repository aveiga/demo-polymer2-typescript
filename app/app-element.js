/// <reference path="./bower_components/polymer/types/polymer-element.d.ts" />`
/**
     * `app-element`
     *
     *
     * @customElement
     * @polymer
     * @demo demo/index.html
     */
class AppElement extends Polymer.Element {
    static get is() { return 'app-element'; }
    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'app-element'
            }
        };
    }
}
window.customElements.define(AppElement.is, AppElement);
