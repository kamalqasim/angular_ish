import { EffectsModule } from '@ngrx/effects';


import { RouterEffects } from './router.effects';

export const AppEffectsModules = EffectsModule.forRoot([

  RouterEffects,
]);
