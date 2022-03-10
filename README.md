# Deno SPA Example

Deno has a builtin bundle command as well as typescript libs for dom and esnext.
This repo shows a simple example of a deno-only build chain for a simple SPA.
Additionally, it uses the Preact import from esm.sh, some simple AsyncIterator
tools from the functional library, and bmake.

## Building, cleaning, and serving

There are make recipes for building this app. I use bmake but any
posix-compatible make should work fine. This requires Deno 1.19+ to be
installed, although I will eventually setup nix for this repo.

### Build

```bmake```

This bundles the webapp to `public/bundle.js`.

### Clean

```bmake clean```

This removes public/bundle.js.

### Serve

```bmake serve```

This uses deno to [serve](http://localhost:4507) all files from the `public`
directory over port `4507`.

### Dev

```bmake dev```

This cleans, builds, and serves the app.


## Files and their explanations

In order to create the simplest example of bundling a SPA and using Deno for dev
tooling there are a few things that one must know.

### Using a browser specific TypeScript configuration file (tsconfig.json)

Here is a copy of `tsconfig.json`, which is a very simple TypeScript
configuration file.

```json
{
  "compilerOptions": {
    "lib": ["dom", "esnext"],
    "strict": true
  }
}
```

In order for the types in Preact to typecheck correctly we need to inform Deno
that we are only using the `dom` and `esnext` types. By default, `dom` types
conflict with the default `deno.window` types that Deno automatically loads.
The `dom` lib gives us access to the `document` as well as various browser types
like `Node` and `Element` that are used in Preact The `esnext` lib gives us
access to language builtins like `AsyncIterable` and `Object.hasOwn`. Without
these the deno bundle process will fail on type checking.

The Makefile command that bundles this SPA looks like this:

```deno bundle --config tsconfig.json src/main.ts > public/bundle.js```

### Importing the bundle.js in index.html

Rather than rely on cache-busting filenames like `bundle-20220303.js` I prefer
to properly rely on etags and cache control headers, thus I don't find it
necessary to mangle filenames. Because of this, building and bundling a SPA
become much simpler.

Instead of using the compiler (as is done in Svelte, Angular, Next, etc) to
generate or seed an index.html file, I find it much better to just have a static
index.html file that imports a staticly named bundle (bundle.js). Along with
proper webserver configuration this ensures that index.html can be cached well.


### Future work

In the future I will either add to the Makefile to support additional features
such as controlling build environment and seeding build-time date into an
applicaiton or I will do the same in the context of a nix flake.
