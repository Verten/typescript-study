interface ClockInterface{
  currentTime: Date
  setTime(d: Date): void
}

class clock implements ClockInterface{
  currentTime: Date
  constructor(h: number, m: number){}
  setTime(d: Date){
    this.currentTime = d
  }
}