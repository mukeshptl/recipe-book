import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    'selector': 'app-header',
    'templateUrl': 'header.component.html',
})

export class HeaderComponent {
    @Output() sectionChanged = new EventEmitter<string>();
    
    constructor(private dataStorageService: DataStorageService) { }
    
    onSectionSelect(section: string) {
        this.sectionChanged.emit(section);
    }
    
    storeData() {
        this.dataStorageService.storeRecipes();
    }
    
    fetchData() {
        this.dataStorageService.fetchRecipes();
    }
    
}