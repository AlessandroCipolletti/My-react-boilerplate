export const multiLabel = (n: number): string => {
  let result = 'init'
  for (let i = 0; i < n; i++) {
    result += 'Bonjour '
  }
  return result
}
