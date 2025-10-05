module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 100,
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'ignore',
  plugins: [],
  overrides: [
    {
      files: '*.gql',
      options: {
        parser: 'graphql'
      }
    }
  ]
}
