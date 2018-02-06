import { Component, 
            Input, 
            OnChanges,
            Output,
            EventEmitter } from '@angular/core'

@Component({
    selector: 'pagination',
    template:`
            <div *ngIf="itemLength > pageSize">
                    <nav aria-label="Page navigation">
                        <ul class="pagination">
                            <li (click)="onPrevious()" class="page-item" [ngClass]="{
                                                            disabled: _currentPageNumber==1
                                                        }">
                                <a aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li *ngFor="let pageNo of _pages, let i=index" 
                                    [ngClass]="{ active: (_currentPageNumber-1)==i }" 
                                    (click)="selectPage(pageNo)" >
                                    
                                    <a>{{pageNo}}</a>
                            </li>
                            <li (click)="onNext()" class="page-item" [ngClass]="{
                                                            disabled: _currentPageNumber==_endPage
                                                        }">
                                <a aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
    `,
    styles:[`
        li	{	cursor:	pointer;	}
    `]
})
export class PaginationComponent implements OnChanges{
    @Input() itemLength:number;
    @Input() pageSize:number = 10;
    @Output() onPageChanged= new EventEmitter();

    private _currentPageNumber:number=1;
    private _pages:number[]=[];
    private _startPage:number=1;
    private _endPage:number;

    constructor(){

    }

    ngOnChanges(){
        console.log(this.itemLength)
        console.log(this.pageSize)
        this.calculatePageSize();
    }

    private calculatePageSize(){

        let remainder:number;
        let pageSize:number;
        if(this.itemLength > 0){
            let itemLength=this.itemLength;
            pageSize= Math.floor(itemLength/this.pageSize);
            remainder=itemLength%this.pageSize;

            if(remainder > 0){
                ++pageSize;
            }
        }
        this.createPageSizeCollection(pageSize);
        this.setCurrentPageNumber(this._currentPageNumber);
        this.callbackParentControl();
    }

    private createPageSizeCollection(pageSize:number){
        this._pages=[]
        for(var i=1; i <= pageSize; i++){
            this._pages.push(i);
        }
        this._endPage=pageSize;
    }

    private setCurrentPageNumber(currentPageNumber:number){
        this._currentPageNumber=currentPageNumber;
    }

    private callbackParentControl(){
        this.onPageChanged.emit(this._currentPageNumber)
    }

    private selectPage(pageNo: number){
        this.setCurrentPageNumber(pageNo)
        this.onPageChanged.emit(this._currentPageNumber);
    }

    private onNext(){
        if(this._currentPageNumber ==this._endPage){
            return;
        }
        this.selectPage(this._currentPageNumber + 1);
    }
    private onPrevious(){
        if(this._currentPageNumber == 1){
            return;
        }
        this.selectPage(this._currentPageNumber - 1)
    }
}