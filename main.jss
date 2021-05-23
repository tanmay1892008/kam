function submit()
{
 var display_student_array=[];
 
 for (var j=1; j<=4 ;j++)
    {
var name_of_the_student=document.getElementById("name_of_the_student_" +j).value;
console.log(name_of_the_student);
 name_of_the_student_.push(name_of_the_student)   ;
    }
    console.log(name_of_the_student);

    var length_of_name_of_students_array=name_of_the_student;
console.log(length_of_name_of_students_array);

display_student_array.push("<h4>NAME-+"name_of_the_student[k]+"</h4>");
console.log(display_student_array)

{

}
}