import { Component, ViewChild, OnInit, enableProdMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule,NgModelGroup, NgForm } from '@angular/forms';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import { ShareButtonsModule } from 'ngx-sharebuttons';



enableProdMode();
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'profile-header',  // <home></home>
  styleUrls: [ './profile-header.component.scss' ],
  templateUrl: './profile-header.component.html'
})
export class HeaderProfile {


  data: any;
  cropperSettings: CropperSettings;

  constructor() {

      this.cropperSettings = new CropperSettings();
      this.cropperSettings.width = 100;
      this.cropperSettings.height = 100;
      this.cropperSettings.croppedWidth = 300;
      this.cropperSettings.croppedHeight = 300;
      this.cropperSettings.canvasWidth = 400;
      this.cropperSettings.canvasHeight = 300;
      this.cropperSettings.noFileInput = false;

      this.data = {};

  }

  // fileChangeListener($event) {
  //   var image:any = new Image();
  //   var file:File = $event.target.files[0];
  //   var myReader:FileReader = new FileReader();
  //   var that = this;
  //   myReader.onloadend = function (loadEvent:any) {
  //       image.src = loadEvent.target.result;
  //       that.cropper.setImage(image);

  //   };

  //   myReader.readAsDataURL(file);
  // }

  public editMode = false;
  public cropDone = false;
  public editCV = false;
  public name = 'Elon Musk';
  public major = 'ICT';
  public catchPhrase = 'I am an enthousiastic and young Industrial Engineer looking for a job in UI design.';

  save(){
    this.editMode = false;
    this.cropDone = true;
  }

  cvEdit(){
    this.editCV = true;
    this.cropDone = true;
  }

  height : number | string = '100px';

}