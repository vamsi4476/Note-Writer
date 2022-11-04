const login1=document.getElementById("login");
const reg=document.getElementById("Register");
//console.log(login1)
if(login1) login1.addEventListener('submit',fun)
if(reg) reg.addEventListener('submit',fun2)
function fun2(e)
{
    e.preventDefault();
    let firstname=document.getElementById('user_Firstname').value;
    let lastname=document.getElementById('user_Lastname').value;
    let email=document.getElementById('user_E-mail_Id').value;
    let password=document.getElementById('User_pass').value;
    
    
    class User{
        constructor(firstname,lastname,email,password)
        {   
            this.firstname=firstname; 
            this.lastname=lastname;
            this.email=email;
            this.password=password;
           
        }
        getemail(){
            return this.email;
        }
        setemail(newemail){
            this.email = newemail;
        }
        getpassword(){
            return this.password;
        }
        setpassword(newpassword){
            this.password=newpassword
        }
        getfirstname(){
            return this.firstname;
        }
        setfirstname(newfirstname){
            this.firstname = newfirstname;
        }
        getlastname(){
            return this.lastname;
        }
        setlastname(newlastname){
            this.lastname=newlastname;
        }
    }
    
    //let fname=document.getElementById('fname').value;
    const user1=new User(firstname,lastname,email,password);
    console.log(user1);
}

function fun(e)
{
    e.preventDefault()
    //let fname=document.getElementById('user').value;
    //let lname=document.getElementById('lname').value;
    let email=document.getElementById('user').value;
    let password=document.getElementById('User_pass').value;
    //console.log("fname:"+fname);
    class User{
        constructor(email,password)
        {
            //this.firstname=fname;
            //this.lastname=lname;
            this.email=email;
            this.password=password;
        }
        getemail(){
            return this.email;
        }
        setemail(newemail){
            this.email = newemail;
        }
        getpassword(){
            return this.password;
        }
        setpassword(newpassword){
            this.password=newpassword
        }
    }
    //let fname=document.getElementById('fname').value;
    const user1=new User(email,password);
    console.log(user1);
}

//console.log("kasivarma");