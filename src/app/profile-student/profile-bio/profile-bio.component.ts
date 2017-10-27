import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-bio',  // <home></home>
  styleUrls: [ './profile-bio.component.scss' ],
  templateUrl: './profile-bio.component.html'
})
export class BioProfile {
  public editMode = false;
  public bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus eleifend dolor, vel laoreet ligula luctus ut. Quisque dui est, tincidunt at tristique nec, molestie at est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ut hendrerit ex. In tempus est ut consectetur sodales. Duis elementum luctus dolor, at vestibulum metus posuere vitae. Vestibulum placerat ligula et varius consectetur. Pellentesque sit amet lobortis diam. Nulla aliquet enim id iaculis elementum. Sed efficitur id turpis vitae interdum. Nullam id pharetra mauris. Nulla sagittis dictum sagittis. Nulla eu risus porta urna egestas fringilla non vitae eros. Vestibulum non consectetur erat.';
    
  save(){
    this.editMode = false;
  }
}