

class App {
  constructor() {
    this.tick = () => {
      this.updateDate()
      this.renderPointers()
    }
    this.interval = setInterval(this.tick , 50)
  }

  updateDate() {
    const date = new Date();
    this.h = date.getHours();
    this.m = date.getMinutes();
    this.s = date.getSeconds();
  }

  renderSecondsPointer() {
    const pointer = document.querySelector('.pointer.second');
    const deg = this.s / 60 * 360;
    pointer.style.transform = `rotate(${deg}deg)`;
  }
  renderMinutesPointer() {
    const pointer = document.querySelector('.pointer.minute');
    const deg = this.m / 60 * 360;
    pointer.style.transform = `rotate(${deg}deg)`;
  }
  renderHoursPointer() {
    const pointer = document.querySelector('.pointer.hour');
    const deg = ((this.h / 12) * 360) + (this.m / 10);
    pointer.style.transform = `rotate(${deg}deg)`;
  }
  renderPointers() {
    this.renderSecondsPointer();
    this.renderMinutesPointer();
    this.renderHoursPointer();
  }
}

const app = new App;
