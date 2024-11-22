
const aboutMeCV = document.getElementById("aboutMeCV");
const firstjob = document.getElementById("firstjob");
const firstwork = document.getElementById("firstwork");
const locationone = document.getElementById("locationone")
const timeone = document.getElementById("timeone")
const firstocupation = document.getElementById("firstocupation")
const secondjob = document.getElementById("secondjob")
const parentwork = document.getElementById("parent-work")
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");
const parenteducation = document.getElementById("parent-education")
const showEducation = document.getElementById("showEducation")
const showWork = document.getElementById("showWork");
const parentWork = document.getElementById("parent-work")

const githubPagesQuiz = "https://mladenkovacic.github.io/team-9-quiz-app-forked/"
const githubRepoQuiz = "https://github.com/MladenKovacic/team-9-quiz-app-forked.git"

const githubPagesWhatsCooking = "https://mladenkovacic.github.io/WhatsCooking/";
const githubRepoWhatsCooking = "https://github.com/MladenKovacic/WhatsCooking.git"

const livePreviewOne = document.getElementById("livePreviewOne")




parentwork.style.display = "none"
showWork.addEventListener("click", function(){
if (parentwork.style.display =="none"){
  parentwork.style.display = "flex"
  showWork.innerHTML = "Show Less"
} else if(parentwork.style.display == "flex") {
  parentwork.style.display = "none"
  showWork.innerHTML = "Show Work Experiance"
  
} 

});
parenteducation.style.display = "none"
showEducation.addEventListener("click", function(){
if (parenteducation.style.display === "none"){
  parenteducation.style.display = "flex";
  showEducation.innerHTML = "Show Less"
} else if(parenteducation.style.display === "flex") {
  parenteducation.style.display = "none"
  showEducation.innerHTML = "Show Education"
  
} 

});


async function getInfo() {
  try {
      const response = await fetch("./index.json");

      if(!response.ok) {
          throw new Error("HTTP" + response.status);
      }
      const data = await response.json();
      return data;

  } catch(error) {
      console.log(error);
  }
}
async function displayCV() {
  const data = await getInfo();
  data.aboutMe.forEach(info => {
      aboutMeCV.textContent = info.cv;
      console.log(data)
  });
  

}

async function displayWork() {
  const data = await getInfo();
  data.firstjob.forEach(info => {
      firstjob.textContent = info.job;
      firstwork.textContent = info.workplace;
      locationone.textContent = info.location;
      timeone.textContent = info.time;
      firstocupation.textContent = info.ocupation;
      
      });
      data.secondjob.forEach(info => {
        secondjob.textContent = info.job;
        secondwork.textContent = info.workplace;
        locationtwo.textContent = info.location;
        timetwo.textContent = info.time;
        secondocupation.textContent = info.ocupation;
        
        });
        data.thirdjob.forEach(info => {
          thirdjob.textContent = info.job;
          thirdwork.textContent = info.workplace;
          locationthree.textContent = info.location;
          timethree.textContent = info.time;
          thirdocupation.textContent = info.ocupation;
          
          });
  
}

async function displayEducation() {
  const data = await getInfo();
  data.firsteduacation.forEach(info => {
    firsteducation.textContent = info.education;
    educationone.textContent = info.typeeducation;
    locationfour.textContent = info.location;
    timefour.textContent = info.time;
    ocupationfour.textContent = info.ocupation;
      
      });
      data.secondeducation.forEach(info => {
        secondeducation.textContent = info.education;
        educationtwo.textContent = info.typeeducation;
        locationfive.textContent = info.location;
        timefive.textContent = info.time;
        ocupationfive.textContent = info.ocupation;
        
        });
        data.thirdeduacation.forEach(info => {
          thirdeducation.textContent = info.education;
          educationthree.textContent = info.typeeducation;
          locationsix.textContent = info.location;
          timesix.textContent = info.time;
          ocupationsix.textContent = info.ocupation;
          
          });
  
}




            

function OpenModal() {
    
    modalContainer.classList.add("show");

}

function CloseModal() {
    modalContainer.classList.remove("show");
   
}

function CloseContainer(event) {
    console.log(event.target)
  
    if(event.target === modalContainer) {
        
        CloseModal();
    } 
 

}

// Events
openModal.addEventListener("click", OpenModal);
closeModal.addEventListener("click", CloseModal);
modalContainer.addEventListener("click", CloseContainer);





displayCV();
displayWork()
displayEducation()