import { Accordion } from "./Accordion.js";

var accordionInstances: Accordion[] = [];
console.debug("Accordion is loaded");

let accordions = document.querySelectorAll(
  "[data-accordion]"
) as NodeListOf<HTMLElement>;

let indexToPreOpen: Array<number> = window.location.hash
  .split("#")[1]
  .split("-")
  .map((i) => Number(i));

accordions.forEach((accordion) => {
  accordionInstances.push(new Accordion(accordion, 2));
});

if (
  accordionInstances[indexToPreOpen[0]] &&
  accordionInstances[indexToPreOpen[0]].tabInstances[indexToPreOpen[1]]
)
  accordionInstances[indexToPreOpen[0]].openTab(
    accordionInstances[indexToPreOpen[0]].tabInstances[indexToPreOpen[1]]
  );

(<any>window).Accordion = accordionInstances;
