gitfunction Validate()                                    
{ 
    var name = document.forms["forms"]["Name"]; 
    console.log (name.value)
    var email = document.forms["forms"]["email"]; 
    var password = document.forms["forms"]["password"];    
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    }  
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 

    return true; 
}