function printDate() {
  alert(Date());
}

function body_color_night() {
  document.querySelector("main").style.backgroundColor = "black";
  document.querySelector("main").style.color = "white";
}

function body_color_day() {
  document.querySelector("main").style.backgroundColor = "white";
  document.querySelector("main").style.color = "black";
}

function over() {
  document.querySelector("main").style.backgroundColor = "orange";
  document.querySelector("main").style.color = "blue";
}

function out() {
  document.querySelector("main").style.backgroundColor = "white";
  document.querySelector("main").style.color = "black";
}

function check() {
  if (member.id.value == "") {
    alert("아이디를 입력하세요");
    member.id.focus();
    return true;
  }
  if (member.pw.value == "") {
    alert("패스워드를 입력하세요");
    return member.pw.focus();
  }
  if (member.phone2.value == "") {
    alert("전화번호를 입력하세요");
    return member.phone2.focus();
  }
  if (member.phone3.value == "") {
    alert("전화번호를 입력하세요");
    return member.phone3.focus();
  }
}
