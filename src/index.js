import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });
 

const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", function( event ) {
    event.target.style.fontSize = "5rem";
}, false);

h1.addEventListener("mouseout", function( event ) {
    event.target.style.fontSize = "";
  }, false);

  const nav = document.querySelector("nav");
const aTags = nav.getElementsByTagName("a");
for (let i = 0; i < aTags.length; i++) {
  aTags[i].addEventListener('dblclick', function(event) {
    event.target.style.backgroundColor = "tan";
  }, false)};

  window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      document.body.style.backgroundColor = "tan";
    }else {
      document.body.style.backgroundColor = "";}
  });
 
  window.addEventListener('load', function() {
    this.alert('Hoşgeldiniz!');
  });
  document.querySelectorAll("img")[1].addEventListener("wheel",function(e){
    e.preventDefault();
    e.target.src = "https://picsum.photos/400/300";
    setTimeout(() => {
        e.target.src = "http://localhost:9000/img/adventure.jpg";
    }, 1000);
});
 
  document.querySelector("h2").addEventListener("click", function(event) {
    event.target.style.fontSize = "4rem";
    event.target.style.color = "red";
  });
  
  
  
  

 
 
 
 

 
 

 
 

 
 
 

 
 
 
 
 
  
  
  
  
  
  
  
 
 
 
 
  
  
  
  
  
  
  
  
 
  
  
    
  
    







