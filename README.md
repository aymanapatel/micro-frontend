# Micro frontend and Module Federation



## Host and Remote

|            | Remote | Host |
|------------|--------|------|
| Javascript | 8000   | 3000 |
| Typescript | 8888   | 3333 |

### Host (Depending on remote)

```javascript
remotes: {
        remote: "remote@http://localhost:8000/remoteEntry.js", 
      },
```

### Remote

```javascript
exposes: {
        "./Counter": "./src/Counter.jsx", 
},
```

`remoteEntry.js` is created by `ModuleFederationPlugin` Webpack plugin.

## Run though `build` or `dist` folder

Since in PROD web app will be served from folder, serving is done through folder.

Remote: 

1. `npm build:dev`
2. `npx server dist index.html 8000`



## Typescript

Since types are not available, since remote is JS bundle.

We need to either

1. Add types in `index.d.ts` for host. But this means host devs need to maintain types.
2. Use `shared-mfe` lib for types sharing between `host` and `remote` 
   - In ither words `remote` -> `shared-mfe` -> `host`
   - Problem: Different repos. Solution: Use monorepo (Nx or Lerna) OR host `shared` as npm package. 