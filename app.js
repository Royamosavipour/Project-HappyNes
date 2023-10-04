const scrolElem = document.querySelector("#scrol");

window.addEventListener("scroll", function () {
  let scrolTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windoheighth = window.innerHeight;

  let scrolPerecent = scrolTop / (documentHeight - windoheighth);
  let scrollPerecentRound = Math.round(scrolPerecent * 100);
  scrolElem.style.width = scrollPerecentRound + "%";
});



const pyykkitupaElem=document.querySelector('#pyykkitupa')
const saunavuoroElem=document.querySelector('#saunavuoro')
const saunaContainer=document.querySelector('.sauna-container')
const pesukoneContainer=document.querySelector('.pesukone_container')
const omatvarauksetElem=document.querySelector('.omatvaraukset')
const modulcontainer=document.querySelector('.modulcontainer')
const btnmodal=document.querySelector('.btnmodal')




pyykkitupaElem.addEventListener("click",()=>{
  console.log('first')
  pesukoneContainer.classList.toggle('pesukone_container')

})

saunavuoroElem.addEventListener("click",()=>{
saunaContainer.classList.toggle('sauna-container')

})

omatvarauksetElem.addEventListener("click",()=>{
  modulcontainer.classList.add('active')
})

modulcontainer.addEventListener("click",()=>{
  modulcontainer.classList.remove('active')


})




