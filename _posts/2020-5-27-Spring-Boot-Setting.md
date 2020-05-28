---
layout: post
title:  스프링부트와 AWS로 혼자 구현하는 웹서비스(어디부터 잘못된걸까..)
---

## ◾ 스프링부트와 AWS로 혼자 구현하는 웹서비스 

[[그림1]]
![_config.yml]({{site.baseurl}}/images/2020_캡처.PNG)
[[그림2]]
![_config.yml]({{site.baseurl}}/images/2020_캡처1.PNG)



> FAILURE: Build failed with an exception.
>
> What went wrong:
> Could not open cp_init remapped class cache for 4a98n01m56lc25a3ji6c2nhj0 (C:\Users\JIHYE\.gradle\caches\6.1\scripts-remapped\wrapper_init1_ble71thlqpy8zmzx06pv4nsoi\4a98n01m56lc25a3ji6c2nhj0\cp_init4919d77a9a41249da544bc559de1b4ce).
>
> Could not open cp_init generic class cache for initialization script 'C:\Users\JIHYE\AppData\Local\Temp\wrapper_init1.gradle' (C:\Users\JIHYE\.gradle\caches\6.1\scripts\4a98n01m56lc25a3ji6c2nhj0\cp_init\cp_init4919d77a9a41249da544bc559de1b4ce).
> Could not initialize class org.codehaus.groovy.classgen.Verifier

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 391ms



*구글링 찾아도 안나온다...아오*...



## ◾해결

1. JDK14 에서 JDK8 버전으로 재설치
2. IntelliJ 2019.2월버전으로 재설치