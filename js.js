document.getElementById("extra-btn").addEventListener("click", function() {
  var node = document.createElement("div");
  var clone = document.getElementById("selectors-section").cloneNode(true);
  node.appendChild(clone);
  document.getElementById("data-section").appendChild(node);
});

$(document).ready(function() {
  $("form").change(function() {
    console.log(
      $(this)
        .closest("form")
        .serialize()
    );
  });
});

document.getElementById("submit-btn").addEventListener("click", function(e) {
  e.preventDefault();
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "9597011@gmail.com",
    Password: "4501E25B2818C4DEAE9D247AF3C0F104167E",
    To: "f_22w3@hotmail.com",
    From: "9597011@gmail.com",
    Subject: "هاااانو",
    Body: $(this)
      .closest("form")
      .serialize()
  }).then(message => alert(message));
});
