import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    // @ViewChild('colorPicker', {static: false}) colorPicker: ElementRef
    title = 'capacitacion-componentesTDP';
    colorValue= '';
    nameValue='';
  
    // ngAfterViewInit() {
    //   this.getValue();
    // }
  
    profileForm = new FormGroup({
      color: new FormControl(''),
      name: new FormControl(''),
    });
  
    obtenerColor(color: string) {
     this.colorValue = color;
     this.profileForm.controls.color.setValue(this.colorValue);
    }
  
    sendValues() {
      let resp = {
        color: this.colorValue,
        name : this.profileForm.value.name,
      }
      console.log(resp);
       return resp
    }
  
    // getValue() {
    //   let color = '';
    //   color = this.colorPicker.nativeElement.getAttribute('setColor');
    //   this.profileForm.controls.color.setValue(color);
    // }

}
