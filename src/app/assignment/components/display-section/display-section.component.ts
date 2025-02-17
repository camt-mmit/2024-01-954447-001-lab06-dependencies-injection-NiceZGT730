import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DisplayInputComponent } from "../display-input/display-input.component";

@Component({
  selector: 'app-display-section',
  imports: [DisplayInputComponent],
  templateUrl: './display-section.component.html',
  styleUrl: './display-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplaySectionComponent {
readonly data = input.required<{name:string ; tels:string[]}[]>();
}

