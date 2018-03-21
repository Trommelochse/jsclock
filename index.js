class App {
  constructor() {
    this.initialRender();
    this.interval = setInterval(this.tick.bind(this), 50);
  }

  initialRender() {
    const center = document.querySelector('.clock-center');
    for (let i=0;i<12;i++) {
      const area = document.createElement('div');
      area.classList.add('clock-dial-area');
      const deg = i * 30;
      area.style.transform = `rotate(${deg}deg)`;
      if (i%3 === 0) {
        area.appendChild(document.createElement('div'));
      }
      center.appendChild(area);
    }
  }

  tick() {
    this.updateDate();
    this.renderPointers();
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
