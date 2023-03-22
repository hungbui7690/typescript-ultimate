/*
  The unknown Type P3

*/

// we can use type narrowing to narrow down the type
function render(document: unknown) {
  if (typeof document === 'string') document.toUpperCase()

  if (typeof document === 'number') document.toFixed()
}
