import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'error',
      'linebreak-style': ['error', 'unix'],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: 'const', next: 'expression' },
        { blankLine: 'always', prev: 'let', next: 'expression' },
        { blankLine: 'always', prev: 'class', next: '*' },
        { blankLine: 'always', prev: 'function', next: '*' },
        { blankLine: 'always', prev: 'multiline-expression', next: '*' },
        { blankLine: 'always', prev: 'multiline-const', next: '*' },
        { blankLine: 'always', prev: 'multiline-let', next: '*' },
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: '*', next: 'multiline-expression' },
        { blankLine: 'always', prev: '*', next: 'multiline-const' },
        { blankLine: 'always', prev: '*', next: 'multiline-let' },
        { blankLine: 'always', prev: '*', next: 'break' },
        { blankLine: 'always', prev: '*', next: 'continue' },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'throw' },
      ],
    },
  },
  {
    files: ['src/components/**/*.ts', 'src/components/**/*.tsx'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../../', '~ata/containers', '~ata/contexts', '~ata/hooks'],
              message: 'This import violates project guidelines.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/containers/**/*.ts', 'src/containers/**/*.tsx'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../../'],
              message: 'This import violates project guidelines.',
            },
            {
              group: ['~ata/contexts'],
              importNamePattern: 'Context$',
              message: 'This import violates project guidelines.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/contexts/**/*.ts', 'src/contexts/**/*.tsx'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../../', '~ata/components', '~ata/containers', '~ata/hooks'],
              message: 'This import violates project guidelines.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/hooks/**/*.ts', 'src/hooks/**/*.tsx'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../../', '~ata/components', '~ata/containers'],
              message: 'This import violates project guidelines.',
            },
            {
              group: ['~ata/contexts'],
              importNamePattern: 'Provider$',
              message: 'This import violates project guidelines.',
            },
          ],
        },
      ],
    },
  },
);
