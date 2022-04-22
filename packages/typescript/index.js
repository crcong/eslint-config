module.exports = {
  extends: [
    '@crcong/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  }
}
