import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ox-select',
  templateUrl: './ox-select.component.html',
  styleUrls: ['./ox-select.component.scss']
})
export class OxSelectComponent implements OnInit, OnChanges {

  @Input() actionSelect: boolean = false;
  @Input() multySelect: boolean = false;
  @Input() filterSelect: boolean = false;

  @Input() invalidData: boolean = false;
  
  @Input() styleSelect: any = {};

  @Input() inputData: any[] = [];
  @Input() defaultData: string = '- нет данных -';

  @Output() outputData = new EventEmitter();
  @Output() outputFilter = new EventEmitter();

  private searchingData: any[] = [];
  private selectedData: any[] = [];
  private selectedShow: any[] = [];

  private isSelect: any[] = [];

  private init: boolean = false;
  private listTrigger: boolean = false;

  private openList(): void {
      if(this.filterSelect) {
          this.searchingData = [];
      }
      this.listTrigger = !this.listTrigger;
  }

  private sendData(data): void {
      if(!data.disabled) {

          if(this.multySelect) {
              const exists = this.isSelect.findIndex((selected: any) => selected.input === data.input);
              
              if(exists == -1) {
                  this.isSelect.push(data);
                  this.selectedData.push(data.output);
                  this.selectedShow.push({title:data.input, icon:data.icon || 'fa fa-check-circle'});
                  const ind = this.inputData.findIndex((inputdata: any) => inputdata.input === data.input);
                  this.inputData[ind]['selected'] = true;
              } else {
                  this.isSelect.splice(exists,1);
                  this.selectedData.splice(exists,1);
                  this.selectedShow.splice(exists,1);
                  const ind = this.inputData.findIndex((inputdata: any) => inputdata.input === data.input);
                  this.inputData[ind]['selected'] = false;
              }

          } else {
              this.selectedData = [];
              this.selectedShow = [];
              this.selectedData.push(data.output);
              this.selectedShow.push({title:data.input, icon:data.icon || 'fa fa-check-circle'});
              this.listTrigger = false;
          }
          
          this.outputData.emit(this.selectedData);
      } 
  }

  private initData(): void {

      this.selectedData = [];
      this.selectedShow = [];
      this.listTrigger = false;

      if(this.actionSelect) {
          this.selectedShow.push({title: this.defaultData});
      } else {
          this.inputData.forEach((data)=>{
              if(data.selected) {
                  this.sendData(data);
                  if(data.disabled) {
                      this.selectedShow.push({title: data.input});
                  }
              }
          });
      }  
  }

  private searchData(value): void { 
      this.searchingData = this.inputData.filter((item) => {
          return item.input.search(value)!= -1;
      });
  }

  ngOnChanges() {
      if(this.inputData.length == 0) {
          this.initData();
      }
  }
  
  ngOnInit() {
      this.initData(); 
  }
}
