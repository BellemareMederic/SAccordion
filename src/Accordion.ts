import { Tab } from "./Tab.js";

export class Accordion {
  maxTab: number;
  activeTab: Tab[] = [];

  constructor(element: HTMLElement, index: number, maxTab: number = 1) {
    this.maxTab = maxTab;

    for (const tab of element.querySelectorAll("div")) {
      let tabInstance = new Tab(tab);
      tabInstance.head.addEventListener("click", (_) =>
        this.tabTrigger(tabInstance)
      );
    }
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.closeAllTab();
      }
    });

    element.setAttribute("Accordion-ready", "");
    element.removeAttribute("data-accordion");
  }

  closeAllTab() {
    for (const tab of this.activeTab) {
      tab.close();
    }
    this.activeTab = [];
  }

  openTab(tab: Tab) {
    tab.open();
    this.activeTab.push(tab);
  }

  closeTab(tab: Tab) {
    let index = this.activeTab.indexOf(tab);
    this.activeTab.splice(index, 1);
    tab.close();
  }

  closeFirstTab() {
    let tab = this.activeTab.shift();
    tab.close();
  }

  tabTrigger(tab: Tab) {
    if (this.activeTab.length === 0) {
      //Si aucun est ouvert on en ouvre un
      this.openTab(tab);
    } else {
      // si un est deja ouvert on regarde si lui qu'on a cliquer est deja ouvert
      if (tab.state) {
        this.closeTab(tab);
      } else {
        if (this.activeTab.length >= this.maxTab) this.closeFirstTab();
        this.openTab(tab);
      }
    }
  }
}
