const blockedUrls = [
  "https://chat.openai.com/",
  "https://chatgpt.com/",
  "https://gemini.google.com/app",
  "https://www.midjourney.com/",
  "https://stability.ai/",
  "https://www.notion.com/",
  "https://www.anyword.com/",
  "https://openai.com/",
  "https://elevenlabs.io/",
  "https://www.anthropic.com/",
];

const redirectionUrl = "https://anti-ai.info/";

chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.tabs.get(details.tabId, (tab) => {
    if (!tab || !tab.url) return;

    if (blockedUrls.includes(tab.url)) {
      chrome.tabs.update(details.tabId, { url: redirectionUrl });
    }
  });
});
