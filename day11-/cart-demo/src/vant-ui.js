import Vue from 'vue'

import { Button } from 'vant'
import { Popup } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Card } from 'vant';
import { NavBar } from 'vant';
import { Tag } from 'vant';
import { Toast } from 'vant';
import { Sku } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);

Vue.use(Grid).use(GridItem);

Vue.use(Swipe).use(SwipeItem);

Vue.use(Sku);
Vue.use(Toast);

Vue.use(Tag);
Vue.use(NavBar);
// van-tag
// Vue.use(vanTag)
Vue.use(Card);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Popup);
Vue.use(Button)

