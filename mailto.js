function sendToDisc(contenu) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://deusinmachina.herokuapp.com/");
  xhr.send("content=" + contenu);

  xhr.addEventListener("readystatechange", function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log("informations envoyées !");
    }
  });
}
