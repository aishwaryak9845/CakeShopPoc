import { Component, OnInit ,Input} from '@angular/core';
import { CakesService } from 'src/app/cakes.service';

@Component({
  selector: 'app-add-edit-cake',
  templateUrl: './add-edit-cake.component.html',
  styleUrls: ['./add-edit-cake.component.css']
})
export class AddEditCakeComponent implements OnInit {

  constructor(private service:CakesService) { }

  @Input() Cake:any;
  CakeId!: string;
  CakeName!: string;
  CakeType !:string;
  val:any;
 

  CakeTypeList:any=[];

  ngOnInit(): void {
    this.loadCakeTypeList();
  }

  loadCakeTypeList(){
    this.service.getAllCakeTypeNames().subscribe((data:any)=>{
      this.CakeTypeList=data;

      this.CakeId=this.Cake.CakeId;
      this.CakeName=this.Cake.CakeName;
      this.CakeType=this.Cake.CakeType;
      
     
    });
  }

  addCake(){
    var val = {CakeId:this.CakeId,
               CakeName:this.CakeName,
                CakeType:this.CakeType
              
        };

    this.service.addCake(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCake(){
    var val = {CakeId:this.CakeId,
      CakeName:this.CakeName,
      CakeTypeName:this.CakeType
    }

    this.service.updateCakeType(val).subscribe(res=>{
    alert(res.toString());
    });
  }


 

}
