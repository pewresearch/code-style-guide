module.exports = {
	extends: ["airbnb", "prettier"],
	plugins: ['prettier', 'react'],
	rules: {
		'prettier/prettier': 'error',
		"indent": ["error", "tab"],
		// Code Style
		'yoda': ["error", "always"],
		'function-paren-newline': ["error"],
		'comma-dangle': ["error", "only-multiline"],
		// Imports
		'import/no-extraneous-dependencies': 0,
		'no-restricted-imports': ["error", {
			name: "react",
			message: "Use @wordpress/element instead."
		}],
		// React
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0,
		'react/jsx-props-no-spreading': 0,
	},
};
