const deleteButton = document.querySelectorAll(".delete-btn");
deleteButton.forEach(function (button) {
  button.addEventListener("click", function () {
    const section = button.closest(".section-card");
    section.remove();
    const totalNumber = document.getElementById("total-number");
    const totalJobs = document.getElementById("total-jobs");
    let totalValue =Number(totalNumber.innerText);
    let jobsValue =Number(totalJobs.innerText);
    if(totalValue >0){
      totalValue--;
      jobsValue--;
      totalNumber.innerText =totalValue;
      totalJobs.innerText =totalValue;
    }
  });
});

