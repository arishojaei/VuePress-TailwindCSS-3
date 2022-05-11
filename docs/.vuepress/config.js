module.exports = {
  title: 'VuePress & TailwindCSS v3',
  description: 'A fresh example for VuePress v1 and TailwindCSS v3',
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
    ]
  }
}