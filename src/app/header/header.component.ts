import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  protected username: string | undefined;
  protected isCreateView: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.username = this.localStorageService.getItem("username");
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((segments) => {
      this.isCreateView = segments.some(segment => segment.path === 'create-task');
    });
  }

  protected logout(): void {
    this.localStorageService.removeItem("username");
    this.router.navigate(['/']);
  }

  protected newTask(): void {
    this.router.navigate(['/taskboard/create-task']);
  }

  protected backToDashboard(): void {
    this.router.navigate(['/taskboard']);
  }

}
