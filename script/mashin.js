// const InterviewBtn = document.querySelectorAll(".InterviewBtn");
// const InterviewBtn2 = document.querySelectorAll(".Interview-btn2");
// const MobileFirstCorp = document.querySelectorAll(".MobileFirstCorp");
// const RejectedBtn = document.querySelectorAll(".Rejected-btn2");
// const NotApplied = document.querySelectorAll(".Not-Applied");
// const InterviewBtnP = document.getElementById("InterviewBtnP");
// const RejectedBtnP = document.getElementById("RejectedBtnP");
// const Number = document.getElementById("Number");

// InterviewBtn2.forEach(function (btn, index) {
//   btn.addEventListener("click", function () {
//     NotApplied[index].innerText = btn.innerText;
//     NotApplied[index].className =
//       "btn bg-white border text-green-500 border-green-500";
//   });
// });

// RejectedBtn.forEach(function (btn, index) {
//   btn.addEventListener("click", function () {
//     NotApplied[index].innerText = btn.innerText;
//     NotApplied[index].className =
//       "btn bg-white border text-red-500 border-red-500";
//   });
// });
// let count =0;
InterviewBtn2.forEach(function(btn) {
  btn.addEventListener("click", function() {
    count++;
    InterviewBtnP.innerText = count;
    totalNumber.innerText = count > 0 ? `${count} of` : "of";

  });
});
// let countRejected =0;
// RejectedBtn.forEach(function(btn) {
//   btn.addEventListener("click", function() {
//     countRejected++;
//     RejectedBtnP.innerText = countRejected;
//   });
// });
// const InterviewBtn2 = document.querySelectorAll(".Interview-btn2");
// const RejectedBtn = document.querySelectorAll(".Rejected-btn2");
// const NotApplied = document.querySelectorAll(".Not-Applied");
//  const MobileFirstCorp = document.querySelectorAll(".section-card");

// const InterviewBtnP = document.getElementById("InterviewBtnP");
// const RejectedBtnP = document.getElementById("RejectedBtnP");
// const totalNumber = document.getElementById("totalNumber");
// const InterviewBtn = document.getElementById("totalNumber");

// let countInterview = 0;
// let countRejected = 0;

// InterviewBtn2.forEach(function (btn, index) {
//   btn.addEventListener("click", function () {
//     const currentStatus = NotApplied[index].dataset.status || "none";
//     if (currentStatus !== "Interview") {
//       if (currentStatus === "Rejected") {
//         countRejected--;
//         RejectedBtnP.innerText = countRejected;
//       }
//       countInterview++;
//       InterviewBtnP.innerText = countInterview;
//       totalNumber.innerText =
//         countInterview > 0 ? `${countInterview} of` : "of";
//       NotApplied[index].innerText = "Interview";
//       NotApplied[index].className =
//         "btn bg-white border text-green-500 border-green-500";
//       NotApplied[index].dataset.status = "Interview";
//     }
//   });
// });

// RejectedBtn.forEach(function (btn, index) {
//   btn.addEventListener("click", function () {
//     const currentStatus = NotApplied[index].dataset.status || "none";
//     if (currentStatus !== "Rejected") {
//       if (currentStatus === "Interview") {
//         countInterview--;
//         InterviewBtnP.innerText = countInterview;
//       }
//       countRejected++;
//       RejectedBtnP.innerText = countRejected;
//       NotApplied[index].innerText = "Rejected";
//       NotApplied[index].className =
//         "btn bg-white border text-red-500 border-red-500";
//       NotApplied[index].dataset.status = "Rejected";
//     }
//   });
// });



