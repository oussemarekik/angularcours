import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appInscriptionDD]',
  standalone: true
})
export class InscriptionDDDirective {

  constructor() { }
  @HostBinding('class.link-is-disabled') status!: boolean;
  @Input()
  set appInscriptionDD(value : boolean) {

    this.status = value;
  }
}
