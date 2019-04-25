1.  用户查询：http：//localhost:3000/user/getUser
Type:get
Params:{
    nickname:"用户名"
}
2-1.  查找自定义分类图标：http：//localhost:3000/custom/getCustom
Type:get
Params:{
   icon:"class名"
}
2-2.  分类查询接口：http：//localhost:3000/classify/getClassify
Type:post
Params:{
   type:"收入|支出",
   userId:"用户ID"
}
2-3.  添加分类查询接口：http：//localhost:3000/classify/addClassify
Type:post
Params:{
   type:"收入|支出",
   userId:"用户ID",
   name:"分类名"
 icon:"图标 class",
}
