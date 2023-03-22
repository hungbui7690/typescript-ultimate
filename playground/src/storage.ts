// default export
export default class Store {}

// named export
export enum Format {
  Raw,
  Compressed,
}

// we don't want to export these 2 > implementation details > like a remote
class Compressor {}
class Encryptor {}
