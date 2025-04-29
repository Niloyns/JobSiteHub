document.addEventListener("DOMContentLoaded", () => {
  const jobSites = [
    { name: "LinkedIn", url: "https://www.linkedin.com/login" },
    { name: "Naukri", url: "https://www.naukri.com/mnjuser/login" },
    { name: "Indeed", url: "https://secure.indeed.com/account/login" },
    {
      name: "Monster",
      url: "https://www.monsterindia.com/seeker/registration",
    },
  ];

  const launchBtn = document.getElementById("button");

  launchBtn.addEventListener("click", () => {
    jobSites.forEach((site) => {
      const newTab = window.open(site.url, "_blank");
      if (!newTab) {
        alert(
          "Please allow pop-ups in your browser for this site to work properly.(Remove Ad Blocker)"
        );
      }
    });
  });
});
