function validateform()
{
    var user=document.getElementById("myfirstname").value;

    if(user=="" || user==NULL)
    {
        document.getElementById("myfirstname").innerHTML = Please fill this;
        return false;

    }

}