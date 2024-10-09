export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const index = array.indexOf(value); // Get the current index
    array[index] = appendString + value; // Append the string to the value
  }

  return array;
}
