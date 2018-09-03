module.exports = {
  extends: 'motley',
  rules: {
    quotes: ['error', 'single'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'ext'],
      },
    ],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
