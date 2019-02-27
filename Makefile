install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
publish:
	npm publish
lint:
	npx eslint .
calcul:
	npx babel-node -- src/bin/brain-calc.js
gcd:
	npx babel-node -- src/bin/brain-gcd.js
progress:
	npx babel-node -- src/bin/brain-progression.js
