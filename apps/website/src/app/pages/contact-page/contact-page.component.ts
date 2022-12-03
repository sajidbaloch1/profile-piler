import { Component } from '@angular/core';
import { AjaxService } from '../../shared/services/ajax.service';
class ContactModel {
  name: string;
  subject: string;
  email: string;
  message: string;
}

interface IContactRs {
  success: boolean;
  message?: string;
}
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  model: ContactModel = new ContactModel();
  posting = false;
  errorMsg = null;
  successMsg = null;

  constructor(private ajax: AjaxService) {}

  async onSubmit() {
    this.errorMsg = null;
    this.successMsg = null;

    this.posting = true;
    try {
      const response = await this.ajax
        .post<IContactRs>('contact-us', this.model)
        .toPromise();
      if (response.success) {
        this.model = new ContactModel();
        this.successMsg =
          'We have received your message, and will get back as soon as possible';
      } else {
        if (response.message) this.errorMsg = response.message;
        else this.errorMsg = 'Something went wrong Please try again later!';
      }
    } catch (err) {
      if (err?.error?.message) this.errorMsg = err?.error?.message;
      else this.errorMsg = 'Something went wrong Please try again later!';
    }

    this.posting = false;
  }
}
