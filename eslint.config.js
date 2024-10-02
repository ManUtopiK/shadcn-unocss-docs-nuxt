import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  typescript: true,
  vue: true,
  unocss: true,
}, {
  plugins: {},
  rules: {
    'style/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
  },
})
