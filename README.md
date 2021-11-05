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

