document.getElementById("extra-btn").addEventListener("click", function () {
  var node = document.createElement("div");
  var clone = document.getElementById("selectors-section").cloneNode(true);
  node.appendChild(clone);
  document.getElementById("data-section").appendChild(node);
});

document.getElementById("request-date").value = TodayDate();
var selectYear = document.getElementById("select-year");
var d = new Date();
var n = d.getFullYear();
for (let index = n; index >= 1950; index--) {
  var option = document.createElement("option");
  option.text = index;
  selectYear.add(option);
}

// $(document).ready(function () {
//   $("form").change(function () {
//     console.log(
//       $(this)
//       .closest("form")
//       .serialize()
//     );
//   });
// });

document.getElementById("submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  let list = [];
  let br = 0;
  $("select").each(function () {
    if (br == 3) {
      list.push("      ");
      br = 0;
    }
    list.push($(this).val())
    br++;
  })
  var body = `المقدم: ${$("#sname").val()}` + '\r\n' + `التاريخ: ${TodayDate()}` +
    '\r\n' + `الهاتف: ${$("#sphone").val()}` + '\r\n' + `الطالب: ${$("#student-name").val()}` +
    '\r\n' + `المدرسة: ${$("#school-name").val()}` +
    '\r\n' + `الطلب: ${list}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "9597011@gmail.com",
    Password: "4501E25B2818C4DEAE9D247AF3C0F104167E",
    To: "f_22w3@hotmail.com",
    From: "9597011@gmail.com",
    Subject: "هاااانو",
    Body: body
  }).then((message) => {
    if (message == "OK") {
      $("#main").addClass("blur");
      $("#main2").removeClass("hide");
      $("#overlay").addClass("disable")
      $("body").css("overflow", "hidden");
    } else {
      alert(message);
    }
  });
});

function TodayDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  return today = mm + '/' + dd + '/' + yyyy;

}
