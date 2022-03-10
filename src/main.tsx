// Pull in React and ReactDOM for rendering to the dom
import React from "https://esm.sh/react@17.0.2";
import { render }  from "https://esm.sh/react-dom@17.0.2";

// Pull in some AsyncIterable tools from functional
import {
  forEach,
  make,
  take,
} from "https://raw.githubusercontent.com/nullpub/fun/main/async_iterable.ts";

// Pull in some helper functions from functional
import {
  pipe,
  wait,
} from "https://raw.githubusercontent.com/nullpub/fun/main/fns.ts";

// This is a lit-html template function. It returns a lit-html template.
const helloTemplate = (text: string) => (<h1>{text}!</h1>);

// This renders <h1>Hello World</h1> to the document body
render(helloTemplate("Hello World"), document.body);

// This function takes a period in milliseconds and returns an AsyncIterator
// that counts up from 0 but yields at most once per ms period.
const counter = (ms: number) =>
  make(async function* () {
    let count = 0;
    while (true) {
      await wait(ms);
      yield ++count;
    }
  });

// This is the main loop of the SPA
await pipe(
  counter(1000), // Start with a counter that emits at most once per second
  take(10), // Take only 10 values from the counter AsyncIterable
  forEach(
    // For each value yielded by the counter call the render function.
    (value) => {
      render(helloTemplate(`Count ${value}`), document.body);
    },
    // When the counter finally returns (by running out of values) render this.
    () => {
      render(helloTemplate(`Done!`), document.body);
    },
  ),
);
