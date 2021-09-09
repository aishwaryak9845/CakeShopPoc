import { Component, OnInit } from '@angular/core';
import { CakesService } from 'src/app/cakes.service';

@Component({
  selector: 'app-show-cake',
  templateUrl: './show-cake.component.html',
  styleUrls: ['./show-cake.component.css']
})
export class ShowCakeComponent implements OnInit {
  constructor(private service:CakesService) { }

  CakeList:any=[];

  ModalTitle!: string;
  ActivateAddEditCakeComp:boolean=false;
  Cake:any;

  ngOnInit(): void {
    this.refreshCakeList();
  }

  addClick(){
    this.Cake={
      CakeId:0,
      CakeName:"",
      CakeType:"",
      
    }
    this.ModalTitle="Add Cake";
    this.ActivateAddEditCakeComp=true;

  }

  editClick(item: any){
    console.log(item);
    this.Cake=item;
    this.ModalTitle="Edit Cake";
    this.ActivateAddEditCakeComp=true;
  }

  deleteClick(item: { CakeId: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteCake(item.CakeId).subscribe(data=>{
        alert(data.toString());
        this.refreshCakeList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCakeComp=false;
    this.refreshCakeList();
  }


  refreshCakeList(){
    this.service.getCakeList().subscribe(data=>{
      this.CakeList=data;
    });
  }

}


