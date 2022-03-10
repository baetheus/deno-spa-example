CFLAGS = --config browser.json
TARGETS = public/bundle.js

public/bundle.js: $(shell find src -type f)
	deno bundle src/main.ts $(CFLAGS) > $@

clean:
	rm $(TARGETS)

serve: clean public/bundle.js
	(cd public; deno run --allow-net --allow-read https://deno.land/std/http/file_server.ts)
