import { Component, OnInit ,Input} from '@angular/core';
import { CakesService } from 'src/app/cakes.service';

@Component({
  selector: 'app-add-edit-caketype',
  templateUrl: './add-edit-caketype.component.html',
  styleUrls: ['./add-edit-caketype.component.css']
})
export class AddEditCaketypeComponent implements OnInit {

  constructor(private service:CakesService) { }

  @Input() caketype:any;
  CakeTypeId!: string;
  CakeTypeName!:string;

  ngOnInit(): void {
    this.CakeTypeId=this.caketype.CakeTypeId;
    this.CakeTypeName=this.caketype.CakeTypeName;
  }

  addCakeType(){
    var val = {CakeTypeId:this.CakeTypeId,
      CakeTypeName:this.CakeTypeName};
    this.service.addCakeType(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCakeType(){
    var val = {CakeTypeId:this.CakeTypeId,
      CakeTypeName:this.CakeTypeName};
    this.service.updateCakeType(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
