/*
  Configuring TS Compiler
  > tsc --init

  - safest option for old browser:
    + "target": "es2016",   
    + "module": "commonjs",  > learn later

  - some other options: 
    + "rootDir": "./src"
    + "outDir": "./dist", 
    + "removeComments": true 
    + "noEmitOnError": true > if there is error, then don't generate JS file

  - tsc

  /////////////////////////////

  Debug
  - tsconfig > sourceMap: true
    > this is not for us to understand, but for editor to understand
  - Debug > Create a launch.json file > NodeJS
    > add 1 more line: "preLaunchTask": "tsc: build - tsconfig.json",
    > ctrl + shift + B to start the task

  
*/

console.log('Hello World')

let age: number = 20

if (age < 50) age += 10
