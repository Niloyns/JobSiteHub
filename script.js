document.addEventListener("DOMContentLoaded", () => {
  const jobSites = [
    { name: "LinkedIn India", url: "https://in.linkedin.com/" },
    { name: "Naukri", url: "https://www.naukri.com/" },
    { name: "Indeed India", url: "https://www.indeed.co.in/" },
    { name: "Monster India", url: "https://www.monsterindia.com/" },
    { name: "Shine", url: "https://www.shine.com/" },
    { name: "Glassdoor India", url: "https://www.glassdoor.co.in/index.htm" },
    { name: "TimesJobs", url: "https://www.timesjobs.com/" },
    { name: "Freshersworld", url: "https://www.freshersworld.com/" },
    { name: "Internshala", url: "https://internshala.com/" },
    { name: "Hirist", url: "https://www.hirist.com/" },
    { name: "CutShort", url: "https://cutshort.io/" },
    { name: "UpWork India", url: "https://www.upwork.com/" },
    { name: "AngelList Talent India", url: "https://angel.co/" },
    { name: "Jobhai", url: "https://www.jobhai.com/" },
    { name: "JobStreet India", url: "https://www.jobstreet.co.in/" },
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
