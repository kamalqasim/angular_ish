import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ActionReducerMap, Store } from '@ngrx/store';
// import { routerReducer, RouterReducerState } from '@ngrx/router-store';

// reducers

import { IUserProfile, user, UserProfileActions } from './user-profile';
import { IAppSettings, appLayout } from './app-layout';

// The top level Echoes Player application interface
// each reducer is reponsible for manipulating a certain state
export interface EchoesState {
  user: IUserProfile;
  appLayout: IAppSettings;
  // routerReducer: RouterReducerState;
}

export let EchoesReducers: ActionReducerMap<EchoesState> = {
  user,
  appLayout
  // routerReducer
};

export let EchoesActions = [
  UserProfileActions
];
