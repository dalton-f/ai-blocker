let hiddenAiLabel = null;
let aiModeTab = null;

const observer = new MutationObserver(() => {
  // Handles Google LLM snippets
  const headings = document.querySelectorAll("h1, h2");

  // Search for the hidden AI label to find the correct container to hide
  for (const heading of headings) {
    if (heading.innerText === "AI overview") hiddenAiLabel = heading;
  }

  if (hiddenAiLabel) {
    // Find the upper level div which acts as the parent container and hide that
    // This ensures the padding on the page is unaffected
    const container = hiddenAiLabel.parentNode.parentNode.parentNode;
    container.style.display = "none";
  }

  // Handles Brave Browser LLM snippets
  const aiOverview = document.getElementById("llm-snippet");
  const aiSideOverview = document.getElementById("llm-side-snippet");

  if (aiOverview) aiOverview.style.display = "none";

  if (aiSideOverview) aiSideOverview.style.display = "none";

  // Hides sponsored sites if an ad-blocker doesn't already
  const sponsoredSites = document.getElementById("tads");

  if (sponsoredSites) sponsoredSites.style.display = "none";

  // Hide AI mode tab from the browser
  const spans = document.querySelectorAll("span");

  for (const span of spans) {
    if (span.innerText === "AI Mode") aiModeTab = span;
  }

  if (aiModeTab) {
    // Find the parent anchor tag
    const anchor = aiModeTab.closest("a");
    anchor.style.display = "none";
  }

  // Hide "People also ask" section
  let peopleAlsoAskQuestions = document.querySelector("[data-initq]");

  if (peopleAlsoAskQuestions) peopleAlsoAskQuestions.style.display = "none";
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
