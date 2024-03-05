import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    }
  ];

  emitirIndex( index: number ):void {
    this.onDeleteCharacter.emit(index);
  }

}
