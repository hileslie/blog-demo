webpackJsonp([6],{"6Myt":function(t,e,r){"use strict";var l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("p",[t._v('{\n"title": "Centos 6 x86_64中安装JDK",\n"path":"Centos",\n"tags": ["Centos"],\n"categories": "笔记",\n"date": "2017-09-19",\n"desc": "如何在Centos 6 x86_64的服务器中安装JDK",\n"cover": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508217543&di=9cd73c63f66e17e2321d8498c1b6a52f&imgtype=jpg&er=1&src=http%3A%2F%2Fxi2.me%2Fwp-content%2Fuploads%2F2016%2F06%2Fcentos-logo.png"\n}')]),t._v(" "),r("h1",[t._v("Centos 6 x86_64中安装JDK")]),t._v(" "),r("hr"),t._v(" "),r("h2",[t._v("需要文件及软件")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",title:"jdk-8u144-linux-x64.rpm"}},[t._v("jdk-8u144-linux-x64.rpm")])]),t._v(" "),r("li",[t._v("Xshell")]),t._v(" "),r("li",[t._v("Xftp")])]),t._v(" "),r("h3",[t._v("注意：系统是32位还是64位和jdk文件是32位还是64位")]),t._v(" "),r("hr"),t._v(" "),r("h2",[t._v("步骤")]),t._v(" "),r("h3",[t._v("上传文件")]),t._v(" "),r("ul",[r("li",[t._v("将jdk-8u144-linux-x64.rpm上传至服务器 /usr/local 文件夹下\n"),r("img",{attrs:{src:"https://i.imgur.com/IcEgfbB.png",alt:""}})])]),t._v(" "),r("h3",[t._v("安装文件")]),t._v(" "),r("ul",[r("li",[t._v("进入到/usr/local文件夹下")]),t._v(" "),r("li",[t._v("安装jdk-8u144-linux-x64.rpm文件，"),r("code",{pre:!0},[t._v("[root@localhost local]# rpm -ivh jdk-8u144-linux-x64.rpm")]),t._v("，JDK默认安装在/usr/java中\n"),r("img",{attrs:{src:"https://i.imgur.com/RYxj460.jpg",alt:""}})])]),t._v(" "),r("h3",[t._v("配置环境变量")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("进入配置"),r("code",{pre:!0},[t._v("[root@localhost local]# vi /etc/profile")]),t._v(" "),r("img",{attrs:{src:"https://i.imgur.com/1cI3Dz4.png",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("设置配置，在末尾行按 i ，进入编辑，保证和/usr/java下的文件名相同jdk1.8.0_144\n"),r("code",{pre:!0},[t._v("JAVA_HOME=/usr/java/jdk1.8.0_144 PATH=$JAVA_HOME/bin:$PATH CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar export JAVA_HOME export PATH export CLASSPATH")]),t._v("\n再按 Es c，输入 :wq 保存并退出\n"),r("img",{attrs:{src:"https://i.imgur.com/zZDzQC2.jpg",alt:""}})])])]),t._v(" "),r("h3",[t._v("使设置立即生效")]),t._v(" "),r("ul",[r("li",[r("code",{pre:!0},[t._v("[root@localhost ~]# source /etc/profile //使修改立即生效")]),t._v(" "),r("img",{attrs:{src:"https://i.imgur.com/qmFHO1U.png",alt:""}})])]),t._v(" "),r("h3",[t._v("查看结果")]),t._v(" "),r("ul",[r("li",[r("code",{pre:!0},[t._v("[root@localhost ~]# echo $PATH //查看PATH值")]),t._v(" "),r("img",{attrs:{src:"https://i.imgur.com/dW7bcZf.png",alt:""}})])]),t._v(" "),r("h3",[t._v("查看java版本信息")]),t._v(" "),r("ul",[r("li",[r("code",{pre:!0},[t._v("[root@localhost ~]# java -version")]),t._v(" "),r("img",{attrs:{src:"https://i.imgur.com/Azsh2bv.png",alt:""}})])])])}],_={render:l,staticRenderFns:o};e.a=_},"PIj+":function(t,e,r){t.exports=r("e18A")},e18A:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=r("6Myt"),o=r("o7Pn"),_=o(null,l.a,null,null,null);e.default=_.exports}});