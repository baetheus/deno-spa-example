import { html, render } from "https://esm.sh/lit-html@2.2.0";
import {
  forEach,
  make,
  take,
} from "https://raw.githubusercontent.com/nullpub/fun/main/async_iterable.ts";
import {
  pipe,
  wait,
} from "https://raw.githubusercontent.com/nullpub/fun/main/fns.ts";

// This is a lit-html template function. It returns a lit-html template.
const helloTemplate = (name: string) => html`<div>Hello ${name}!</div>`;

// This renders <div>Hello Steve!</div> to the document body
render(helloTemplate("Steve"), document.body);

const counter = (ms: number) =>
  make(async function* () {
    let count = 0;
    while (true) {
      await wait(ms);
      yield ++count;
    }
  });

await pipe(
  counter(100),
  forEach(
    (value) => {
      render(helloTemplate(`Count ${value}`), document.body);
    },
    () => {
      render(helloTemplate(`Done!`), document.body);
    },
  ),
);
