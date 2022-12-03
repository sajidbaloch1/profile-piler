import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";
import { DecimalPipe } from "@angular/common";

/**
 * Count to directive
 *
 * To add number increment effect
 */
@Directive({
  selector: "[appCounto]",
  providers: [DecimalPipe],
})
export class CountToDirective {
  /**
   * Count change event emitter
   */
  @Output() countoChange = new EventEmitter();
  /**
   * Count end event emitter
   */
  @Output() countoEnd = new EventEmitter();
  /**
   * Timer internval reference
   */
  private _timer: any;
  /**
   * Duration the counto should run
   */
  private _duration: number;
  /**
   * Count up to number
   */
  private _prevVal: number;
  /**
   * Start counting from
   */
  private _currVal: number;
  /**
   * Numbers to add on each iteration
   */
  private _step: number;

  /**
   * Setter for duration
   */
  @Input()
  set duration(duration: number) {
    this._duration = duration;
    this.run();
  }

  @Input() format = "1.0-0";

  /**
   * Setter for prevVal
   */
  @Input()
  set prevVal(val: number) {
    this._prevVal = val;
    this.run();
  }

  /**
   * Setter for current value
   */
  @Input()
  set currVal(val: number) {
    this._currVal = val;
    this.run();
  }

  /**
   * Step setter
   */
  @Input()
  set step(step: number) {
    this._step = step;
    this.run();
  }

  constructor(private el: ElementRef, private numberPipe: DecimalPipe) {
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  /**
   * Run the counter
   */
  run() {
    clearInterval(this._timer);

    if (isNaN(this._duration)) {
      return false;
    }

    if (isNaN(this._step)) {
      return false;
    }

    if (isNaN(this._currVal)) {
      return false;
    }

    if (isNaN(this._prevVal)) {
      return false;
    }

    if (this._step <= 0) {
      // console.info('Step must be greater than 0.');
      return false;
    }

    if (this._duration <= 0) {
      // console.info('Duration must be greater than 0.');
      return false;
    }

    if (this._step > this._duration * 1000) {
      // console.info('Step must be equal or smaller than duration.');
      return false;
    }

    let intermediate = this._prevVal;
    this._timer = setInterval(() => {
      if (this._currVal > this._prevVal) {
        const increment =
          Math.abs(this._currVal - this._prevVal) /
          ((this._duration * 1000) / this._step);
        if (intermediate >= this._currVal) {
          clearInterval(this._timer);
          this.countoChange.emit(this._currVal);
          this.setValue(this._currVal);
          // console.log(this._currVal);
          this.countoEnd.emit();
        } else {
          this.countoChange.emit(intermediate);
          this.setValue(intermediate);
          // console.log(intermediate);
          intermediate += increment;
        }
      } else {
        const decrement =
          Math.abs(this._prevVal - this._currVal) /
          ((this._duration * 1000) / this._step);
        if (intermediate <= this._currVal) {
          clearInterval(this._timer);
          this.countoChange.emit(this._currVal);
          this.setValue(this._currVal);
          // console.log(this._currVal);
          this.countoEnd.emit();
        } else {
          this.countoChange.emit(intermediate);
          this.setValue(intermediate);
          // console.log(intermediate);
          intermediate -= decrement;
        }
      }
    }, this._step);
  }

  private setValue(val) {
    this.el.nativeElement.innerHTML = this.numberPipe.transform(
      val,
      this.format
    );
  }
}
