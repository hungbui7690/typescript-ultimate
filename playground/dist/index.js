"use strict";
/*
  Decorator Composition
  - we can see that decorators are applied in reversed order if we have multiple decorators
    > the ideas come from the math
      + if we have f(g(x))
        > g(x) need to be executed first and return result
        > then f(result) will be executed

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(options) {
    return (constructor) => {
        console.log('Component Decorator Called !!');
        constructor.prototype.options = options; // use parameter here
        constructor.prototype.uniqueID = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        };
    };
}
// create new decorator
function Pipe(constructor) {
    console.log('Pipe Decorator Called !!');
    constructor.prototype.pipe = true;
}
// (***) this class has 2 decorators > when we run, we will see @Pipe will run first (explain above)
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: '#my-profile' }),
    Pipe
], ProfileComponent);
