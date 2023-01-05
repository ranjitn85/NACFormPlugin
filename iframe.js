import { _ as _decorate, s, i, e, y, a as e$1 } from './query-assigned-elements-14717414.js';

let ZwcIframe = _decorate([e$1('apac-iframe')], function (_initialize, _LitElement) {
  class ZwcIframe extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZwcIframe,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return i`
    :host {
      height: 100%;
      width: 100%;
      display: block;
    }

    .frame {
      display: inline-block;
      height: 100%;
      width: 100%;
      background-color: transparent;
      border: none;
    }
  `;
      }

    }, {
      kind: "field",
      decorators: [e()],
      key: "name",

      value() {
        return 'Hello';
      }

    }, {
      kind: "field",
      decorators: [e()],
      key: "title",

      value() {
        return 'Hello';
      }

    }, {
      kind: "field",
      decorators: [e()],
      key: "src",

      value() {
        return 'https://stackoverflow.com/';
      }

    }, {
      kind: "field",
      decorators: [e({
        type: Number
      })],
      key: "height",

      value() {
        return 500;
      }

    }, {
      kind: "method",
      static: true,
      key: "getMetaConfig",
      value: // Define scoped styles right with your component, in plain CSS
      function getMetaConfig() {
        // plugin contract information
        return {
          controlName: 'IFrame-new',
          fallbackDisableSubmit: false,
          description: 'IFrame component which can render url view with the frame',
          iconUrl: 'one-line-text',
          groupName: 'Visual',
          version: '1.3',
          properties: {
            src: {
              type: 'string',
              title: 'Source URL',
              description: 'URL of the iframe, please note many sites block been rendered in iframes'
            },
            height: {
              type: 'string',
              title: 'Height',
              description: 'Height of the component'
            }
          },
          standardProperties: {
            readOnly: true,
            required: true,
            description: true
          }
        };
      } // Render the UI as a function of component state

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        console.log('Props', {
          name: this.name,
          title: this.title,
          src: this.src,
          height: this.height
        });
        ({
          height: this.height + 'px'
        });
        return y`<p>Hello World !</p>${this.name}`;
      }
    }]
  };
}, s);

export { ZwcIframe };
