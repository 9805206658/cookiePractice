// crate the function to create the cookie
 let count=0;
 let createBtn=document.getElementById("create");
function create()
{
  
    let Name=document.forms["cookieForm"]["Name"].value;
    let expireDay=document.forms["cookieForm"]["expire"].value;
    // here writting the condition for the fill up the form
    if(Name==""&&expireDay=="")
    {
        alert("please Enter the name and expire day");
    }
    else if(Name=="")
    {
        alert("enter the name");
    }
    else if(expireDay=="")
    {
        alert("Enter the expire day");
    }
    else
    {
        if(validationChecker())
        {

        let finalExpireDay=new Date();
        finalExpireDay.setTime(finalExpireDay.getTime()+(expireDay*24*60*60*1000));
        console.log(finalExpireDay);
       document.cookie="userName="+Name+";"+"expire="+finalExpireDay+";"+"path="+"/";
       alert("i am sucessfully creating the cookie");
       document.forms["cookieForm"]["Name"].value="";
       document.forms["cookieForm"]["expire"].value="";
        }
        
    }
  
}
createBtn.addEventListener("click",create);
function cookieDisplay()
{
    let userName="userName=";

    let cookie=document.cookie;
    let cookieArry=cookie.split(";");
    for(let i=0;i<cookie.length;i++)
    {
        let un=cookieArry[i];
        if(un.charAt(0)==" ")
        {
            un=un.substring(1);
        }
        if(un.indexOf(userName)==0)
        {
            console.log(count);
            cookieName=un.substring(userName.length,un.length)
            let eleH3=document.getElementsByTagName("h3");
            if(cookieName=="")
            { 
                window.alert("the cookie are not created");

            }
            else
            {
                count++;
                eleH3[1].insertAdjacentHTML("afterend",`<p>${cookieName}</p>`);
            }
            // here deleting element if cookie greater than 1
            if(count>1)
            {
                count=1;
                let para=document.getElementsByTagName("p");
                console.log(para);
                para[1].remove();
            }
            
            return un.substring(userName.length,un.length);
        }
    }

}
// this function add in the body tag for the check the cookie
function cookieChecker()
{
    let user=cookieDisplay();
if(user!="")
{
window.alert("welcome"+user);
createBtn.removeEventListener("click",create);

}
}
function cookieDelete()
{
    
    createBtn.addEventListener("click",create);
    let deleteDate=new Date();
    deleteDate.setTime(deleteDate.getTime()-(10*24*60*60*1000));
    document.cookie="userName="+""+";"+"expire="+deleteDate+";"+"path="+"/";
   alert("successfully delete the cookie");
}
let delBtn=document.getElementById("delete");
delBtn.addEventListener("click",cookieDelete);
// here validation check of input filed number
function validationChecker()
{
    let inputNum=document.getElementById("expire");
    if(inputNum.checkValidity())
    {
        window.alert("input filled is correct");
        return true;
    }
    else
    {
       inputNum.setCustomValidity("pelase enter value in the range");
       alert(inputNum.validationMessage);
       return false;
    }
 }
    