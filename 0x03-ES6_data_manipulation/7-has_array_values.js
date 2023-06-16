export default function hasValuesFromArray(mySet, myArray) {
  const newSet = new Set(myArray);
  let isSubSet = true;

  newSet.forEach((value) => {
    if (!mySet.has(value)) {
      isSubSet = false;
    }
  });
  return isSubSet;
}
