export default function updateStudentGradeByCity(myArray, loc, newGrades) {
  const students = myArray.filter((obj) => (obj.location === loc));
  return students.map((obj) => {
    const newObj = { ...obj };
    newObj.grade = 'N/A';
    for (const grad of newGrades) {
      if (newObj.id === grad.studentId) {
        newObj.grade = grad.grade;
      }
    }
    return newObj;
  });
}
