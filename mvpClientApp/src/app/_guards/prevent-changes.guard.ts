import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddAndGetTweetsComponent } from '../addAndGetTweets/addAndGetTweets.component';

@Injectable({
  providedIn: 'root'
})
export class PreventChangesGuard implements CanDeactivate<AddAndGetTweetsComponent> {
  canDeactivate(component: AddAndGetTweetsComponent) {
    if (component.f.dirty) {
      return confirm('Are you sure you want to continue? All unsaved changes will be lost')
    }
    return true;
  }
}
