
      let form = document.getElementById("form");
      form.addEventListener("submit", (e) => {
        if (!validate()) {
          e.preventDefault();
        }
      });

      function validate() {
        const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const nameReg = /^[A-Za-z]+$/;
        const pinReg = /^\d+$/;

        let email = document.getElementById("email").value;
        let emailLbl = document.getElementById("emailLbl");

        let name = document.getElementById("name").value;
        let nameLbl = document.getElementById("nameLbl");

        let pin = document.getElementById("pin").value;
        let pinLbl = document.getElementById("pinLbl");

        let result = document.getElementById("result");

        //validating name
        if (!nameReg.test(name)) {
          result.textContent =
            "Please Enter a Valid Name (Letters Only , Can't be empty)";
          nameLbl.style.color = "red";
          return false;
        } else {
          result.textContent = "";
          nameLbl.style.color = "black";
        }

        //validating pin
        if (pin.length != 4 || !pinReg.test(pin)) {
          result.textContent =
            "Please Enter a Valid Pin (4 Numbers Only , Can't be empty)";
          pinLbl.style.color = "red";
          return false;
        } else {
          result.textContent = "";
          pinLbl.style.color = "black";
        }

        //validating email
        if (!emailReg.test(email)) {
          result.textContent = "Please Enter a Valid Email";
          emailLbl.style.color = "red";
          return false;
        } else {
          result.textContent = "";
          emailLbl.style.color = "black";
        }

        return true;
      }
