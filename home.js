// heart icon count

let heart_count = document.getElementById("heart-count");

let heart_icon = document.getElementsByClassName("heart-icon");

for (let icon of heart_icon) {
  icon.addEventListener("click", function () {
    let current = parseInt(heart_count.innerText);

    heart_count.innerText = current + 1;

    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid", "text-red-800");

    setTimeout(() => {
      icon.classList.remove("fa-solid", "text-red-800");
      icon.classList.add("fa-regular");
    }, 200);
  });
}

// call btn and clear history

let coin_count = document.getElementById("coin-count");
let coins = parseInt(coin_count.innerText);

let call_history = document.getElementById("call-history");

let clear_btn = document.getElementById("clear-btn");

let call_btn = document.getElementsByClassName("call-btn");

for (let btn of call_btn) {
  btn.addEventListener("click", function () {
    let card = btn.closest(".card");
    let serviceName = card.querySelector("h3").innerText;
    let serviceNumber = card.querySelector("span.font-bold").innerText;

    if (coins < 20) {
      alert("You don’t have enough coins. It costs 20 coins to make a call.");
      return;
    }

    alert("Calling " + serviceName + " " + serviceNumber + "....");

    coins -= 20;
    coin_count.innerText = coins;

    let now = new Date().toLocaleTimeString();

    let div = document.createElement("div");
    div.className = "p-3";
    div.innerHTML = `
      <div class="flex justify-between items-center p-4 bg-[rgba(250,250,250,1)] rounded-2xl">
        <div>
          <h1 class="text-[#111111] font-semibold text-[12px]">${serviceName}</h1>
          <p class="text-[#5C5C5C] text-[10px]">${serviceNumber}</p>
        </div>
        <p class="text-[10px]">${now}</p>
      </div>
    `;
    call_history.appendChild(div);
  });
}
document.getElementById("clear-btn").addEventListener("click", function () {
  call_history.innerHTML = "";
});
