import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter implements OnInit {
  count: number = 0;
  minLimit: number = -5;   // New: Minimum allowed value for the counter
  maxLimit: number = 5;  // New: Maximum allowed value for the counter
  step: number = 1;

  // ngOnInit is a lifecycle hook that runs after the component is initialized
  ngOnInit(): void {
    // You could potentially load initial values from a service here,
    // but for now, we'll just use the default values.
  }

  increment(): void {
    if (this.count + this.step <= this.maxLimit) {
      this.count += this.step;
    }else {
      this.count = this.maxLimit;
      console.log('Cannot increment beyond maximum limit!');
    }
    //this.count++;
  }

  decrement(): void {
    if (this.count - this.step >= this.minLimit) {
      this.count -= this.step;
    } else {
      this.count = this.minLimit;
      console.log('Cannot decrement below minimum limit!');
    }
    //this.count--;
  }

  reset(): void {
    this.count = 0;
  }

    // New: Method to handle changes in the step input
  onStepChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newStep = parseInt(inputElement.value, 10);// Convert string to number

    if (!isNaN(newStep) && newStep > 0) {
      this.step = newStep;
    } else {
      // If invalid, reset to a default or show an error
      this.step = 1;
      console.warn('Invalid step value. Resetting to 1.');
      // You might want to add visual feedback to the user here
    }
  }

}
