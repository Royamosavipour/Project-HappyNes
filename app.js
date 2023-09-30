const scrolElem = document.querySelector("#scrol");

window.addEventListener("scroll", function () {
  let scrolTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windoheighth = window.innerHeight;

  let scrolPerecent = scrolTop / (documentHeight - windoheighth);
  let scrollPerecentRound = Math.round(scrolPerecent * 100);
  scrolElem.style.width = scrollPerecentRound + "%";
});


