'use strict';

const domLoaded = new Promise(resolve => {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', resolve);
	} else {
		resolve();
	}
});

domLoaded.then(function init () {
	let emojis = document.querySelectorAll('table a[title] g-emoji[alias]')
	for (let emoj of emojis) {
		emoj.setAttribute('title', emoj.parentNode.getAttribute('title'))
	}
});
