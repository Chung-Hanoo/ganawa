
    function validate(form1){

      if(form1.name.value.length < 2){
        alert("your name is too short");
      }
      if(form1.id.value.length < 5){
        alert("your ID is too short");
      }
      if(form1.pw.value.length <5){
        alert("your password is too short");
      }
      if(form1.pw.value.length != form1.pw2.value.length){
        alert("check your password again");
      }
      if(form1.phone.value.length < 8){
        alert("your phone number is too short");
        return false;
      }
      if(form1.name.value.length >= 2&&form1.id.value.length >= 5&&form1.pw.value.length >=5&&form1.pw.value.length == form1.pw2.value.length&&form1.phone.value.length >= 8){
        alert("Congratulations on joining.");
        return true;
      }
  }
