module.exports = {
	extends: ["airbnb", "prettier"],
	plugins: ['prettier', 'react'],
	rules: {
		'prettier/prettier': 'error',
		'yoda': ["error", "always"],
		'function-paren-newline': ["error"],
		'comma-dangle': ["error", "only-multiline"],
		'import/no-extraneous-dependencies': 0,
		// disallow specific imports
		// https://eslint.org/docs/rules/no-restricted-imports
		'no-restricted-imports': ["error", {
			name: "react",
			message: "Use @wordpress/element instead."
		}],
		"indent": ["error", "tab"],
	},
};
