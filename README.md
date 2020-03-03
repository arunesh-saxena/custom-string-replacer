# cutstom-string-substitute
Cutstom string substitute 

## npm package
https://www.npmjs.com/package/string_subsitute
## git repository 
https://github.com/arunesh-saxena/cutstom-string-substitute"
## how to use  in node 

dir example
```
const stingSub = require('string_subsitute');

stingSub('hello @name @surname I am happy to see you', {
    '@name': 'Kavi',
    '@surname': 'Saxena'
})
  
stingSub('hello @name. I am happy to see you @name', '@name', 'kavi')
  
const metaTitle = "@pdpTitle by @pdpBrand | Some time hello";

const metaTitleSub = stingSub(metaTitle, {
    "@pdpTitle": "ProductTile",
    "@pdpBrand": "MobileExample Inc."
});
```

## how to using in browser
```
<head>
    <script src=".../node_modules/string_subsitute/lib/index.js"></script>
</head>
<body onload="onload()">
<script>
        onload = () => {
            const metaTitle = "@pdpTitle by @pdpBrand | Some time hello";
            const result = stingSub.stingSub(metaTitle, {
                "@pdpTitle": "ProductTile",
                "@pdpBrand": "MobileExample Inc."
            });
        }
    </script>
</body>
```

## dev command

```npm run dev```
for development purpose

```npm run example```
to see example

```npm run build```
will create the bundle at root folder
You can change it by webpack

```npm run build:front```
will create the bundle in lib/index.js