import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-display-input',
  imports: [],
  templateUrl: './display-input.component.html',
  styleUrl: './display-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayInputComponent {
readonly data =input.required<{name:string ; tels:string[]}>();
  readonly labelNumber = input.required<number>();
  protected readonly numberOfTels = computed(()=> this.data().tels.length)

  sumOfTels(): number {
    return this.data().tels.reduce((sum, tel) => sum + (Number(tel) || 0), 0);
  }
}
