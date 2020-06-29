const Classes = {
  PAGE: "content__page",
  PAGE_ACTIVE: "content__page_active",
  PAGE_WRAPPED: "content__page_wrapped",
  BURGER: "burger",
  BURGER_ACTIVE: "burger_active",
  HEADER: "header",
  HEADER_ACTIVE: "header_active",
  NAV_ITEM: "nav-item",
};

const pages = {
  all: document.querySelectorAll("." + Classes.PAGE),
  current: document.querySelector("." + Classes.PAGE_ACTIVE),
};
const burger = document.querySelector("." + Classes.BURGER);
const header = document.querySelector("." + Classes.HEADER);
const navItems = document.querySelectorAll("." + Classes.NAV_ITEM);

function toggleWrap() {
  // toggling states
  burger.classList.toggle(Classes.BURGER_ACTIVE);
  header.classList.toggle(Classes.HEADER_ACTIVE);
  pages.current.classList.toggle(Classes.PAGE_WRAPPED);

  // if wrapped, add listener to unwrap him
  if (pages.current.classList.contains(Classes.PAGE_WRAPPED)) {
    pages.current.addEventListener("click", toggleWrap);
  } else pages.current.removeEventListener("click", toggleWrap);
}

function selectPage(index) {
  const page = pages.all[index];
  
  toggleWrap();
  pages.current.classList.remove(Classes.PAGE_ACTIVE);
  page.classList.add(Classes.PAGE_ACTIVE);
  pages.current = page;
}

burger.onclick = toggleWrap;

for (const navItem of navItems) {
  navItem.onclick = () => {
    const index = parseInt(navItem.dataset.index);
    selectPage(index);
  };
}
