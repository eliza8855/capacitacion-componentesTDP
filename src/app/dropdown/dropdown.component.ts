import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from './list-items.constant';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  listMonths = Constants.MESES_LIST;

  month = new FormControl('', Validators.required);
  price = new FormControl()

  form = new FormGroup({
    month : this.month,
    price: this.price,
  })

  constructor(
  ) { }

  ngOnInit() {
  }

}
