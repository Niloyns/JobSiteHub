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

  const openBtn = document.getElementById("button");
  const closeBtn = document.getElementById("closeTabs");
  const openedTabs = [];

  openBtn.addEventListener("click", () => {
    for (let i = 0; i < jobSites.length; i++) {
      const tab = window.open(jobSites[i].url, "_blank", "noopener,noreferrer");
      if (tab) openedTabs.push(tab);
      else alert("Please allow pop-ups to open multiple tabs.");
    }
  });

  closeBtn.addEventListener("click", () => {
    for (let i = 0; i < openedTabs.length; i++) {
      if (openedTabs[i] && !openedTabs[i].closed) {
        openedTabs[i].close();
      }
    }
  });
});
