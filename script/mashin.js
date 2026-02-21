function showbutton(Id) {
  const MobileFirst = document.getElementById("MobileFirstCorp");
  const Mobile = document.getElementById("MobileFirst");
  const Mobile2 = document.getElementById("Mobile");
  // console.log(`add- ${MobileFirst}, cass- ${MobileFirst}`);
//   MobileFirstCorp.classList.add("hidden");
  MobileFirst.classList.add("hidden");
  Mobile.classList.add("hidden");
  Mobile2.classList.add("hidden");
  const selicked = document.getElementById(Id);
  selicked.classList.remove("hidden");
  
}
