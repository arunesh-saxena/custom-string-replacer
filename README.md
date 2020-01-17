# cutstom-string-substitute
Cutstom string substitute 

<!-- how to use  -->
import stingSub from 'src/index.js

stingSub(`hello @K @K`, '@K', 'kavi');
  
stingSub([1212], '@name', 'kavi', 'saxena');
  
const metaTitle = "@pdpTitle by @pdpBrand | Some time hello";
  stingSub(metaTitle, {
    "@pdpTitle": "kavi",
    "@pdpBrand": "saxena"
});
