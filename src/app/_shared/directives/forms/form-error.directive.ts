import { AbstractControl, AbstractControlDirective } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { Params } from '@angular/router';

@Component({
    selector: 'app-form-error-handling',
    template: `
    <div *ngIf='shouldShowErrors()'>
      <small class="text-danger form-text" *ngFor='let error of listOfErrors()'>{{error}}</small>
    </div>
  `
})
export class FormErrorComponent {

    private static patterns: Params = {
        '^[a-zA-Z0-9ë]+$': 'alpha-numeric',
        '^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$': 'email',
        '^[^{}|/\\\\\\\\()<>\:\[\;]+$': 'forbidden-characters',
        '^[0-9]+$': 'numeric',
        '^[0-9A-Fa-f]{8}[-][0-9A-Fa-f]{4}[-][0-9A-Fa-f]{4}[-][0-9A-Fa-f]{4}[-][0-9A-Fa-f]{12}$': 'guid',
        '^[0-9]{8}$': 'number',
        '^(?:[0-9]|[12][0-9]|3[01])$': 'day'
    };

    private errorMessages: Params = {
        ngbDate: () => 'Invalid date',
        required: () => 'This field is required',
        pattern: (params) => this.getPatternMessage(params.requiredPattern),
        numeric: () => 'Invalid number',
        email: () => 'Invalid email',
        day: () => 'Invalid day'
    };
    private patternErrorMessages: Params = {
        'alpha-numeric': 'This field must be alpha numeric',
        numeric: 'Invalid number',
        email: 'Invalid email',
        number: 'Invalid number',
        day: 'Invalid day'
    };

    @Input()
    private control: AbstractControlDirective | AbstractControl;

    constructor(
    ) { }


    private getPatternMessage(pattern: string): string {
        const patternMessage: string = this.patternErrorMessages[FormErrorComponent.patterns[pattern]];

        return patternMessage;
    }

    shouldShowErrors(): boolean {
        return this.control &&
            this.control.errors &&
            (this.control.dirty || this.control.touched);
    }

    listOfErrors(): string[] {
        return Object.keys(this.control.errors)
            .map(field => this.getMessage(field, this.control.errors[field]));
    }

    private getMessage(type: string, params: string): string {
        return this.errorMessages[type](params);
    }
}
