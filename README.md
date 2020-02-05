# cutstom-string-substitute
Cutstom string substitute 

## npm package
https://www.npmjs.com/package/string_subsitute
## git repository 
https://github.com/arunesh-saxena/cutstom-string-substitute"
## how to use  in node 

dir example
```
const stingSub = require('../index');

stingSub('hello @name @sirname I am happy to see you', {
    '@name': 'Kavi',
    '@sirname': 'Saxena'
})
  
stingSub('hello @name. I am happy to see you @name', '@name', 'kavi')
  
const metaTitle = "@pdpTitle by @pdpBrand | Some time hello";

const metaTitleSub = stingSub(metaTitle, {
    "@pdpTitle": "ProductTile",
    "@pdpBrand": "MobileExample Inc."
});
```

## dev command

```npm run dev```
for development purpose

```npm run example```
to see example

```npm run build```
will create the bundle at root folder
You can change it by webpack