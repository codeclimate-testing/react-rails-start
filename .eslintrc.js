module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended'
  ],
  globals: {
    CKEDITOR: true,
    d3: true,
    moment: true,
    radialProgress: true,
    VHL: true,
    VISTA_ONLINE_LEARNING: true,
  },
  rules: {
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false }],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      },
    ],
    'indent': [
      'error', 2, {
        'CallExpression': {
          'arguments': 1,
        },
      },
    ],
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
        },
      },
    ],
    'quotes': [
      'error', 'single', { 'avoidEscape': true },
    ],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      globals: {
        defineProps: true,
        defineEmits: true,
      },
      extends: ['plugin:vue/recommended'],
      globals: {
        defineProps: true,
        defineEmits: true,
      },
      plugins: ['vue'],
      rules: {
        'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/html-closing-bracket-newline': [
          'error',
          {
            'singleline': 'never',
            'multiline': 'never',
          },
        ],
        'vue/max-attributes-per-line': [
          'warn',
          {
            'singleline': 3,
            'multiline': 1,
          },
        ],
        'indent': 'off',
      },
    },
    {
      files: ['**/*Spec.js', '**/*spec.js'],
      env: {
        jasmine: true,
        jest: true,
      },
      rules: {
        'require-jsdoc': 'off',
      },
    },
  ],
};
