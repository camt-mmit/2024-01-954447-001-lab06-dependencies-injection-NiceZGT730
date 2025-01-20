import { ChangeDetectionStrategy, Component, computed, effect, input, linkedSignal, output } from '@angular/core';

@Component({
  selector: 'app-dynamic-tels',
  imports: [],
  templateUrl: './dynamic-tels.component.html',
  styleUrl: './dynamic-tels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTelsComponent {
  readonly data = input.required<{name: string; tels: string[]}>();
  readonly labelNumber = input.required<number>();

  readonly dataChange = output<{name: string; tels: string[]}>();

  protected name = linkedSignal(()=> this.data().name);

  protected tels = linkedSignal(()=>
    (this.data().tels.length===0?['']:this.data().tels).map((value)=>({value})),
  );

  protected numberOfTels = computed(()=> this.tels().length);

  constructor(){
    effect(()=>console.debug('date',this.data()));

    effect(()=> this.dataChange.emit({
      name: this.name(),
      tels: this.tels().map((tels)=>tels.value),
    }),
  );
  }

  protected addTel(): void {
    this.tels.update((tels)=>{
      tels.push({value:''});
      return [...tels];
    });
    console.debug(this.tels())
  }

  protected deleteTel(index: number): void{
    this.tels.update((tels)=>{
      tels.splice(index,1);

      return [...tels];
    });
  }

  protected changeName(value: string): void{
    this.name.set(value);
  }

  protected changeTelValue(index:number,value: string): void{
    this.tels.update((tels)=>{
      tels[index].value=value;

      return [...tels];
    });
  }
}
