var skill=document.getElementById("refskill");
var about=document.getElementById("refabout");
var home =document.getElementById("refHome");
var projects=document.getElementById("refproject");
var connect=document.getElementById("refcon")
var h=document.getElementById("home");
var s =document.getElementById("skills");
var a=document.getElementById("about");
var p=document.getElementById("projects");
var c=document.getElementById("contact")

home.addEventListener("click",function(){
  if(h.classList.contains("d-none")){
    gsap.fromTo(
      "#home",{ x:"-100%" },
      {
        x:0,
        display: "block",
        duration: 0.5,
        delay: 1,
      }
    );
    h.classList.replace("d-none","d-block")
    a.classList.replace("d-block","d-none")
    s.classList.replace("d-block","d-none");
    p.classList.replace("d-block","d-none");
  }
})



about.addEventListener("click",function(){
  if(a.classList.contains("d-none")){
    gsap.fromTo(
      "#about",{ 
        opacity:0, 
        rotation: 360 },
      {
        opacity:1,
        rotation: 0,
        display: "block",
        duration: 0.5,
        delay: 1,
      }
    );
    a.classList.replace("d-none","d-block");
    h.classList.replace("d-block","d-none");
    s.classList.replace("d-block","d-none");
    p.classList.replace("d-block","d-none");
  }else{
  gsap.fromTo(
    "#home",{ x:"-100%" },
    {
      x:0,
      display: "block",
      duration: 0.5,
      delay: 1,
    }
  );
    h.classList.replace("d-none","d-block")
    a.classList.replace("d-block","d-none")
  }


})


skill.addEventListener("click",function(){
 if(s.classList.contains("d-none")){
  gsap.fromTo(
    "#skills",{ y:"-100%" },
    {
      y:0,
      display: "block",
      duration: 0.5,
      delay: 1,
    }
  );

  s.classList.replace("d-none","d-block");
  h.classList.replace("d-block","d-none");
  a.classList.replace("d-block","d-none");
  p.classList.replace("d-block","d-none");
 }else{
  gsap.fromTo(
    "#home",{ y:"100%" },
    {
      y:0,
      display: "block",
      duration: 0.5,
      delay: 1,
    }
  );
  s.classList.replace("d-block","d-none");
  h.classList.replace("d-none","d-block");
  a.classList.replace("d-block","d-none");
  p.classList.replace("d-block","d-none");
 }
})

projects.addEventListener("click",function(){
  if(p.classList.contains("d-none")){
    gsap.fromTo(
      "#projects",{ rotation:90,
        opacity: 0
       },
      {
        rotation:0,
        opacity: 1,
        display: "block",
        duration: 0.5,
        delay: 1,
      }
    );
    p.classList.replace("d-none","d-block");
    h.classList.replace("d-block","d-none");
    a.classList.replace("d-block","d-none");
    s.classList.replace("d-block","d-none");
  }else{
    gsap.fromTo(
      "#home",{ rotation:-90,
        opacity: 0
       },
      {
        rotation:0,
        opacity: 1,
        display: "block",
        duration: 0.5,
        delay: 1,
      }
    );
    p.classList.replace("d-block","d-none");
    h.classList.replace("d-none","d-block");
  }
})


connect.addEventListener("click",function(){
  if(c.classList.contains("d-none")){
    gsap.fromTo(
      "#contact",{ scale:50,
        rotation:360,
        opacity: 0
       },
      {
        scale:1,
        opacity: 1,
        rotation:0,
        display: "block",
        duration: 0.3,
        delay: 0.5,
      }
    );
    c.classList.replace("d-none","d-block")
    h.classList.replace("d-block","d-none")
    a.classList.replace("d-block","d-none")
    s.classList.replace("d-block","d-none");
    p.classList.replace("d-block","d-none");
  }else{
    gsap.fromTo(
      "#home",{ scale:50,
        rotation:360,
        opacity: 0
       },
      {
        scale:1,
        opacity: 1,
        rotation:0,
        display: "block",
        duration: 0.3,
        delay: 0.5,
      }
    );
    c.classList.replace("d-block","d-none")
    h.classList.replace("d-none","d-block");
    a.classList.replace("d-block","d-none")
    s.classList.replace("d-block","d-none");
    p.classList.replace("d-block","d-none");
  }
})


gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 3.3,
    delay: 0.5,
  }
);

anime({
  targets: '#Here path',
  strokeDashoffset: [anime.setDashoffset, 1],
  easing: 'easeInOutSine',
  duration: 2800,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false
});

anime({
  targets: '#MyName path',
  strokeDashoffset: [anime.setDashoffset, 1],
  easing: 'easeInOutSine',
  duration: 2000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});
