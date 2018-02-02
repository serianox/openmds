.PHONY: ci
ci: lint style build test cov-cli codecov doc

.DEFAULT_GOAL := commit
.PHONY: commit
commit: lint build test cov-cli cov-html doc

.PHONY: codecov
codecov: test
	codecov -f coverage/*.json

.PHONY: cov-html
cov-html: test
	nyc report --reporter=html

.PHONY: cov-cli
cov-cli: test
	nyc report

.PHONY: test
test: build
	nyc --reporter=json mocha --require source-map-support/register --ui tdd --use_strict dist/test/**/*.test.js || true

.PHONY: build
build: transpile

.PHONY: transpile
transpile:
	tsc

.PHONY: fmt
fmt:
	tsfmt --replace

.PHONY: style
style:
	tsfmt --verify || true

.PHONY: lint
lint:
	tslint -c tslint.json -p tsconfig.json || true

.PHONY: doc
doc:
	typedoc --out ./doc --json ./doc/doc.json --theme default --module commonjs
