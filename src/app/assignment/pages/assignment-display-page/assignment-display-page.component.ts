import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DisplaySectionComponent } from "../../components/display-section/display-section.component";
import { AssignmentDataService } from '../../services/assignment-data.service';


@Component({
  selector: 'app-assignment-display-page',
  imports: [DisplaySectionComponent],
  templateUrl: './assignment-display-page.component.html',
  styleUrl: './assignment-display-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssignmentDisplayPageComponent {
   readonly storageData = inject(AssignmentDataService).get();
}
