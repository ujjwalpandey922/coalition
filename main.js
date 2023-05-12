import "./style.css";

const button = document.getElementById("wrapper-buttons");
const tabs = document.getElementById("tabs");
// ======================CAROUSEL===========================
let clientWidth = document.getElementById("images-wrapper").offsetWidth;
button.onclick = (e) => {
  if (e.target.id === "pre")
    document.getElementById("images-wrapper").scrollLeft -= clientWidth;
  if (e.target.id === "next")
    document.getElementById("images-wrapper").scrollLeft += clientWidth;
};

// =========================TABS===============================
tabs.onclick = (evt) => {
  if (window.innerWidth > 880) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("mountain-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("mountain-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(
      evt.target.id === "mt1" ? "M1" : "M2"
    ).style.display = "block";
    evt.currentTarget.className += " active";
  }
};

// ==================TAB to Accordian +++++++++++++++++++++++
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
