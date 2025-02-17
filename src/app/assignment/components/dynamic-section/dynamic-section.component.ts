import { Component, ChangeDetectionStrategy, input, output, linkedSignal, effect } from '@angular/core';
import { DynamicInputComponent } from "../dynamic-input/dynamic-input.component";

@Component({
  selector: 'app-dynamic-section',
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DynamicInputComponent]
})
export class DynamicSectionComponent {
   readonly data = input.required<{name: string; tels: string[]}[]>();

    readonly dataChange = output<{name: string; tels: string[]}[]>();

    protected items = linkedSignal(() => (this.data().length===0) ? [{name:'',tels:[]}] : this.data(),);

    protected addItem(): void{
      this.items().push({name:'',tels:[]});
    }
    constructor() {
      effect(()=> this.dataChange.emit(this.items()));
    }

    protected deleteItem(index:number): void{
      this.items.update((items)=>{
        items.splice(index,1);
        return [...items];
      });
    }
    protected chagneItem(index:number,value:{name:string; tels: string[]}): void {
      this.items.update((items)=>{
        items[index].name = value.name;
        items[index].tels = value.tels;

        return[...items];
      })
    }
}
