import Vue from 'vue'

import {
  Container,
  Menu,
  Submenu,
  MenuItem,
  Header,
  Main,
  Footer,
  Aside,
  Form,
  FormItem,
  Input,
  Button,
  Tag,
  Notification,
  Card,
  Carousel,
  CarouselItem,
  Select,
  Option,
  Radio,
  RadioGroup,
  RadioButton,
  InputNumber,
} from 'element-ui'

Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(MenuItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Tag)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(InputNumber)

Vue.prototype.$notify = Notification
