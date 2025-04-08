//Route
const students = require('./StudentData')

function getStudents1(){
    return students;
}

function getStudents2(id){
    return students.find((student)=>student.RegNo==id)
}

module.exports={getStudents1, getStudents2}