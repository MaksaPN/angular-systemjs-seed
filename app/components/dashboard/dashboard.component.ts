import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { RouteTable } from '../../config';

@Component({
    selector: 'dashboard',
    templateUrl: '/app/components/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    private currentUser: User;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        this.currentUser = this.userService.getLoggedUser();
        
        //Testing authentication and authorization errors - remove later 
        this.userService.get(this.currentUser.id).subscribe(
            user => console.log(user),
            error => console.log(error)
        );
    };

    logout(): void {
        this.userService.logout();
        this.router.navigate([RouteTable.login]);
    };
}
