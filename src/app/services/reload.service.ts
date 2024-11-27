import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  constructor(private router: Router) {}
   redirectAndReload(route: string) {
    this.router.navigate([route]).then(() => {
      this.router.navigateByUrl(route, { skipLocationChange: true }).then(() => {
        this.router.navigate([route]);
      });
    });
  }
}
