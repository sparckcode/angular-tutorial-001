import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    Hello {{ city }}, year: {{ 2023 + 1}}
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
})
export class AppComponent {
  public city: string = 'Teotihuacán';
}
