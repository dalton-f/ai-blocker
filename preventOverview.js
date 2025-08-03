const patterns = [/ai overview/i];

const observer = new MutationObserver(() => {
  // Handles Google
  const hiddenAiLabel = [...document.querySelectorAll("h1, h2")].find((e) =>
    patterns.some((pattern) => pattern.test(e.innerText))
  );

  if (hiddenAiLabel) hiddenAiLabel.parentNode.style.display = "none";

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
