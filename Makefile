SHELL := /bin/sh

PREVIEW_HOST ?= 127.0.0.1
PREVIEW_PORT ?= 4321

.PHONY: preview-fresh
preview-fresh:
	@set -eu; \
	pids="$$(lsof -tiTCP:$(PREVIEW_PORT) -sTCP:LISTEN 2>/dev/null || true)"; \
	if [ -n "$$pids" ]; then \
		echo "Stopping the existing preview on port $(PREVIEW_PORT)..."; \
		kill $$pids; \
		for attempt in 1 2 3 4 5 6 7 8 9 10; do \
			if ! lsof -tiTCP:$(PREVIEW_PORT) -sTCP:LISTEN >/dev/null 2>&1; then break; fi; \
			sleep 0.2; \
		done; \
	fi; \
	if lsof -tiTCP:$(PREVIEW_PORT) -sTCP:LISTEN >/dev/null 2>&1; then \
		echo "Could not free port $(PREVIEW_PORT); preview was not restarted." >&2; \
		exit 1; \
	fi; \
	echo "Clearing generated Astro and Vite caches..."; \
	rm -rf .astro node_modules/.vite; \
	echo "Starting a fresh preview at http://$(PREVIEW_HOST):$(PREVIEW_PORT)/"; \
	exec env ASTRO_TELEMETRY_DISABLED=1 CHOKIDAR_USEPOLLING=1 CHOKIDAR_INTERVAL=200 \
		pnpm exec astro dev --host $(PREVIEW_HOST) --port $(PREVIEW_PORT)
