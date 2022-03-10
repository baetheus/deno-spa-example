// Pull in Preact for rendering to the dom
import { render } from "https://esm.sh/preact@10.6.6";
// Import some hooks for state
import { useCallback, useState } from "https://esm.sh/preact@10.6.6/hooks";
// Import htm for avoiding jsx compilation
import { html } from "https://esm.sh/htm@3.1.0/preact";

// The stock counter example from the preact docs
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((n) => n + 1), []);
  const decrement = useCallback(() => setCount((n) => n - 1), []);
  return html`<section>
    <h1>Count is ${count}</h1>
    <button onClick=${increment}>Increment</button>
    <button onClick=${decrement}>Decrement</button>
  </section>`;
};

// Start the initial render, which updates when state changes
render(html`<${Counter} />`, document.body);
