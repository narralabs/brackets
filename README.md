# Brackets

Brackets is a template for creating chrome extensions. It uses webpack to
support frontend frameworks and other libraries. It also uses Tailwind CSS 3
(through webpack/postcss) for its CSS framework and works out of the box.

![brackets_logo](https://user-images.githubusercontent.com/99235/177054577-1ccaa562-fc34-4b69-a830-8b0308b4189e.png)

## Requirements

- Node.js (Check .node-version for version)

## Getting Started

All the work will be done in the `src` folder. The `src` folder will then be
compiled to the `extension` folder.

1. Install packages: `npm install`
2. Run the build: `npm run-script dev`. This will watch the `src` folder for changes and compile into `extension`
3. In chrome://extensions, click "Load unpacked" and select the `extension` folder

## Adding React

If you want to use react in the chrome extension popup do the following after cloning:

1. Add the react and react-dom packages: `npm install --save-dev react react-dom`
2. Add the webpack plugins to support JSX compilation: `npm install -D @babel/preset-env @babel/preset-react @babel/runtime @babel/plugin-transform-runtime @babel/plugin-syntax-dynamic-import @babel/plugin-proposal-class-properties babel-plugin-transform-react-remove-prop-types @babel/plugin-transform-react-inline-elements @babel/plugin-transform-react-constant-elements`
3. Modify `webpack.config.js` and add line to support JSX
```
...
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
+     {
+       test: /\.jsx?$/,
+       exclude: /node_modules/,
+       use: {
+         loader: 'babel-loader',
+         options: {
+           presets: ['@babel/preset-react'],
+         },
+       },
+     },
  }
...
```

4. Create a file `src/app.jsx`
```
import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Brackets + React</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

5. Modify `src/popup.js` with
```
import './popup.css';
+ import './app.jsx';

console.log('[CONTENTSCRIPT] Popup opened');
```

6. Modify `src/popup.html` with
```
  ...
  <body>
    + <div id="root">
    + </div>

    <script src="popup.js"></script>
  </body>
  ...
```


7. Run the build: `npm run-script dev`. This will watch the `src` folder for changes and compile into `extension`
8. In chrome://extensions, click "Load unpacked" and select the `extension` folder

## Releasing Your Extension

1. Make sure to uncomment `purge: true` in `tailwind.config.js`
2. Zip the extensions folder
3. Upload chrome extension store
