
        const society = document.getElementById('society');

        const username = document.getElementById('personne');

        const adresse = document.getElementById('adresse');

        const postal = document.getElementById('postal');

        const ville = document.getElementById('ville');

        const telephone = document.getElementById('telephone');
        
        const email = document.getElementById('email');

        function validate() {
            var societe = document.forms["myForm"]["sname"].value;
            var confiance = document.forms["myForm"]["personne"].value;
            var addr = document.forms["myForm"]["adresse"].value;
            var code = document.forms["myForm"]["postal"].value;
            var city = document.forms["myForm"]["ville"].value;
            var tel = document.forms["myForm"]["telephone"].value;
            var mail = document.forms["myForm"]["email"].value;
            var mess = document.forms["myForm"]["mess"].value;
            var codep = "CODEP"
            if (societe == "") {
                error(society, 'Society cannot be blank');
                return false;
            }else {
                success(society);
            }
            if (confiance == "") {
                error(username, 'Username cannot be blank');
                return false;
            }else {
                success(username);
            }
            if (addr == "") {
                error(adresse, 'Adresse cannot be blank');
                return false;
            }else {
                success(adresse);
            }
            if (codep.length > code) {
                error(postal, 'Code Postal cannot be blank');
                return false;
            }else {
                success(postal);
            }
            if (city == "") {
                error(ville, 'Ville cannot be blank');
                return false;
            }else {
                success(ville);
            }
            if (tel == "") {
                error(telephone, 'Telephone cannot be blank');
                return false;
            }else {
                success(telephone);
            }
            if (mail == "") {
                error(email, 'Email cannot be blank');
                return false;
            }else {
                success(email);
            }
            if (mess == "Choisisez") {
                error(message, 'Message cannot be blank');
                return false;
            }else {
                success(message);
            }
        }
        function error(input, message) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
            formControl.className = 'form-control error';
            small.innerText = message;
        }

        function success(input) {
            const formControl = input.parentElement;
            formControl.className = 'form-control success';
        }


        function numbersOnly(input) {
            const regex = /[^0-9]/g;
            if (true) {
                input.value = input.value.replace(regex, "");
            } else {
                return console.log("Good, Continuez")
            }
        }
        function lettersOnly(input) {
            const regex = /[^a-z]/g;
            if (true) {
                input.value = input.value.replace(regex, "");
            } else {
                return console.log("Good, Continuez")
            }
        }