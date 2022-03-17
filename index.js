module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	parser: 'babel-eslint',
	extends: ['airbnb'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'yoda': ["error", "always"],
		'function-paren-newline': ["error"],
		'comma-dangle': ["error", "only-multiline"],
		// 'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		// 'react/forbid-prop-types': [0, { forbid: ['any'] }],
		// 'react/prop-types': 0,
		// 'react/react-in-jsx-scope': 0,
		// 'react/jsx-props-no-spreading': 0,
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
