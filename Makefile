.PHONY: install dev start build preview astro

.PHONY: init
init:
	@npm install -g pnpm
	@pnpm install


.PHONY: dev
dev:
	@pnpm run dev

.PHONY: start
start:
	@pnpm start

build:
	@pnpm build

preview:
	@pnpm preview