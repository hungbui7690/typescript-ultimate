/*
  Using Definitely Typed Declaration Files P2
  - https://github.com/DefinitelyTyped/DefinitelyTyped

  > npm i --save-dev @types/lodash
  > npm i -D @types/lodash
    > need to install as devDependencies

*/

import * as _ from 'lodash'

_.clone() // hover > we will see the type
_.clone([1, 2, 3]) // hover > we will see the type
