import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  is_error = false;
  user = {
    usr: '',
    pass: '',
  };
  constructor(private router: Router) {}
  ngOnInit() {}
  validarUsuario() {
    if (this.user.usr == 'admin' && this.user.pass == '123') {
      this.is_error = false;
      this.router.navigate(['/home']);
    } else {
      this.is_error = true;
    }
  }
}
