export default function createInt8TypedArray(length, position, value) {
  const newArray = new Int8Array(length);
  newArray[position] = value;
  if (position > length - 1) throw new Error('Position outside range');
  const dataview = new DataView(newArray.buffer);
  return dataview;
}
