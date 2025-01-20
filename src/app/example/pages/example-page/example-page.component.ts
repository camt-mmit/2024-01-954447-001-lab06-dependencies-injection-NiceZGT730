import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-example-page',
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './example-page.component.html',
  styleUrl: './example-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplePageComponent {

}
