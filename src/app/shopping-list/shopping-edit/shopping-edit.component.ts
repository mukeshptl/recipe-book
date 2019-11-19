import { Component, OnInit, ViewChild} from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f', {static: false}) slForm: NgForm;
  editMode = false;
  editingIndex: number;
  constructor(public slService: ShoppingListService) { }

  ngOnInit() {
    this.slService.ingredientToEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editingIndex = index;
        const currentIngredient = this.slService.getIngredient(index);
        this.slForm.setValue({ name: currentIngredient.name, amount: currentIngredient.amount});
      }
    );
  }
  
  addIngredient(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    if(this.editMode) {
      this.slService.updateIngredients(this.editingIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }
  
  
  cancelEdit() {
    this.editMode = false;
    this.slForm.reset();
  }
  
  deleteIngredient() {
    this.slService.deleteIngredient(this.editingIndex);
  }
  

}
