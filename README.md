# Simple example of TailwindCSS v3 with VuePress v1

This is a simple example of how to use TailwindCSS v3 with VuePress v1. If you want to create your own theme in VuePress, it's a little bit confusing to use TailwindCSS with it and there are some issue in the article that we can find in internet. So, the best way is to see what the codes say, right?

### How to use
Clone this repository and make your changes to build a new theme as you want. If you have any suggestion or need any help with this, feel free to contact me or leave an issue here, I'll response as soon as I can.

### Important tips
In case you want to know how it works after install tailwind in vuepress.

1. VuePress uses PostCSS by it self so the only thing you need is that use TailwindCSS in its config in the vuepress `config.js` files.
```javascript
// docs/.vuepress/config.js

module.exports = {
  title: 'VuePress & TailwindCSS v3',
  description: 'A fresh example for VuePress v1 and TailwindCSS v3',
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
    ]
  }
}
```
2. Don't forget to give a right path in `content` property in `tailwind.config.js`, if you use `/docs` directory make sure you define it in the tailwind config.
```javascript
// tailwind.config.js

module.exports = {
  content: [
    './docs/.vuepress/**/*.{js,md,vue}'
  ],
  ...
}
```

3. If you put tailwind directive and layer into `index.styl`, it wont work in hot realod! so, make sure you put them to another `*.styl` file and import that file in `Layout.vue`.
```javascript
// docs/.vuepress/theme/Layout.vue

...

<style lang="stylus">
  @import './styles/theme.styl';
</style>
```

4. I also add (@typography-plugin)[https://tailwindcss.com/docs/typography-plugin] to handles markdown style
