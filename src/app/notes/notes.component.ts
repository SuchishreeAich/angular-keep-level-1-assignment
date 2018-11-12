import { AppComponent } from './../app.component';
import { Note } from './../note';
import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  // public note: Note;
  // public noteArray: Note[];
  // public appComp: AppComponent;
  // tslint:disable-next-line:no-trailing-whitespace
  
  // constructor(private notesservice: NotesService) {
  //   this.note = new Note();
  //   this.noteArray = [];
  // }

  // ngOnInit() {
  //   this.notesservice.getNotes().subscribe(
  //     data => this.noteArray = data
  //     ,
  //     (err: Response) => {
  //       console.log(err);
  //     }
  //   );
  // }

  // // tslint:disable-next-line:one-line
  // addNote(){
  //   console.log(this.note.title + '    ' + this.note.text);
  //   this.notesservice.addNote(this.note).subscribe(
  //     data => {}
  //     ,
  //     (err: Response) => {
  //       console.log(err);
  //     }
  //    );
  //   this.noteArray.push(this.note);
  //   this.note = new Note();
  // }

}
