{
  "title": "Centos 6 x86_64中安装JDK",
  "path":"Centos",
  "tags": ["Centos"],
  "categories": "笔记",
  "date": "2017-09-19",
  "desc": "如何在Centos 6 x86_64的服务器中安装JDK",
  "cover": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508217543&di=9cd73c63f66e17e2321d8498c1b6a52f&imgtype=jpg&er=1&src=http%3A%2F%2Fxi2.me%2Fwp-content%2Fuploads%2F2016%2F06%2Fcentos-logo.png"
}

# Centos 6 x86_64中安装JDK
***

## 需要文件及软件
* [jdk-8u144-linux-x64.rpm](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html "jdk-8u144-linux-x64.rpm")
* Xshell
* Xftp

### 注意：系统是32位还是64位和jdk文件是32位还是64位
***

## 步骤

### 上传文件

* 将jdk-8u144-linux-x64.rpm上传至服务器 /usr/local 文件夹下
![](https://i.imgur.com/IcEgfbB.png)

### 安装文件

* 进入到/usr/local文件夹下
* 安装jdk-8u144-linux-x64.rpm文件，`[root@localhost local]# rpm -ivh jdk-8u144-linux-x64.rpm`，JDK默认安装在/usr/java中
![](https://i.imgur.com/RYxj460.jpg)

### 配置环境变量

* 进入配置`[root@localhost local]# vi /etc/profile`
![](https://i.imgur.com/1cI3Dz4.png)

* 设置配置，在末尾行按 i ，进入编辑，保证和/usr/java下的文件名相同jdk1.8.0_144
`JAVA_HOME=/usr/java/jdk1.8.0_144
PATH=$JAVA_HOME/bin:$PATH
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export JAVA_HOME
export PATH
export CLASSPATH`
再按 Es c，输入 :wq 保存并退出
![](https://i.imgur.com/zZDzQC2.jpg)

### 使设置立即生效

* `[root@localhost ~]# source /etc/profile  //使修改立即生效`
![](https://i.imgur.com/qmFHO1U.png)

### 查看结果

* `[root@localhost ~]# echo $PATH  //查看PATH值`
![](https://i.imgur.com/dW7bcZf.png)

### 查看java版本信息

* `[root@localhost ~]# java -version`
![](https://i.imgur.com/Azsh2bv.png)


