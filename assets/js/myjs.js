$(document).ready(function() {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var nomeecognomePattern = /^[A-Za-z' -]+$/;
        var passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
        
        $("button#showPwd").click(function(e) {
            $(this).html("Clicked");
            let encPwd = $("#exampleInputPassword1").val();
            let mySpan = $("#clearPassword");
        
    
            console.log(encPwd);    //debug
            mySpan.text(encPwd);
            })

        $("button#showPwd2").click(function (e) { 
            $(this).html("Clicked");
            let encPwd2 = $("#exampleInputRipetiPassword1").val();
            let mySpan2 = $("#clearPassword2");
            
            console.log(encPwd2);    //debug
            mySpan2.text(encPwd2);
        
            })

        
        function isEmail(email) {
            return emailPattern.test(email)
        }

        function isName(name) {
            return nomeecognomePattern.test(name);
        }

        function isSurname(cognome){
            return nomeecognomePattern.test(cognome);
        }

        function isPass(pass){
            return passPattern.test(pass);
        }



        $("button#check").click(function(e) {
            let email = $("#exampleInputEmail1").val();
            let nome = $("#exampleInputName1").val();
            let cognome = $("#exampleInputCognome1").val();
            let pass = $("#exampleInputPassword1").val();
            let pass1 = $("#exampleInputRipetiPassword1").val();

            if (!isEmail(email)) {
                let checkSpan = $("#checkSpan");
                checkSpan.text("La mail non è valida.");
                console.log("Email not valid");
            };

            if (!isName(nome)) {
                let checkSpanName = $("#checkSpanName");
                checkSpanName.text("Il nome non è valido.");
                console.log("Name not valid");
            }

            if (!isSurname(cognome)) {
                let checkSpanSurname = $("#checkSpanSurname");
                checkSpanSurname.text("Il cognome non è valido.");
                console.log("Surname not valid");
            }

            if (!isPass(pass)) {
                let checkSpanPass = $("#checkSpanPass");
                checkSpanPass.text("La password non è valida:la password deve contenere:-una lettera minuscola,-una lettera maiuscola,-almeno una cifra,-almeno uno dei seguenti caratteri speciali: @, $, !, %, *, ?, &.");
            }

            if(pass === pass1){
                console.log("Passwords match");
            }else{
                let checkSpanPass = $("#checkSpanPass");
                checkSpanPass.text("Le password non coincidono.");
                console.log("Passwords do not match");
            }

            if($("#exampleInputPassword1").val() === $("#exampleInputRipetiPassword1").val() && isEmail($('#exampleInputEmail1').val())=== true && isName($('#exampleInputName1').val()) === true && isSurname($('#exampleInputCognome1').val()) === true && isPass($('#exampleInputPassword1').val()) === true) {
                $("button#submitFinal").prop("disabled", false);
                $("button#check").css("background-color", "green");

            
            }else{
                $("button#check").css("background-color", "red");
   
            }
        })
})