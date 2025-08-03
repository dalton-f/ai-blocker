const observer = new MutationObserver(() => {
  const aiOverview = document.getElementById("llm-snippet");
  const aiSideOverview = document.getElementById("llm-side-snippet");

  if (aiOverview) aiOverview.style.display = "none";

  if (aiSideOverview) aiSideOverview.style.display = "none";
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
