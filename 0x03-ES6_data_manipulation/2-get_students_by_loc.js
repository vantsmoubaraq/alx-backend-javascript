export default function getStudentsByLocation(myArray, loc) {
  return myArray.filter((obj) => (obj.location === loc));
}
