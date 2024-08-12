//console.log("it works");
//console.log("we know for sure");

//saving <p></p>
//const paragraphJStest = document.getElementById("js-test");

//paragraphJStest.onclick = function () {
// paragraphJStest.style.color = "purple";
//};

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert(`We appreciate your interest in InvestPulse - Tracker, ${name}!`);
    } else {
      alert("Please complete all fields before submitting.");
    }
  });
});
