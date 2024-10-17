// 101-iterateThroughObject.js
export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array using spread syntax and join with " | "
  return [...reportWithIterator].join(' | ');
}
