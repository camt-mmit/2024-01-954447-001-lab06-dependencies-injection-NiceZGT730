import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DynamicSectionComponent } from "../../components/dynamic-section/dynamic-section.component";
import { AssignmentDataService } from '../../services/assignment-data.service';

@Component({
  selector: 'app-assignment-update-page',
  imports: [DynamicSectionComponent],
  templateUrl: './assignment-update-page.component.html',
  styleUrl: './assignment-update-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssignmentUpdatePageComponent {
protected readonly service = inject(AssignmentDataService);
  protected readonly data = this.service.get() ??[];
  protected onDatachange(data: {name:string;tels:string[]}[]):void{
    console.debug(data);
}
}
