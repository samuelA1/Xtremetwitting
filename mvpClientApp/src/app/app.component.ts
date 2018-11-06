import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertifyService } from './_services/alertify.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twitter';
  token;
  helper = new JwtHelperService();
  closeResult: string;



  constructor(private router: Router,
     public authService: AuthService,
      private alertify: AlertifyService,
      private modalService: NgbModal) {
     this.token = localStorage.getItem('token')

    if (!this.helper.isTokenExpired(this.token)) {
      this.router.navigate(['/'])
      authService.user = this.helper.decodeToken(this.token)
      authService.text = 'Sign out'
    } else (
      this.router.navigate(['/login'])
    )
  }

  logout() {
    this.authService.text = '';
    this.authService.user.user = {}
    localStorage.clear();
    this.router.navigate(['/login']);
    this.alertify.success('Logout successful')
  }

  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
