import { Injectable } from "@angular/core";
import { Loading, LoadingController } from "ionic-angular";
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/distinctUntilChanged';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoadingService {
  private loading: Loading;
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private isLoading$: Observable<boolean> = this.isLoading.asObservable();
  
  constructor(private loadingCtrl: LoadingController) {
    
    this.isLoading$
      .distinctUntilChanged()
      .subscribe((isLoading: boolean) => {
        if (isLoading) {
          this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true
          });
          this.loading.present()
            .then(() => console.log('Loader started'))
            .catch((error) => console.log(error))
        } else if(this.loading) {
          this.loading.dismiss()
            .then(() => console.log('Loader dismissed'))
            .catch((error) => console.log(error))
        }
      });
  }
  
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
}
