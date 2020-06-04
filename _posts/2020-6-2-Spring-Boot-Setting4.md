---
layout: post
title:  스프링부트와 AWS로 혼자 구현하는 웹서비스(h2-console 404 Error)
---

## ◾ 스프링부트와 AWS로 혼자 구현하는 웹서비스



Application.main() 을 실행해서 http:localhost:8080/h2-console을 접속하라는데 

계속해서 404 Whtelabel Error페이지가 뜬다.

서버는 떠있지만 페이지 매핑을 못해서 에러페이지로 Spring boot에서 띄워준 것.

![404](..\images\404.PNG)





## ◾해결

*뭐시 문제인가.. 한시간 구글링 끝에 찾아냈다...헥헥*

*맙소사 내가 추가해 준 appliation.properties 파일이 왜 /src/main/test/resources 하위에 있는 것인가*

*고이고이 다시 /src/main/resources 제자리를 찾아주니 잘뜬다.*

```
spring.h2.console.enabled=true
```

*반갑다 h2-console!!!*

## ![h2console](..\images\h2console.PNG)





## ◾참고링크

1. 구세주 스택오버플로!
   [https://stackoverflow.com/questions/40261302/spring-boot-jpa-h2-console-not-running-application-properties-file-ignored](https://stackoverflow.com/questions/40261302/spring-boot-jpa-h2-console-not-running-application-properties-file-ignored)