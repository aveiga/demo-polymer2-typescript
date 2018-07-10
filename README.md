# demo-polymer2-typescript
This is a demo on how to create (and integrate) web components created with Polymer 2 and using Typescript

## How to add TypeScript?
* Install typescript globally: `npm install -g typescript`
* Refactor your elements so that they import the JavaScript file instead of specifying the JS inline:
```html
<link rel="import" href="../polymer/polymer-element.html">

<dom-module id="my-element">
  <template>
    <style>
      :host {
        display: block;
      }
    </style>
    <h2>Hello [[prop1]]!</h2>
  </template>

  <script src="./my-element.js"></script>
</dom-module>
```
* Create a TypeScript file with the name of your web component. That's where the code for your web component will reside. At the top of the file, reference the typings of your dependencies:
```typescript
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
```
* create a tsconfig.json file:
```json
{
    "compilerOptions": {
        "target": "ES2015"
    },
    "include": [
        "*.ts"
    ]
}
```
* on the root of your web component, run: `tsc`
* on the root of your web component, run: `polymer serve`
* check your web component on the browser