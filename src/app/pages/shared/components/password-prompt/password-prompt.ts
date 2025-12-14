import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  standalone: false,
  selector: 'ngx-password-prompt',
  templateUrl: 'password-prompt.html',
  styleUrls: ['password-prompt.scss'],
})
export class PasswordPromptComponent {

  constructor(protected ref: NbDialogRef<PasswordPromptComponent>) { }
  name = {
    value: ''
  }
  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}
