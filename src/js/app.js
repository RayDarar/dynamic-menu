const Classes = {
  PAGE: "content__page",
  PAGE_ACTIVE: "content__page_active",
  PAGE_WRAPPED: "content__page_wrapped",
};

const pages = {
  all: document.querySelectorAll("." + Classes.PAGE),
  current: document.querySelector("." + Classes.PAGE_ACTIVE),
};

// setting click event for wrapping
for (const page of pages.all) {
  page.addEventListener("click", () => page.classList.toggle(Classes.PAGE_WRAPPED));
}
