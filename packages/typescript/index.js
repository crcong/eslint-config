module.exports = {
  extends: [
    '@crcong/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
  }
}
