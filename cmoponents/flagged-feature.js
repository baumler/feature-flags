import flags from "./features.json";

const template = document.createElement("template");
template.innerHTML = '<slot name="feature"></slot>';

customElements.define(
  "flagged-feature",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.isActive();
    }

    isActive() {
      const flag = this.getAttribute("flag");
      const env = flags[process.env.JAVASCRIPT_APP_ENVIRONMENT];
      const feature = env.find((item) => item.key === flag);
      if (feature && !feature.active) {
        this.render();
      }
    }

    render() {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
);
