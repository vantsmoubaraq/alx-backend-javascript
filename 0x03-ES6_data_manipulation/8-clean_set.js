export default function cleanSet(set, startString) {
  let result = '';

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }
  const mySet = new Set();
  const strLength = startString.length;

  for (const element of set) {
    if (element && element.startsWith(startString)) {
      mySet.add(element.slice(strLength));
    }
  }
  result = [...mySet].join('-');
  return result;
}
