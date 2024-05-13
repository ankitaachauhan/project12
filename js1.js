function validation()
{
    var a=document.getElementById("f1");
    var b=document.getElementById("f2");
    var c=document.getElementById("f3");
    var d=document.getElementById("f4");
    var e=document.getElementById("f5");
    var f=document.getElementById("f6");
    var g=document.getElementById("f7");
    if(a.value==""||b.value==""||c.value==""||d.value==""||e.value==""||f.value==""|| g.value=="")
        {
            alert("all field are mendatary to fill");
            return false;
        }
    else if(c.value.length>10||c.value.length<10)
        {
            alert("number is must be of 10 digit");
            return false;
        }
        
    else if(f.value!==g.value)
        {
            alert("both password must be same");
            return false;
        } 
    else if(f.value.length<8)
        {
            alert("password must min 8 digit");
            return false;
        }  
         
    else
    {
        return true;
    }    
}