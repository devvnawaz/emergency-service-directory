function getContent(element) {
  let num = parseInt(document.getElementById(element).innerText, 10);
  if (isNaN(num)) num = 0;
  return num;
}

function numIncrement(element, increment) {
  let count = document.getElementById(element);
  count.innerText = parseInt(count.innerText, 10) + increment;
}

function numDecrement(element, decrement) {
  let count = document.getElementById(element);
  count.innerText = Math.max(0, parseInt(count.innerText, 10) - decrement);
}

function copyText(title, number) {
  navigator.clipboard.writeText(number).then(
    function () {
      numIncrement("copy", 1);
      alert("Copied " + title + ": " + number);
    },
    function (err) {
      console.error("Could not copy text: ", err);
      alert("Copy failed. Please try again.");
    }
  );
}

function callNumber(title, number) {
  let coins = getContent("coin");
  if (coins < 20) {
    alert(
      "You do not have sufficient coins! You need minimum 20 coins to make a call."
    );
    return;
  }
  numDecrement("coin", 20);
  showCallHistory(title, number);
  alert("📞 Calling " + title + ": " + number);
}

function showCallHistory(title, number) {
  let callHistoryList = document.getElementById("call-history");
  let createNewCallEntry = document.createElement("div");
  let showRealTimeCall = new Date().toLocaleTimeString();

  createNewCallEntry.className =
    "call-entry flex flex-row items-center justify-between mt-4 p-4 bg-gray-50 rounded-lg";

  createNewCallEntry.innerHTML =
    '<div><span class="font-bold text-xl">' +
    title +
    "</span><br/>" +
    '<span class="text-left text-gray-500">' +
    number +
    "</span></div>" +
    '<div class="text-gray-700">' +
    showRealTimeCall +
    "</div>";

  callHistoryList.appendChild(createNewCallEntry);
}

function clearHistory() {
  let callHistoryList = document.getElementById("call-history");
  for (let i = callHistoryList.children.length - 1; i >= 0; i--) {
    let child = callHistoryList.children[i];
    if (child.classList.contains("call-entry")) {
      callHistoryList.removeChild(child);
    }
  }
}

const hearts = document.querySelectorAll(".fa-heart");
hearts.forEach(function (heart) {
  heart.style.cursor = "pointer";
  heart.addEventListener("click", function () {
    numIncrement("heart", 1);
  });
});
