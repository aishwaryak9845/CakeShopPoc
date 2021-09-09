import { Component, OnInit } from '@angular/core';
import { CakesService } from 'src/app/cakes.service';

@Component({
  selector: 'app-show-caketype',
  templateUrl: './show-caketype.component.html',
  styleUrls: ['./show-caketype.component.css']
})
export class ShowCaketypeComponent implements OnInit {

  
  constructor(private service:CakesService) { }

  CakeTypeList:any=[];

  ModalTitle !:string;
  ActivateAddEditCakeTypeComp:boolean=false;
  caketype:any;

  CakeTypeIdFilter:string="";
  CakeTypeNameFilter:string="";
  CakeTypeListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCakeTypeList();
  }

  addClick(){
    this.caketype={
      CakeTypeId:0,
      CakeTypeName:""
    }
    this.ModalTitle="Add CakeType";
    this.ActivateAddEditCakeTypeComp=true;

  }

  editClick(item:any){
    this.caketype=item;
    this.ModalTitle="Edit CakeType";
    this.ActivateAddEditCakeTypeComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteCakeType(item.CakeTypeId).subscribe((data: { toString: () => any; })=>{
        alert(data.toString());
        this.refreshCakeTypeList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCakeTypeComp=false;
    this.refreshCakeTypeList();
  }


  refreshCakeTypeList(){
    this.service.getCakeTypeList().subscribe(data=>{
      this.CakeTypeList=data;
      this.CakeTypeListWithoutFilter=data;
    });
  }

  FilterFn(){
    var CakeTypeIdFilter = this.CakeTypeIdFilter;
    var CakeTypeNameFilter = this.CakeTypeNameFilter;

    this.CakeTypeList = this.CakeTypeListWithoutFilter.filter(function (el:any){
        return el.CakeTypeId.toString().toLowerCase().includes(
          CakeTypeIdFilter.toString().trim().toLowerCase()
        )&&
        el.CakeTypeName.toString().toLowerCase().includes(
          CakeTypeNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.CakeTypeList = this.CakeTypeListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}

