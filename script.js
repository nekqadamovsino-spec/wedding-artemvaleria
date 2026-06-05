const target = new Date("2026-12-12T12:00:00+07:00");

function pad(n){ return String(n).padStart(2,"0"); }

function updateCountdown(){
  let diff = target - new Date();
  if(diff < 0) diff = 0;
  document.getElementById("days").textContent = Math.floor(diff/(1000*60*60*24));
  document.getElementById("hours").textContent = pad(Math.floor((diff/(1000*60*60))%24));
  document.getElementById("minutes").textContent = pad(Math.floor((diff/(1000*60))%60));
  document.getElementById("seconds").textContent = pad(Math.floor((diff/1000)%60));
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById("rsvpForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("guestName").value.trim();
  const answer = document.querySelector('input[name="answer"]:checked')?.value || "";
  document.getElementById("formResult").textContent = name + ", спасибо! Ваш ответ принят.";
  this.reset();

  // Для Google Таблицы сюда потом добавим WEB_APP_URL.
});
