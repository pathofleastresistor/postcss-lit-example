"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lit_1 = require("lit");
class MyElement extends lit_1.LitElement {
    render() {
        return (0, lit_1.html) `
      <h1 class="text-3xl">Hello!</h1>
    `;
    }
}
MyElement.styles = (0, lit_1.css) `
    @tailwind base;
    @tailwind utilities;
  `;
