import { Component, Input } from '@angular/core'

@Component({
    selector: 'spinner',
    template: `
        <div *ngIf="visible">
            <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
    `
})
export class SpinnerComponent{
    @Input() visible:boolean
}