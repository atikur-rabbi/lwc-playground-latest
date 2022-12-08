import { createElement } from "lwc";
import "@lwc/synthetic-shadow";
import FooApp from "c/app";

document
  .querySelector("#main")
  .appendChild(createElement("c-app", { is: FooApp }));
