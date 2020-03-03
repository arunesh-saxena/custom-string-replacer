const stingSub = require('string_subsitute');

const test1 =
    stingSub('hello @name @surname I am happy to see you', {
        '@name': 'Kavi',
        '@surname': 'Saxena'
    });

console.log(`test_1-> ${test1}`);

console.log(`test_2-> ${stingSub('hello @name. I am happy to see you @name', '@name', 'kavi')}`);


const metaTitle = "@pdpTitle by @pdpBrand | Some time hello";

const metaTitleSub = stingSub(metaTitle, {
    "@pdpTitle": "ProductTile",
    "@pdpBrand": "MobileExample Inc."
});

console.log(`metaTitleSub-> ${metaTitleSub}`);


