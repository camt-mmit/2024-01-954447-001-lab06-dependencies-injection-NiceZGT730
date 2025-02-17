import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-assignment-page',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './assignment-page.component.html',
  styleUrl: './assignment-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentPageComponent {}
