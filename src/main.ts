import { LitElement, html, css } from "lit";

class MyElement extends LitElement {
  static styles = css`
    @tailwind base;
    @tailwind utilities;
  `;

  render() {
    return html`
      <h1 class="text-3xl">Hello!</h1>
    `;
  }
}