// Browser polyfill for Node.js 'module' package
// Provides empty createRequire function for client-side compatibility

export function createRequire() {
  return function() {
    throw new Error('require() is not supported in browser environment');
  };
}

export default { createRequire };
