let headers = new Headers();
headers.set("content-type", "application/json");
let currentuser = JSON.parse(localStorage.getItem("connectedUser"));
console.log(currentuser);
headers.set("x-access-token", currentuser.token);
let url_messages = "https://twitterapi.azurewebsites.net/messages";
let prevbtn = document.getElementById("PreviousMessageButton");
let nextbtn = document.getElementById("NextMessageButton");
let prevUrl = null;
let nextUrl = null;
let currentUrl = null;
let msgHtml = document.getElementById("htmlMessages");
let postmsgbtn = document.getElementById("PostMessageButton");
let messagesJSON = {};
let likeOrunlikeddmessage = {};

let likelogo = `<svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
<path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
</svg>`;

let likelogofilled = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
</svg>`;

let trashlogo = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;

let trashlogofilled = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg>`;
let thumbdownfillled = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
<path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"/>
</svg>`;

postmsgbtn.addEventListener("click", function () {
  let message = { message: document.getElementById("PostText").value };
  add_msg(message);
  document.getElementById("PostMessageForm").reset();
});

async function add_msg(msg) {
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ message: msg.message }),
  };

  let response = await fetch(url_messages + "/create", options);
  if (response.ok) {
    console.log("message added");
  } else {
    const text = await response.text();
    console.log(text);
  }
}
prevbtn.addEventListener("click", function () {
  console.log(prevUrl);
  if (prevUrl != null) {
    msgHtml.innerHTML = "";
    getMessages(prevUrl);
  }
});
nextbtn.addEventListener("click", function () {
  console.log(nextUrl);
  if (nextUrl != null) {
    msgHtml.innerHTML = "";
    getMessages(nextUrl);
  }
});

getMessages(url_messages);

async function getMessages(url) {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: headers,
  };

  const response = await fetch(url, requestOptions);
  if (response.ok) {
    const json = await response.json();
    console.log(json);
    prevUrl = json.prevLink;
    nextUrl = json.nextLink;
    messagesJSON = json;
    for (let i = 0; i < json.results.length; i++) {
      const date = new Date(json.results[i].timeStamp);
      msgHtml.innerHTML += `
       <article>
       <p>From: ${json.results[i].user.user_name}</p>
       <p>Date: ${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}</p>
       
       <p style="display: none;">${i}</p>
       <p>${json.results[i].message}</p>
       <div class="row"> 
                <div class="col  d-flex" id="underthemessage${i}">
                    <a type="button" class="btn btn-link bxn1" id="like${i}" >${likelogo}</a>
                    <p class="mt-2">${json.results[i].likes.length}</p>
                    
                    </div>
       </article>
       <hr>
       `;
      if (json.results[i].user._id === currentuser._id) {
        document.getElementById(`underthemessage${i}`).innerHTML += `
<a type="button" class="btn btn-link bxn2" id='trashlogo${i}'  >${trashlogo}</a>
<a type="button" class="btn btn-link bxn3" id='updatemsghtml${i}' data-bs-toggle="modal" data-bs-target="#Modal2">Wijzigen</a>`;
      }
      document.getElementById(
        `underthemessage${i}`
      ).innerHTML += `<div class="col d-flex">
       <a  class="btn btn-link ms-auto bxn4" type ="button">comments page »</a></div>
   </div>`;
    }

    // Get the div element by ID
    let bnts = document
      .getElementById("htmlMessages")
      .querySelectorAll(".bxn1");

    bnts.forEach(function (button, index) {
      // Do something with each button

      button.addEventListener("click", function () {
        id = messagesJSON.results[index]._id;

        var likesArray = [];
        likesArray = messagesJSON.results[index].likes;

        function UserExists(userId) {
          for (var i = 0; i < likesArray.length; i++) {
            if (likesArray[i]._id === userId) {
              return true;
            }
          }
          return false;
        }

        if (!UserExists(currentuser._id)) {
          LikeMessage();

          button.innerHTML = likelogofilled;
        } else {
          UnlikeMessage();
          button.innerHTML = thumbdownfillled;
        }

        async function LikeMessage() {
          let requestOptions = {
            method: "POST",

            redirect: "follow",
            headers: headers,
          };

          const response = await fetch(
            url_messages + `/${id}` + "/like",
            requestOptions
          );
          if (response.ok) {
            const json = await response.json();
            console.log("likedata:");
            console.log(json);
          } else {
            const text = await response.text();
            console.log(text);
          }
        }

        async function UnlikeMessage() {
          let requestOptions = {
            method: "POST",

            redirect: "follow",
            headers: headers,
          };

          const response = await fetch(
            url_messages + `/${id}` + "/unlike",
            requestOptions
          );
          if (response.ok) {
            const json = await response.json();

            console.log("unlikedata:");
            console.log(json);
          } else {
            const text = await response.text();
            console.log(text);
          }
        }
      });
    });

    let bnts2 = document
      .getElementById("htmlMessages")
      .querySelectorAll(".bxn2");
    bnts2.forEach(function (button, index) {
      button.addEventListener("click", function () {
        let val =
          button.parentElement.parentElement.previousElementSibling
            .previousElementSibling.innerHTML;

        DeleteMessage(json.results[val]._id);
        button.innerHTML = trashlogofilled;
      });
    });

    async function DeleteMessage(id) {
      const options = {
        method: "DELETE",
        headers: headers,
      };

      // opties worden gebruikt om get te veranderen in post en te zeggen, welke data er naar de server gestuurd wordt
      let response = await fetch(url_messages + "/" + id, options);
      if (response.ok) {
        console.log("message deleted");
        console.log(json);
      }
    }

    let bnts3 = document
      .getElementById("htmlMessages")
      .querySelectorAll(".bxn3");

    bnts3.forEach(function (button, index) {
      button.addEventListener("click", function () {
        let val =
          button.parentElement.parentElement.previousElementSibling
            .previousElementSibling.innerHTML;

        let updatemsgbtn = document.getElementById("ModalChangeMessageButton");

        updatemsgbtn.addEventListener("click", function () {
          let message = {
            message: document.getElementById("ChangeTextBox").value,
          };

          UpdateMessage(message, json.results[val]._id);
          var myModal = bootstrap.Modal.getInstance(
            document.getElementById("Modal2")
          );
          myModal.hide();
        });
      });
    });
    async function UpdateMessage(msg, id) {
      const options = {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(msg),
      };

      const response = await fetch(url_messages + "/" + id, options);

      if (response.ok) {
        console.log("message updated");
        console.log(json);
      } else {
        const text = await response.text();
        console.log(text);
      }
    }

    let bnts4 = document
      .getElementById("htmlMessages")
      .querySelectorAll(".bxn4");
    bnts4.forEach(function (button, index) {
      button.addEventListener("click", function () {
        let val =
          button.parentElement.parentElement.parentElement
            .previousElementSibling.previousElementSibling.innerHTML;
        localStorage.setItem("message", JSON.stringify(json.results[val]));
        window.location.href = "commentpage.html";
      });
    });
  } else {
    const text = await response.text();
    console.log(text);
  }
}
