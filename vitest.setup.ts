import { Buffer } from 'buffer';

Object.defineProperty(globalThis, 'Buffer', {
  value: Buffer,
  writable: true,
  configurable: true,
});
