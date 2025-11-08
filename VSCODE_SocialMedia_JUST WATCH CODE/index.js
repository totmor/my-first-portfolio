let allforms = document.forms;
let loginform = allforms.LoginForm;
let loginbtn = document.getElementById("LoginButton");
let url_users = "https://twitterapi.azurewebsites.net/users";
let url_messages = "https://twitterapi.azurewebsites.net/messages";
let modal = document.getElementById("Modal1");

let headers = new Headers();
headers.set("content-type", "application/json");
if (localStorage.getItem("x-access-token")) {
  headers.set("x-access-token", localStorage.getItem("x-access-token"));
}

let createuserform = allforms.CreateUserForm;
let saveuserbutton = document.getElementById("ModalSaveUserButton");

saveuserbutton.addEventListener("click", function () {
  let user = {};
  if (validateUserCreation()) {
    user = {
      firstName: createuserform.FirstName.value,
      lastName: createuserform.LastName.value,
      userName: createuserform.UserName.value,
      email: createuserform.Email.value,
      password: createuserform.Password2.value,
    };
    registerUser(user);
  }
});

loginbtn.addEventListener("click", function () {
  let user = {
    email: loginform.InputEmail1.value,
    password: loginform.InputPassword1.value,
  };

  loginUser(user);
});

async function registerUser(user) {
  let requestOptions = {
    method: "POST",
    body: JSON.stringify({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: user.password,
    }),
    headers: headers,
  };

  let response = await fetch(url_users + "/register", requestOptions);
  if (response.ok) {
    const json = await response.json();
    console.log("user is registered");
    console.log(json);
    var myModal = bootstrap.Modal.getInstance(
      document.getElementById("Modal1")
    );
    myModal.hide();
    document.getElementById("CreateUserForm").reset();
    alert("Response.ok: user successfuly registered");
  } else {
    const text = await response.text();
    console.log(text);
    var myModal = bootstrap.Modal.getInstance(
      document.getElementById("Modal1")
    );
    myModal.hide();
    document.getElementById("CreateUserForm").reset();
    alert("Error404: user not registered");
  }
}

async function loginUser(user) {
  let requestOptions = {
    method: "POST",
    body: JSON.stringify({ email: user.email, password: user.password }),
    redirect: "follow",
    headers: headers,
  };

  const response = await fetch(url_users + "/login", requestOptions);
  if (response.ok) {
    const json = await response.json();
    headers.set("x-access-token", json.token);

    localStorage.setItem("connectedUser", JSON.stringify(json));

    window.location.replace("blogpage.html");
  } else {
    const text = await response.text();
    console.log(text);
  }
}
//Deze functie hieronder maakt een paar validatiestappen voor de create user form
//Het geeft ook een bool waarde terug
function validateUserCreation() {
  if (createuserform.FirstName.value === "") {
    createuserform.FirstName.classList.add("is-invalid");
    return false;
  } else {
    createuserform.FirstName.classList.remove("is-invalid");
  }

  if (createuserform.LastName.value === "") {
    createuserform.LastName.classList.add("is-invalid");
    return false;
  } else {
    createuserform.LastName.classList.remove("is-invalid");
  }

  if (createuserform.UserName.value === "") {
    createuserform.UserName.classList.add("is-invalid");
    return false;
  } else {
    createuserform.UserName.classList.remove("is-invalid");
  }

  if (createuserform.Email.value !== "") {
    var mailregexp =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!mailregexp.test(createuserform.Email.value.toLowerCase())) {
      createuserform.Email.classList.add("is-invalid");

      return false;
    } else {
      createuserform.Email.classList.remove("is-invalid");
    }
  } else {
    createuserform.Email.classList.add("is-invalid");
    return false;
  }

  if (createuserform.Password2.value.length <= 8) {
    createuserform.Password2.classList.add("is-invalid");
    return false;
  } else {
    createuserform.Password2.classList.remove("is-invalid");
  }

  return true;
}
