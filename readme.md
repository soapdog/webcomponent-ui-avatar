# UI Avatar Web Component 😍

This is a pure web component with no dependencies for [ui avatars](https://ui-avatar.com). It is built using [StencilJS](https://stenciljs.com).

## Getting Started

Setup and first run:

```bash
npm install
npm start
```

To watch for file changes during develop, run:

```bash
npm run dev
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help with Stencil? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Using this component

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/ui-avatar@0.0.1/dist/ui-avatar.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install my-name --save`
- Put a script tag similar to this `<script src='node_modules/ui-avatar/dist/ui-avatar.js></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install ui-avatar --save`
- Add `{ name: 'ui-avatar' }` to your [collections](https://github.com/ionic-team/stencil-starter/blob/master/stencil.config.js#L5)
- Then you can use the element anywhere in your template, JSX, html etc
