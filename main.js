//console.log("vamsi");
const loginform=document.getElementById("login_form");

if(loginform) loginform.addEventListener('submit',create_u);

function create_u(e){

    e.preventDefault();
    
    let username=document.getElementById('uname/email').value;
    let password=document.getElementById('pass').value;

    class User{

        constructor(username,password){

            this.username=username;
            this.password=password;
        }

        getUsername(){
            return this.username;
        }

        setUsername(name_parameter){
            this.Username=name_parameter;
        }

        getPassword(){
            return this.password;
        }

        setPassword(passcode_parameter){
            this.password=passcode_parameter;
        }


    }

    const user1=new User(username,password);
 
    console.log(user1);
}

const registerform=document.getElementById("register_form");

if(registerform) registerform.addEventListener('submit',create_r);

function create_r(e){

    e.preventDefault();

    let firstname=document.getElementById("fname").value;
    let lastname=document.getElementById("lname").value;
    let username=document.getElementById("uname/email").value;
    let password=document.getElementById("pass").value;

    class Register{

        constructor(firstname,lastname,username,password){
            this.firstname=firstname;
            this.lastname=lastname;
            this.username=username;
            this.password=password;
        }

        getfirstname(){
            return this.firstname;
        }

        setfirstname(f_name_parameter){
            this.firstname=f_name_parameter;
        }

        getlastname(){
            return this.lastname;
        }
        
        setlastname(l_name_parameter){
            this.lastname=l_name_parameter;
        }
        getUsername(){
            return this.username;
        }

        setUsername(name_parameter){
            this.Username=name_parameter;
        }

        getPassword(){
            return this.password;
        }

        setPassword(passcode_parameter){
            this.password=passcode_parameter;
        }
    }

    const register1=new Register(firstname,lastname,username,password);

    console.log(register1);

}

const noteform=document.getElementById("note_form");

if(noteform) noteform.addEventListener('submit',create_n);

function create_n(e){

    e.preventDefault();

    let note=document.getElementById("note_id").value;

    class Note{

        constructor(text){
            this.note=text;
        }

        getnote(){
            return this.note;

        }

        setnote(text_parameter){
            this.note=text_parameter;
        }


    }

    const note1=new Note(note);
    console.log(note1);
}