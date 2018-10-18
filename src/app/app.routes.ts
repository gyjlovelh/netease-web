/**
 * Created by guanyj on  2018/10/14
 */
import {Routes} from '@angular/router';

export const ROUTER_CONFIG: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'user'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
];
