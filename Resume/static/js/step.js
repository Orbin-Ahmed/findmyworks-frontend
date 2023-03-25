const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]
let currentStep = formSteps.findIndex(step => {
  return step.classList.contains("active")
})

if (currentStep < 0) {
  currentStep = 0
  showCurrentStep()
}

multiStepForm.addEventListener("click", e => {
  let incrementor
  if (e.target.matches("[data-next]")) {
    incrementor = 1
  } else if (e.target.matches("[data-previous]")) {
    incrementor = -1
  }

  if (incrementor == null) return

  const inputs = [...formSteps[currentStep].querySelectorAll("input")]
  const allValid = inputs.every(input => input.reportValidity())
  if (allValid) {
    currentStep += incrementor
    showCurrentStep()
  }
})

formSteps.forEach(step => {
  step.addEventListener("animationend", e => {
    formSteps[currentStep].classList.remove("hide")
    e.target.classList.toggle("hide", !e.target.classList.contains("active"))
  })
})

function showCurrentStep() {
  resume_change(currentStep);
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep)
  })
}

function resume_change(page_num) {
  if (page_num  == 6){
    document.getElementById("myResume_0").style.display = "block";
    document.getElementById("myResume_1").style.display = "none";
    document.getElementById('resume_page_2').classList.remove("myStep-1");
    document.getElementById('resume_page_1').classList.add("myStep-1");
  }
  else if(page_num >= 2){
    document.getElementById("myResume_0").style.display = "none";
    document.getElementById("myResume_1").style.display = "block";
    document.getElementById('resume_page_1').classList.remove("myStep-1");
    document.getElementById('resume_page_2').classList.add("myStep-1");
  }
}