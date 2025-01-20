import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicTelsComponent } from '../../components/dynamic-tels/dynamic-tels.component';

@Component({
  selector: 'app-example-update-page',
  imports: [DynamicTelsComponent],
  templateUrl: './example-update-page.component.html',
  styleUrl: './example-update-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleUpdatePageComponent {
  protected onDatachange(data: {name:string;tels:string[]}):void{
    console.debug(data);
  }
}
