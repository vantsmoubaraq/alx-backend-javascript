export default function getListStudentIds(myArray) {
  if (!(myArray instanceof Array)) return [];
  return myArray.map((obj) => obj.id);
}
