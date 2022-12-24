const menuContentDiv = document.querySelector(".section-center");
const categoriesButtonDiv = document.querySelector(".btn-container");

const categoriesButtonList = menu.reduce(
  (acc, i) => {
    if (!acc.includes(i.category)) acc.push(i.category);
    return acc;
  },
  ["All"]
);

const loadCategoriesButton = () => {
  categoriesButtonDiv.innerHTML = categoriesButtonList
    .map((category) => {
      let active = "";
      if (category == "All") active = "active";
      return `<button onclick ="categoryClick(this)" class="btn btn-outline btn-item ${active}" data-name=${category}>${category}</button>`;
    })
    .join("");
};

const categoryClick = (th) => {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  th.classList.add("active");

  const clickMenu =
    th.dataset.name != "All"
      ? menu.filter((each) => {
          if (each.category === th.dataset.name) return each;
        })
      : menu;
  loadMenuContent(clickMenu);
};

const loadMenuContent = (menuContent) => {
  menuContentDiv.innerHTML = menuContent
    .map((each) => {
      return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${each.img}
              alt=${each.title}
              class="photo img-fluid img-thumbnail d-block w-100"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${each.title}</h4>
                <h4 class="price">${each.price} $</h4>
              </div>
              <div class="menu-text">
                ${each.desc}
              </div>
            </div>
          </div>
    `;
    })
    .join("");
};

loadMenuContent(menu);
loadCategoriesButton();
