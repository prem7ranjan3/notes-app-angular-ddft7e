import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  selectedNote = false;
  disableEditing = false;
  
  constructor(private notesService: NotesService) { }
  
  ngOnInit() {
    this.notesService.noteClickSubscription.subscribe((data) => {
      this.selectedNote = true;
    });
  }

  addEditNoteHandler() {
    this.notesService.noteAddEditHandler();
    this.selectedNote = true;
  }

  deleteNoteHandler() {
    this.notesService.noteDeleteHandler();
    this.selectedNote = false;
  }

  toggleHandler() {
    this.notesService.noteToggleHandler();
  }

  searchHandler(inputEl) {
    this.notesService.searchHandler(inputEl.value);
  }

  disableEditingHandler(){
    this.disableEditing = !this.disableEditing;
    this.notesService.disableEditingSubscription.next({'disableEditing': this.disableEditing});
  }

}
