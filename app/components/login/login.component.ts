import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { RouteTable } from '../../config';

@Component({
    selector: 'login',
    templateUrl: '/app/components/login/login.component.html'
})
export class LoginComponent implements OnInit {

    error: string = '';

    @Input()
    user: User = new User();

    ngOnInit(): void {
        if (this.userService.isUserLoggedIn()) {
            this.router.navigate([RouteTable.dashboard]);
        }
    };

    constructor(private userService: UserService, private router: Router) { }

    login(): void {
        this.userService.login(this.user).subscribe(
            user => {
                this.userService.setLoggedUser(user);
                this.router.navigate([RouteTable.dashboard]);
            },
            error => {
                this.error = error;
            });
    }
}
