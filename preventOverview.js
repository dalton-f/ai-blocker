let hiddenAiLabel = null;

const observer = new MutationObserver(() => {
  // Handles Google
  const headings = document.querySelectorAll("h1, h2");

  // Search for the hidden AI label to find the correct container to hide
  for (const heading of headings) {
    if (heading.innerText === "AI overview") hiddenAiLabel = heading;
  }

  if (hiddenAiLabel) hiddenAiLabel.parentNode.style.display = "none";

  // Hides sponsored sites if an ad-blocker doesn't already
  const sponsoredSites = document.getElementById("tads");

  if (sponsoredSites) sponsoredSites.style.display = "none";

  // Handles Brave Browser
  const aiOverview = document.getElementById("llm-snippet");
  const aiSideOverview = document.getElementById("llm-side-snippet");

  if (aiOverview) aiOverview.style.display = "none";

  if (aiSideOverview) aiSideOverview.style.display = "none";
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
