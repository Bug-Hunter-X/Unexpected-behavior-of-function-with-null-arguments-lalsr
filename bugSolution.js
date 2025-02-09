function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values appropriately
    console.warn('Null value encountered in foo function. Returning NaN.');
    return NaN; 
  }
  return a + b; 
}

console.log(foo(null, 1)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(1, 2)); // Output: 3