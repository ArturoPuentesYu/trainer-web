// eslint.config.cjs
const tsParser = require('@typescript-eslint/parser')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const importPlugin = require('eslint-plugin-import')
const astroParser = require('astro-eslint-parser')
const astroPlugin = require('eslint-plugin-astro')

module.exports = [
  // — Ignorar carpetas de build/cache
  {
    ignores: ['node_modules/**', 'dist/**', 'public/**', '.cache/**'],
  },

  // — Reglas generales para .js, .ts y .astro
  {
    files: ['src/**/*.{js,ts,astro}'],
    languageOptions: {
      parser: tsParser, // cargamos el parser TS como objeto
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      astro: astroPlugin,
    },
    rules: {
      // Formato ligero
      semi: ['warn', 'always'],
      quotes: ['warn', 'single', { avoidEscape: true }],
      indent: ['warn', 2, { SwitchCase: 1 }],
      'max-len': ['warn', { code: 100, ignoreComments: true }],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],

      // Buenas prácticas suaves
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      eqeqeq: ['error', 'smart'],
      curly: ['error', 'multi-line'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],

      // Orden de imports
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.astro'],
      },
      'import/resolver': {
        typescript: {},
      },
    },
  },

  // — Ajustes específicos para .astro
  {
    files: ['src/**/*.astro'],
    languageOptions: {
      parser: astroParser, // cargamos el parser de Astro
      parserOptions: {
        parser: tsParser, // dentro de Astro usamos TS parser
        extraFileExtensions: ['.astro'],
      },
    },
  },
]
