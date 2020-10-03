# ufos

Providing more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, you’ll add table filters for the city, state, country, and shape.

## What's included

- Single HTML page (`index.html`) to demonstrate how to include Bootstrap.
- Includes Bootstrap (currently using v4.5.0) source files via npm.
- npm scripts (see `package.json`) for compiling and autoprefixing Sass, watching for changes, and starting a basic local server.
- Example stylesheet (`static/scss/style.scss`) highlighting two ways to include and customize Bootstrap.
- Example JavaScript file (`static/js/starter.js`) showing how to import all of Bootstrap and adding app logic with D3.

## Usage

Be sure to have [Node.js](https://nodejs.org/) installed before proceeding.

```shell
# Clone the repo
cd ufos

# Install dependencies
npm i

# Compile Sass

npm run css-compile

# Watch Sass for changes (uses nodemon)
npm run watch

# Start local server (uses serve)
npm run server
```

For the most straightforward development, open two Terminal tabs to execute `npm run server` and `npm run watch` at the same time.

Open <http://localhost:3000> to see the page in action.

## Scripts

The following npm scripts are available to you in this starter repo. With the exception of `npm start`, the remaining scripts can be run from your command line with `npm run scriptName`.

| Script        | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| `server`      | Starts a local server (<http://localhost:3000>) for development             |
| `watch`       | Automatically recompiles CSS as it watches the `scss` directory for changes |
| `css`         | Runs `css-compile` and `css-prefix`                                         |
| `css-compile` | Compiles source Sass into CSS                                               |
| `css-prefix`  | Runs Autoprefixer on the compiled CSS                                       |
| `css-purge`   | Runs PurgeCSS to remove CSS that is unused by `index.html`                  |

- Sidenote: https://github.com/sass/node-sass#command-line-interface

## Todo Checklist

A helpful checklist to gauge how your README is coming on what I would like to finish:

- [ ] Experiement with GitHub Actions.
- [ ] [Learn more about GitHub Actions](https://github.com/features/actions)
- [ ] [read the Actions docs](https://help.github.com/en/actions)
- [ ] [browse the Actions Marketplace](https://github.com/marketplace/actions)
- [ ] [Using GitHub Actions for MLOps & Data Science](https://github.blog/2020-06-17-using-github-actions-for-mlops-data-science/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
