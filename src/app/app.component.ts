import { NotesService } from './notes.service';
import { Note } from './note';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  errMessage: string;
  public note: Note;
  public noteArray: Note[];


  constructor(private notesservice: NotesService) {
    this.note = new Note();
    this.noteArray = [];
  }

  ngOnInit() {
    this.notesservice.getNotes().subscribe(
      data => this.noteArray = data
      ,
      (err) => {
         console.log('GET');
         console.log(err);
        if (err.status === 404)
        // tslint:disable-next-line:one-line
        {
          this.errMessage = err.message;
        }
      }
      // err => console.log(err)
    );
  }

   // tslint:disable-next-line:one-line
   addNote(){
    // console.log(this.note.title + '    ' + this.note.text);
    if (this.note.title === '' || this.note.text === '')
    // tslint:disable-next-line:one-line
    {
      this.errMessage = 'Title and Text both are required fields';
      return;
    }
    this.notesservice.addNote(this.note).subscribe(
      data => {}
      ,
      (err) => {
        if (err.status === 404)
        // tslint:disable-next-line:one-line
        {
          this.errMessage = err.message;
        }
      }
      // err => console.log(err)
     );
    this.noteArray.push(this.note);
    this.note = new Note();
  }
}
