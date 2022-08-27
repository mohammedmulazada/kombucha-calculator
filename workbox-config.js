module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,css,md,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};