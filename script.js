
function createTicket() {
  // Get values from inputs
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let github = document.getElementById("github").value;
  let avatarFile = document.getElementById("avatar").files[0];

  // Save to localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("github", github);

  // Show ticket
  document.getElementById("form").style.display = "none";
  document.getElementById("ticket").style.display = "block";

  // Put text on ticket
  document.getElementById("ticketName").innerText = name;
  document.getElementById("ticketEmail").innerText = email;
  document.getElementById("ticketGit").innerText = github;

  // Show image if selected
  if (avatarFile) {
    let reader = new FileReader();
    reader.onload = function(pic) {
      document.getElementById("ticketAvatar").src = pic.target.result;
      localStorage.setItem("avatar", pic.target.result);
    };
    reader.readAsDataURL(avatarFile);
  } else {
    let savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) {
      document.getElementById("ticketAvatar").src = savedAvatar;
    }
  }
}
