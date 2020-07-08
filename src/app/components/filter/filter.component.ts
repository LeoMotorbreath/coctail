import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { Category } from 'src/models/category';
import { AlertController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  constructor(
    public requestService   : RequestService,
    private alertControll   : AlertController,
    ) { }
    @Output() onCommingBack = new EventEmitter<boolean>();
    @Output() onFilltersApply = new EventEmitter<Category[]>();

    
  ngOnInit() {}

  goBack() {
    this.onCommingBack.emit(false);
  }
  sendFillters() {
    
    this.onFilltersApply.emit(this.requestService.acitveCategories)
  }
  toggleActive(category: Category) {
    category.toggleActive();
  }
  async apply() {
    this.requestService.setActiveCategories();
    this.sendFillters();
    const alert = await this.alertControll.create({  
      message: 'Applyed!',  
      buttons: ['OK']  
    });  
    await alert.present();  
  }  
  

}
