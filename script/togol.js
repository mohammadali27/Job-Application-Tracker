let InterviewList = [];
let RejectedList = [];

let totalNumbar = document.getElementById("total-number");
let InterviewBtnP = document.getElementById("InterviewBtnP");
let RejectedBtnP = document.getElementById("RejectedBtnP");
let totalJobs = document.getElementById("total-jobs");

const allCardSections = document.getElementById("allCardSections");
const AllFelter = document.getElementById("AllFelter");
const InterviewBtn = document.getElementById("InterviewBtn");
const RejectedBtn = document.getElementById("RejectedBtn");
const filterSection = document.getElementById("filter-section");

const maincontiner = document.querySelector("main");
const InterviewBtn2 = document.querySelectorAll(".Interview-btn2");
const MobileFirstCorp = document.querySelectorAll(".MobileFirstCorp");
const Rejected = document.querySelectorAll(".Rejected-btn2");
const NotApplied = document.querySelectorAll(".Not-Applied");

function claculetCount() {
  totalNumbar.innerText = allCardSections.children.length;
  totalJobs.innerText = allCardSections.children.length;

  InterviewBtnP.innerText = InterviewList.length;
  RejectedBtnP.innerText = RejectedList.length;
}
claculetCount();

function togglestyle(id) {
  AllFelter.classList.remove("btn", "btn-primary");
  InterviewBtn.classList.remove("btn", "btn-primary");
  RejectedBtn.classList.remove("btn", "btn-primary");

  AllFelter.classList.add("btn", "btn-soft");
  InterviewBtn.classList.add("btn", "btn-soft");
  RejectedBtn.classList.add("btn", "btn-soft");

  const selected = document.getElementById(id);
  console.log(selected);

  selected.classList.remove("btn", "btn-soft");
  selected.classList.add("btn", "btn-primary");
  if (id === "InterviewBtn") {
    allCardSections.classList.add("hidden");
    filterSection.classList.remove("hidden");

    filterSection.innerHTML = "";
    renderInterviewList();
  } else if (id === "RejectedBtn") {
    allCardSections.classList.add("hidden");
    filterSection.classList.remove("hidden");

    filterSection.innerHTML = "";
    renderRejectedList();
  } else if (id === "AllFelter") {
    allCardSections.classList.remove("hidden");
    filterSection.classList.add("hidden");
  }
}
maincontiner.addEventListener("click", function (event) {
  const parentNode = event.target.closest(".section-card");
  if (!parentNode) return;
  const tagName = parentNode.querySelector(".tagName").innerText;
  const Developer = parentNode.querySelector(".Developer").innerText;
  const deleteBtn = parentNode.querySelector(".delete-btn").innerText;
  const Remote = parentNode.querySelector(".Remote")?.innerText || "";
  const Build = parentNode.querySelector(".Build")?.innerText || "";
  const cardInfo = { 
    tagName, 
    Developer, 
    deleteBtn, 
    Remote, 
    Build };
  if (event.target.classList.contains("Interview-btn2")) {
    RejectedList = RejectedList.filter((item) => item.tagName !== tagName);
    if (!InterviewList.find((item) => item.tagName === tagName)) {
      InterviewList.push(cardInfo);
    }
  } else if (event.target.classList.contains("Rejected-btn2")) {
    InterviewList = InterviewList.filter((item) => item.tagName !== tagName);

    if (!RejectedList.find((item) => item.tagName === tagName)) {
      RejectedList.push(cardInfo);
    }
  }
  claculetCount();
  renderInterviewList();
  renderRejectedList();
});

function renderInterviewList() {
  filterSection.innerText = "";
  for (let Interview of InterviewList) {
    let div = document.createElement("div");
    div.className = "section-card w-[100%] mx-auto p-8  bg-white";
    div.innerHTML = `
         <div class="flex justify-between">
          <div class="">
            <h2 class="tagName">${Interview.tagName}</h2>
            <p class="Developer">${Interview.Developer}</p>
          </div>
          <button id="" class="delete-btn btn btn-square bg-white">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>

        <br />
        <p class="Remote mb-2">${Interview.Remote}</p>
        
        <p class="Not-Applied btn btn-soft btn-primary text-black mb-2">Not Applied</p>
         
        <p class="Build">${Interview.Build}</p>
       
        <br />
        <div class="flex gap-3">
        <button
          id=""
          class="Interview-btn2 btn btn-bg-white text-green-500 border-green-500"
        >
          Interview
        </button>
        <button
          id=""
          class="Rejected-btn2 btn btn-bg-white text-red-500 border-red-500"
        >
          Rejected
        </button>
        </div>
        `;
    filterSection.appendChild(div);
  }
}
function renderRejectedList() {
  filterSection.innerText = "";
  for (let Rejecteds of RejectedList) {
    let div = document.createElement("div");
    div.className = "section-card w-[100%] mx-auto p-8  bg-white";
    div.innerHTML = `
         <div class="flex justify-between">
          <div class="">
            <h2 class="tagName">${Rejecteds.tagName}</h2>
            <p class="Developer">${Rejecteds.Developer}</p>
          </div>
          <button id="" class="delete-btn btn btn-square bg-white">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>

        <br />
        <p class="Remote mb-2">${Rejecteds.Remote}</p>
        
        <p class="Not-Applied btn btn-soft btn-primary text-black mb-2">Not Applied</p>
         
        <p class="Build">
          ${Rejecteds.Build}
        </p>
        <br />
        <div class="flex gap-3">
        <button
          id=""
          class="Interview-btn2 btn btn-bg-white text-green-500 border-green-500"
        >
          Interview
        </button>
        <button
          id=""
          class="Rejected-btn2 btn btn-bg-white text-red-500 border-red-500"
        >
          Rejected
        </button>
        </div>
        `;
    filterSection.appendChild(div);
  }
}

InterviewBtn2.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    NotApplied[index].innerText = btn.innerText;
    NotApplied[index].classList =
      "btn bg-white border text-green-500 border-green-500";
  });
});
Rejected.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    NotApplied[index].innerText = btn.innerText;
    NotApplied[index].className =
      "btn bg-white border text-red-500 border-red-500";
  });
});

const deleteButton = document.querySelectorAll(".delete-btn");
deleteButton.forEach(function (button) {
  button.addEventListener("click", function () {
    const section = button.closest(".section-card");
    section.remove();
    const totalNumber = document.getElementById("total-number");
    const totalJobs = document.getElementById("total-jobs");
    let totalValue = Number(totalNumber.innerText);
    let jobsValue = Number(totalJobs.innerText);
    if (totalValue > 0) { 
      totalValue--;
      jobsValue--;
      totalNumber.innerText = totalValue;
      totalJobs.innerText = jobsValue;
    }
  });
});

