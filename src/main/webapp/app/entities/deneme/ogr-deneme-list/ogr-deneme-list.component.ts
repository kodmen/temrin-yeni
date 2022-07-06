import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'app/core/util/alert.service';
import dayjs from 'dayjs';
import { IDeneme } from '../deneme.model';
import { DenemeService } from '../service/deneme.service';

@Component({
  selector: 'jhi-ogr-deneme-list',
  templateUrl: './ogr-deneme-list.component.html',
  styleUrls: ['./ogr-deneme-list.component.scss']
})
export class OgrDenemeListComponent implements OnInit {
  isLoading = false;
  denemes?: IDeneme[];


  constructor(private denemeService: DenemeService, private alertService: AlertService, private router: Router) {}

  ngOnInit(): void {
    this.loadAll();
  }

  zamanKontrol(d: IDeneme): void {
    if (!d.baslamaTarih!.isBefore(dayjs().toDate())) {
      this.alertService.addAlert({ type: 'danger', message: 'deneme giriş yapamazsınız zamanı gelmemiş' });
    } else {
      this.router.navigate(['/deneme', d.id, 'basla']);
    }
  }

  loadAll(): void {
    this.isLoading = true;

    this.denemeService.query().subscribe({
      next: (res: HttpResponse<IDeneme[]>) => {
        this.isLoading = false;
        this.denemes = res.body ?? [];
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

}
