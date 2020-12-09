import { Accordion } from "./Accordion.js";

var accordionInstance: Accordion[] = [];
console.debug("Accordion is loaded");

let accordions = document.querySelectorAll(
  "[data-accordion]"
) as NodeListOf<HTMLElement>;

accordions.forEach((accordion, index) => {
  accordionInstance.push(new Accordion(accordion, index, 2));
});

(<any>window).Accordion = accordionInstance;
