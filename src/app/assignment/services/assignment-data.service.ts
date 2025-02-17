import { Injectable } from '@angular/core';

const keyName = 'assignment-data';

@Injectable({
  providedIn: 'root'
})
export class AssignmentDataService {

  get(): {name: string; tels: string[]}[] {
    const jsonText = localStorage.getItem(keyName);

    return JSON.parse(jsonText ?? 'null');
    }

  set(value: {name: string; tels: string[]}[]) :void{
    const jsonText = JSON.stringify(value);

    localStorage.setItem(keyName,jsonText);
  }
}
