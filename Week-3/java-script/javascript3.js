function isStrongPassword(ps){

    if(ps.length < 8){
      console.log(`Too short is StrongPassword ${ps}`);
      return false;
    }
  
  
    if(ps.includes("password")){
      console.log("Contains password" );
      return false;
    }
  
  
    if(!/[A-Z]/.test(ps)){
      console.log("No uppercase characters");
      return false;
    }
  
    console.log("strong passsword");
    return true;
    
  }
  
  isStrongPassword("Qwerty123");