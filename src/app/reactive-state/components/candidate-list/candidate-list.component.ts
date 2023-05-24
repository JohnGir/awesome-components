import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateListComponent implements OnInit {
  //

  loading$!: Observable<boolean>;

  @Input() obj: { firstName: string; lastName: string };
  candidatesService: any;
  //
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    //this.cdr.markForCheck();
    this.loading$ = this.candidatesService.loading$;
  }
}
