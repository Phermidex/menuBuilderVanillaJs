function BuiltOctoMenu(menuData) {
  const menuContainer = "originmenu";
  const menuContainerSh4 = document.body.dataset.shf;
  const menuContainerBuild = document.querySelector(`.${menuContainer}`);
  const OriginalContainerBuild = document.querySelector(`.${menuContainerSh4}`);

  const menuBuild = [];
  let menuReadStream;

  //menuContainerBuild.classList.remove("hidden");
  //OriginalContainerBuild.classList.add("hidden");
  menuReadStream = menuData;

  const maninMenu = document.createElement("ul");

  menuData.forEach((link, index) => {
    const newSubMenu = document.createElement("ul");

    const lnkMain = document.createElement("li");
    const aHref = document.createElement("a");

    aHref.text = link["categoryName"];
    aHref.href = link["categoryUrl"];

    lnkMain.append(aHref);

    if (Array.isArray(link["subCategories"])) {
      link["subCategories"].forEach((sublink, subindex) => {
        lnkMain.className = "dropdown";
        const newSub1Menu = document.createElement("ul");
        const lnksubMain = document.createElement("li");
        const asubHref = document.createElement("a");

        asubHref.text = sublink["categoryName"];
        asubHref.href = sublink["categoryUrl"];

        lnksubMain.append(asubHref);

        if (Array.isArray(sublink["subCategories"])) {
          lnksubMain.className = "dropdown-sub1";
          newSubMenu.className = "dropdown-menu sub";

          sublink["subCategories"].forEach((sub1link, sub1index) => {
            const newSub2Menu = document.createElement("ul");

            const lnksub1Main = document.createElement("li");
            const asub1Href = document.createElement("a");

            asub1Href.text = sub1link["categoryName"];
            asub1Href.href = sub1link["categoryUrl"];

            lnksub1Main.append(asub1Href);

            if (Array.isArray(sub1link["subCategories"])) {
              lnksub1Main.className = "dropdown-sub2";
              newSub1Menu.className = "dropdown-menu sub-cat one";
              newSub2Menu.className = "dropdown-menu sub-cat two";

              if (sublink["subCategories"].length <= 0) {
                newSub3Menu.className = "no-Menu";
              }

              sub1link["subCategories"].forEach((sub2link, sub2index) => {
                const newSub3Menu = document.createElement("ul");

                const lnksub2Main = document.createElement("li");
                const asub2Href = document.createElement("a");

                asub2Href.text = sub2link["categoryName"];
                asub2Href.href = sub2link["categoryUrl"];

                lnksub2Main.append(asub2Href);
                newSub2Menu.append(lnksub2Main);

                if (Array.isArray(sub1link["subCategories"])) {
                  newSub3Menu.className = "dropdown-menu sub-cat three";

                  if (sub1link["subCategories"].length <= 0) {
                    newSub3Menu.className = "no-Menu";
                  }

                  sub1link["subCategories"].forEach((sub2link, sub2index) => {
                    const lnksub3Main = document.createElement("li");
                    const asub3Href = document.createElement("a");

                    asub3Href.text = sub2link["categoryName"];
                    asub3Href.href = sub2link["categoryUrl"];

                    lnksub3Main.append(asub3Href);
                    newSub3Menu.append(lnksub3Main);
                  });
                }
              });
            } else {
              newSub2Menu.className = "no-Menu";
            }

            lnksub1Main.append(newSub2Menu);
            newSub1Menu.append(lnksub1Main);
          });
        } else {
          newSubMenu.className = "no-Menu";
        }

        lnksubMain.append(newSub1Menu);
        newSubMenu.append(lnksubMain);
      });
    }

    lnkMain.append(newSubMenu);
    menuContainerBuild.append(lnkMain);
  });
}

function getallItems(categoryIndexShift4shop) {
  //menu
  const menu = [];
  //sublevel1
  let currentDad = null;
  let currentDadIndex = null;

  //sublevel2
  let currentDad2 = null;
  let currentDad2Index = null;

  //sublevel3
  let currentDad3 = null;
  let currentDad3Index = null;

  //sublevel4
  let currentDad4 = null;
  let currentDad4Index = null;

  [...categoryIndexShift4shop].map((item, index) => {
    if (item.classList.toString().includes("level1")) {
      const linkView = item.querySelector("a");

      const mainItem = {
        categoryName: linkView.text,
        categoryUrl: linkView.href,
        subCategories: [],
      };

      currentDad = mainItem;
      currentDadIndex = index;
    }

    if (item.classList.toString().includes("level2") && currentDad != null) {
      const newData = currentDad != null ? currentDad : [];

      const linkView = item.querySelector("a");

      const mainItem = {
        categoryName: linkView.text,
        categoryUrl: linkView.href,
        subCategories: [],
      };

      newData.subCategories.push(mainItem);

      currentDad2 = mainItem;
      currentDad2Index = index;
    }

    if (item.classList.toString().includes("level3") && currentDad2 != null) {
      const newData = currentDad2 != null ? currentDad2 : [];

      const linkView = item.querySelector("a");

      const mainItem = {
        categoryName: linkView.text,
        categoryUrl: linkView.href,
        subCategories: [],
      };

      newData.subCategories.push(mainItem);

      currentDad3 = mainItem;
      currentDad3Index = index;
    }

    if (item.classList.toString().includes("level4") && currentDad3 != null) {
      const newData = currentDad3 != null ? currentDad3 : [];

      const linkView = item.querySelector("a");

      const mainItem = {
        categoryName: linkView.text,
        categoryUrl: linkView.href,
        subCategories: [],
      };

      newData.subCategories.push(mainItem);

      currentDad4 = mainItem;
      currentDad4Index = index;
    }

    if (item.classList.toString().includes("level5") && currentDad4 != null) {
      const newData = currentDad4 != null ? currentDad4 : [];

      const linkView = item.querySelector("a");

      const mainItem = {
        categoryName: linkView.text,
        categoryUrl: linkView.href,
        subCategories: [],
      };

      newData.subCategories.push(mainItem);
    }

    if (currentDad != null) {
      menu.push(currentDad);
    }
  });

  return [...new Set(menu)];
}
