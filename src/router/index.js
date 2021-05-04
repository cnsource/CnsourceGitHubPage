import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Content from "../components/Content";
import Admin from "../components/Admin";
import PassageDetail from "../components/PassageDetail";
import Edit from "../components/Edit";
import LinkManager from "../components/LinkManager";
import PassageManager from "../components/PassageManager";
import Login from "../components/Login";
import DraftManager from "../components/DraftManager";

Vue.use(Router)
const router = new Router({
  routes: [
    {path: '/',name: 'Home',component: Home,
      redirect:'/content',
      children:[
        {path:'/content',name:'Content',component:Content},
        {path:'/login',name:'Login',component:Login},
        {path:'/admin',name:'Admin',component:Admin,redirect:'/linkmg',children:[
            {path:"/linkmg",name:"LinkManager",component:LinkManager},
            {path:"/passagemg",name:"PassageManager",component:PassageManager},
            {path:"/draftmg",name:"DraftManager",component:DraftManager}
          ]},
        {path:'/edit',name:'Edit',component:Edit},
        {path:'/edit/:lid/:pid',name:'Edit',component:Edit},
        {path:'/passage/:objectId',name:'PassageDetail',component:PassageDetail},
      ]
    }
  ]
})
const adminPage = ["LinkManager","PassageManager","Edit","Admin"]
router.beforeEach((to,from,next)=>{
  let current = Bmob.User.current()
  if (adminPage.indexOf(to.name)>=0){
    if (current!=null){
      next()
      return;
    }else {
      router.go(-1)
      alert("无权限访问")
      return;
    }
  }
  next()
})

export default router


