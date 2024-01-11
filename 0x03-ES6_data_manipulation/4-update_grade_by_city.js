// 4-update_grade_by_city.js

function updateStudentGradeByCity(students, city, newGrades) {
    return students
      .filter(student => student.location === city)
      .map(student => {
        const foundGrade = newGrades.find(grade => grade.studentId === student.id);
  
        return {
          ...student,
          grade: foundGrade ? foundGrade.grade : 'N/A',
        };
      });
  }
  
  export default updateStudentGradeByCity;
  