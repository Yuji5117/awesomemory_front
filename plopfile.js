import { componentGenerator } from "./generators/components/index.js";

export default function (plop) {
  plop.setGenerator("component", componentGenerator);
}
