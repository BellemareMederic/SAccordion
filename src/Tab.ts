export class Tab {
  button: HTMLElement;
  body: HTMLElement;
  state: boolean = false;

  constructor(element: HTMLElement) {
    this.body = element;
    this.body.style.height = "0px";
    this.button = this.createTrigger();
  }

  createTrigger = (): HTMLElement => {
    let button = document.createElement("button");
    button.innerHTML = this.body.dataset.title;
    button.classList.add("saccordion__button");
    this.body.removeAttribute("data-title");
    this.body.parentElement.insertBefore(button, this.body);
    return button;
  };

  toggle = () => {
    if (this.state) {
      this.close();
    } else {
      this.open();
    }
  };
  open = () => {
    this.state = true;
    this.button.classList.toggle("saccordion__button--active");
    this.body.style.height = `${this.body.scrollHeight}px`;
  };
  close = () => {
    this.state = false;
    this.button.classList.toggle("saccordion__button--active");
    this.body.style.height = "0px";
  };
}
