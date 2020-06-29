const Classes = {
  PAGE: "content__page",
  PAGE_ACTIVE: "content__page_active",
  PAGE_WRAPPED: "content__page_wrapped",
  BURGER: "burger",
  BURGER_ACTIVE: "burger_active",
};

const pages = {
  all: document.querySelectorAll("." + Classes.PAGE),
  current: document.querySelector("." + Classes.PAGE_ACTIVE),
};
const burger = document.querySelector("." + Classes.BURGER);

function toggleWrap() {
  // toggling burger state
  burger.classList.toggle(Classes.BURGER_ACTIVE);

  // toggling current page state
  pages.current.classList.toggle(Classes.PAGE_WRAPPED);

  // if wrapped, add listener to unwrap him
  if (pages.current.classList.contains(Classes.PAGE_WRAPPED)) {
    pages.current.addEventListener("click", toggleWrap);
  } else pages.current.removeEventListener("click", toggleWrap);
}

burger.onclick = toggleWrap;
