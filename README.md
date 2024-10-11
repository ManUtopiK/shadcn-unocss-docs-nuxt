![Hero](https://github.com/user-attachments/assets/555cfd9b-3461-40ff-b4fa-6df7f2ba44f5)

# shadcn-unocss-docs-nuxt

[![built with nuxt][nuxt-src]][nuxt-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> [!NOTE]
> Fork of [shadcn-docs-nuxt](https://github.com/ZTL-UwU/shadcn-docs-nuxt) using [unocss](https://github.com/unocss/unocss) instead of tailwindcss.
> Last update from [this commit](https://github.com/ZTL-UwU/shadcn-docs-nuxt/commit/0343fbc553e3c438b220a1c11e433cdd416c0786) ![](https://img.shields.io/npm/v/shadcn-docs-nuxt?style=flat&colorA=18181b&colorB=18181b).
>
> Changes made :
> - replaced tailwindcss with unocss to get same result with theme customization behavior
> - eslint config use unocss instead of tailwindcss (classes order change)
> - lint with `semi: false`
> - use pnpm instead of bun

Beautifully designed _Nuxt Content_ template built with _shadcn-vue_. **Customizable. Compatible. Open Source.**

- [Documentation / Demo](https://shadcn-docs-nuxt.vercel.app/)

## Quick Start

1. Create a project with the [starter template](https://github.com/ZTL-UwU/shadcn-docs-nuxt-starter)

  ```bash
  npx nuxi@latest init -t github:ZTL-UwU/shadcn-docs-nuxt-starter
  ```

2. Install dependencies

  ```bash
  npm install
  ```

3. Start dev server

  ```bash
  npm run dev
  ```

## Contributing

1. Clone this repository.
2. Install dependencies `bun install`.
3. Use `bun run dev` to start dev server.

## Credits

- [Nuxt Content](https://content.nuxt.com/): Content made easy for Vue Developers.
- [shadcn-ui](https://ui.shadcn.com/): For the beautiful component & docs design.
- [shadcn-vue](https://www.shadcn-vue.com/): For the vue port of shadcn-ui & some docs component source.
- [Docus](https://docus.dev/): For the inspiration & some docs component source.
- [Nuxt UI Pro Docs](https://docs-template.nuxt.dev/): For the inspiration.

## License

MIT

[npm-version-src]: https://img.shields.io/npm/v/shadcn-unocss-docs-nuxt?style=flat&colorA=18181b&colorB=18181b
[npm-version-href]: https://npmjs.com/package/shadcn-unocss-docs-nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/shadcn-unocss-docs-nuxt?style=flat&colorA=18181b&colorB=18181b
[npm-downloads-href]: https://npm.chart.dev/shadcn-unocss-docs-nuxt?primary=neutral&gray=zinc&theme=light
[license-src]: https://img.shields.io/github/license/ZTL-UwU/shadcn-docs-nuxt.svg?style=flat&colorA=18181b&colorB=18181b
[license-href]: https://github.com/ZTL-UwU/shadcn-docs-nuxt/blob/main/LICENSE
[nuxt-src]: https://img.shields.io/badge/Built%20With%20Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com/
