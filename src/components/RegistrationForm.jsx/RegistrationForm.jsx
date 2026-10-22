import { useState } from "react";
import "./registration-form.css";

function RegistrationForm(){
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [birthday, setBirthday] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [imageURL, setImageURL] = useState();
    const today = new Date().toISOString().split("T")[0];
    const [showData, setShowData] = useState(false);


    function verifyFirstName(e){
        let fName = e.target.value;
        let errFirstName = document.querySelector("#errFirstName");
        errFirstName.innerHTML = "";
        setFirstName(null);

        if (fName.trim().length <= 0){
            errFirstName.innerHTML = "Blanked Spaces are not Allowed!!";
        } else if (fName.trim().length <= 1){
            errFirstName.innerHTML = "Atleast 2 Characters!!";
        }else{
            setFirstName(fName);
        }
    }

    function verifyLastName(e){
        let lName = e.target.value;
        let errLastName = document.querySelector("#errLastName");
        errLastName.innerHTML = "";
        setLastName(null);

        if (lName.trim().length <= 0){
            errLastName.innerHTML = "Blanked Spaces are not Allowed!!";
        } else if (lName.trim().length <= 1){
            errLastName.innerHTML = "Atleast 2 Characters!!";
        }else{
            setLastName(lName);
        }
    }

    function verifyBirthday(e){
        let bDay = e.target.value;
        let errBirthday = document.querySelector("#errBirthday");
        errBirthday.innerHTML = "";
        setBirthday(null);

        if (bDay.match("dd/mm/yyyy")){
            errBirthday.innerHTML = "Blanked Spaces are not Allowed!!";
        }else{
            setBirthday(bDay);
        }
    }
    
    function verifyPhoneNumber(e){
        let contactNum = e.target.value;
        let errPhoneNumber = document.querySelector("#errPhoneNumber");
        errPhoneNumber.innerHTML = "";
        setPhoneNumber(null);

        if (contactNum.trim().length <= 0){
            errPhoneNumber.innerHTML = "Blanked Spaces are not Allowed!!";
        } else if (!contactNum.match(/^09\d{9}$/)){
            errPhoneNumber.innerHTML = "Must be a Valid Contact Number!";
        }else{
            setPhoneNumber(contactNum);
        }
    }

    function verifyEmail(e){
        let emailAdd = e.target.value;
        let errEmail = document.querySelector("#errEmail");
        errEmail.innerHTML = "";
        setEmail(null);

        if (emailAdd.trim().length <= 0){
            errEmail.innerHTML = "Blanked Spaces are not Allowed!!";
        } else if (!emailAdd.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
            errEmail.innerHTML = "Invalid Email Address!";
        }else{
            setEmail(emailAdd);
        }
    }

    function verifyPassword(e){
            let pass = e.target.value;
            let errPassword = document.querySelector("#errPassword");
            errPassword.innerHTML = "";
            setPassword(null);

            if (pass.length <= 0){
                errPassword.innerHTML = "Blanked Spaces are not Allowed!!";
            }else if (pass.length <= 7){
                errPassword.innerHTML = "Atleast 8 Characters!";
            }else if(!pass.match(/[a-z]/)){
                errPassword.innerHTML = "Atleast 1 Lower Case Letter!";
            }else if(!pass.match(/[A-Z]/)){
                errPassword.innerHTML = "Atleast 1 Upper Case Letter!";
            }else if(!pass.match(/[0-9]/)){
                errPassword.innerHTML = "Atleast 1 Number!";
            }else if(!pass.match(/.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*/)){
                errPassword.innerHTML = "Atleast 1 Special Character!";
            }
            else{
                setPassword(pass);
            }
    }

    function verifyImageURL(e){
        let imgURL = e.target.value;
        let errImageURL = document.querySelector("#errImageURL");
        errImageURL.innerHTML = "";
        setImageURL(null);

        if (imgURL.trim().length <= 0){
            errImageURL.innerHTML = "Blanked Spaces are not Allowed!!";
        } else if (!imgURL.startsWith("https://")){
            errImageURL.innerHTML = "Invalid Image URL!";
        }else{
            setImageURL(imgURL);
        }
    }


    return(
        <>
        {!showData ? 
            <div id="register-form">
            <h3>Registration Form</h3>
            <div id="input-group">
                <input type="text" id="firstName" placeholder="First Name" onInput={(e)=>verifyFirstName(e)}/>
                <p className="text-error" id="errFirstName"></p>
            </div>
            <div id="input-group">
                <input type="text" id="lastName" placeholder="Last Name" onInput={(e)=>verifyLastName(e)}/>
                <p className="text-error" id="errLastName"></p>
            </div>
            <div id="input-group">
                <input type="text" id="phoneNumber" placeholder="Phone Number" onInput={(e)=>verifyPhoneNumber(e)}/>
                <p className="text-error" id="errPhoneNumber"></p>
            </div>
            <div id="input-group">
                <input type="date" name="" id="birthday" placeholder="Birthday" max={today} onInput={(e)=>verifyBirthday(e)}/>
                <p className="text-error" id="errBirthday"></p>
            </div>
            <div id="input-group">
                <input type="email" id="email" placeholder="Email" onInput={(e)=>verifyEmail(e)}/>
                <p className="text-error" id="errEmail"></p>
            </div>
            <div id="input-group">
                <input type="text" id="pass" placeholder="Password" onInput={(e)=>verifyPassword(e)}/>
                <p className="text-error" id="errPassword"></p>
            </div>
            <div id="input-group">
                <input type="text" id="imageURL" placeholder="Image URL" onInput={(e)=>verifyImageURL(e)}/>
                <p className="text-error" id="errImageURL"></p>
            </div>
        
        {firstName && lastName && phoneNumber && email && birthday && password && imageURL?
            <button onClick={()=>setShowData(true)}>Register</button>
        :
            <button disabled>Register</button>}
 
        </div>
        :
        <div id="main-container">
            <div id="showData">
                <img src={imageURL} alt="" />
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Birthday: {birthday}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {phoneNumber}</p>
            
            </div>
        </div>
        }  
        
        </>
    )
}

export default RegistrationForm;