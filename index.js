function isEmpty(){
    var id = ['name','last','email','pass']
    for (let index = 0; index < id.length; index++) {
        var valueOfId = document.getElementById(id[index]).value
        if(valueOfId == '' || valueOfId == null){
            var a = document.getElementById(id[index])
            var errorText = ['error-name','error-last','error-email','error-pass'];
            var value = ['First Name', 'Last Name', 'email', 'password']
            var e = document.getElementById(errorText[index]);
            e.innerHTML = value[index] + ' cannot be empty';
            a.classList.add('eamty','input-error');
        }
    }

   var emailValid = document.getElementById('email').validity.valid
  if(!emailValid){
      document.getElementById('email').style.color = 'red';
      document.getElementById('email').classList.add('eamty','input-error');
      document.getElementById('error-email').innerHTML = 'Looks like this is not an email';

  }
  return;
}

