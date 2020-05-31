---
layout: post
title:  스프링부트와 AWS로 혼자 구현하는 웹서비스(포트 8080 사용중..)
---

## ◾ 스프링부트와 AWS로 혼자 구현하는 웹서비스



Application.main() 실행 도중 아래와 같은 에러가 발생했다.

> Description:
>
> The Tomcat connector configured to listen on port 8080 failed to start. The port may already be in use or the connector may be misconfigured.
>
> Action:
>
> Verify the connector's configuration, identify and stop any process that's listening on port 8080, or configure this application to listen on another port.



*8080 포트가 이미 실행중이라는 의미...(나..실행 안했는데 뭐지)*

*구글링 해보니 직접 사용중인 포트의 프로세스를 중단해 줘야 한다고 한다*.



## ◾해결

cmd에서 직접 중단 시켜준다

1. *cmd를 실행*
2. *8080에서 사용중인 프로세스(PID)를 확인한다.*
   - *netstat -ano | findstr 8080*
3. *task kill을 이용하여 프로세스를 중단한다.*
   - *taskkill /f/pid {PIDNUMBER}*



## ◾참고링크

1. 구글링해서 찾은 신입 개발자의 글..
   https://truehong.tistory.com/5