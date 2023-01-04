module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss', 'stylelint-prettier/recommended'],
	rules: {
		'color-named': 'never',
		'font-family-name-quotes': 'always-where-required',
		'font-weight-notation': 'named-where-possible',
		'function-url-no-scheme-relative': true,
		'function-url-quotes': 'always',
		indentation: 'tab',
		'string-quotes': 'single',
		'value-keyword-case': 'lower',
		'unit-disallowed-list': [],
		'max-empty-lines': 2,
		'no-descending-specificity': true,
		'no-duplicate-selectors': true,
		'font-family-no-missing-generic-family-keyword': null,
		'property-no-unknown': [
			true,
			{
				ignoreProperties: ['/^lost-/']
			}
		],
		'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }]
	},
	ignoreFiles: ['node_modules/*'],
	defaultSeverity: 'warning',
	customSyntax: 'postcss-html'
}
