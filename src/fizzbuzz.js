function fizzbuzz(n) {
if (n % 15 === 0) return "fizzbuzz"
if (n % 3 === 0) return "fizz"
if (n % 5 === 0) return "buzz"
    return n
}

export function fizzbuzzSequence(limit) {
  const result = [];
  for (let i = 1; i <= limit; i++) {
    result.push(fizzbuzz(i));
  }
  return result;
}



export default fizzbuzz;