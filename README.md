# extract-npm-package-config

This package can extract npm package config variables from `process.env` for in-app usage.

Npm per-package configuration setting is an *underrated* feature.
> https://docs.npmjs.com/misc/config#per-package-config-settings

**package.json**
```
...
  "config": {
    "scheme": "http",
    "domain": "localhost",
    "port": "3001"
  },
...
```
1. As long as you use `npm run ...` scripts this config will be available in the `process.env` variables.
2. Each of these variables can be referenced inside the `package.json` for usage with other scripts.
3. Can easily be overridden via `env` variables server-side.

# Install
`npm install --save-dev extract-npm-package-config`

# Usage

## Standalone
```
const packageConfig = extractPackageConfig(process.env);
```
> npm_package_config_domain: 'localhost' 
> npm_package_config_port: 3000

## Webpack

It can easily be used in conjunction with webpack [EnvironmentPlugin](https://webpack.js.org/plugins/environment-plugin/) client-side.

**webpack.config.js**
```
...
plugins: [
    new webpack.EnvironmentPlugin(extractPackageConfig(process.env))
]
...
```

> **Note 1:** You should'nt make use of it server side, because `weback.DefinePlugin` replace the variables in the source code itself,
>thus this would defeat the purpose of having `env` variables that can be easily overridden.

> **Note 2:** There is currently a limitation due to the way `weback.DefinePlugin` replace process.env occurrences in the code.
> You can't *destructure* `process.env` see https://github.com/webpack/webpack/issues/5392 


# Licence

MIT