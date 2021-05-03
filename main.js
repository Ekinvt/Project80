function makepara() 
{
var inputs=[];
for(var i=1; i<=8; i++)
{
    inputs.push(document.getElementById("name_of_the_student_1"+i).value);
}
inputs.join(". ");
document.getElementById("showpara1").innerHTML=inputs.join(". ");
}













































