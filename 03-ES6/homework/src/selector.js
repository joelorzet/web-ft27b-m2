var traverseDomAndCollectElements = function (matchFunc, startEl) {
	var resultSet = [];

	if (typeof startEl === 'undefined') {
		startEl = document.body;
	}

	// recorre el árbol del DOM y recolecta elementos que matchien en resultSet
	// usa matchFunc para identificar elementos que matchien

	// TU CÓDIGO AQUÍ

	if (matchFunc(startEl)) resultSet.push(startEl);

	for (let i = 0; i < startEl.children.length; i++) {
		let resultado = traverseDomAndCollectElements(matchFunc, startEl.children[i]);

		resultSet = [...resultSet, ...resultado];
	}

	return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
	// tu código aquí
	if (selector[0] === '#') {
		return 'id';
	}
	if (selector[0] === '.') {
		return 'class';
	}
	if (selector.split('.').length > 1) {
		return 'tag.class';
	} else {
		return 'tag';
	}
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
	var selectorType = selectorTypeMatcher(selector);
	let matchFunction;
	if (selectorType === 'id') {
		matchFunction = (el) => {
			return el.id === selector.slice(1);
		};
	} else if (selectorType === 'class') {
		matchFunction = (el) => {
			let classes = el.classList;

			for (let i = 0; i < classes.length; i++) {
				if (`.${classes[i]}` === selector) {
					return true;
				}
			}

			return false;
		};
	} else if (selectorType === 'tag.class') {
		matchFunction = (element) => {
			let [tag, className] = selector.split('.');

			return matchFunctionMaker(tag)(element) && matchFunctionMaker(`.${className}`)(element);
		};
	} else if (selectorType === 'tag') {
		matchFunction = (el) => {
			return el.tagName.toLowerCase() === selector.toLowerCase();
		};
	}

	return matchFunction;
};

var $ = function (selector) {
	var elements;
	var selectorMatchFunc = matchFunctionMaker(selector);
	elements = traverseDomAndCollectElements(selectorMatchFunc);
	return elements;
};
