/**
 * Created by guanyj on  2018/10/14
 */
import {Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {HomeComponent} from './home/home.component';
import {FollowsComponent} from './follows/follows.component';
import {FansComponent} from './fans/fans.component';

export const ROUTER_CONFIG: Routes = [
    {path: '', component: UserComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: 'follows', component: FollowsComponent},
            {path: 'fans', component: FansComponent}
        ]
    },
];
