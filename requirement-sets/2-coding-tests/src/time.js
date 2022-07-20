class Time {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  normalize() {
    const extraMin = Math.floor(this.seconds / 60);
    this.seconds = this.seconds % 60;
    this.minutes += extraMin;

    const extraHour = Math.floor(this.minutes / 60);
    this.minutes = this.minutes % 60;
    this.hours += extraHour;

    this.hours = this.hours % 24;
  }

  scale(seconds) {
    this.seconds += seconds;

    this.normalize();
  }

  align(num) {
    return num.toString().padStart(2, "0");
  }

  timeString() {
    this.normalize();
    const hours = this.align(this.hours);
    const minutes = this.align(this.minutes);
    const seconds = this.align(this.seconds);

    return `${hours}:${minutes}:${seconds}`;
  }
}

// const t = new Time(1, 30, 20);
// console.log(t.timeString());
// t.scale(400);
// console.log(t.timeString());

// const time = new Time(1, 100, 0);
// console.log(time.timeString());
