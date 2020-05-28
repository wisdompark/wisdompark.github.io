---
layout: post
title:  스프링부트와 AWS로 혼자 구현하는 웹서비스(롬복아)
---

## ◾ 스프링부트와 AWS로 혼자 구현하는 웹서비스 

[[그림1]]
![_config.yml]({{site.baseurl}}/images/롬보크.PNG)



> Testing started at 오후 3:49 ...
> Gradle Daemon started in 10 s 580 ms
>
> Task :cleanTest UP-TO-DATE
> Task :compileJava
> D:\wisdom-springboot2-webservice\src\main\java\com\wisdom\book\springboot\dto\HelloResponseDto.java:10: error: variable name not initialized in the default constructor
> private final String name;
>                     ^
> D:\wisdom-springboot2-webservice\src\main\java\com\wisdom\book\springboot\dto\HelloResponseDto.java:11: error: variable amount not initialized in the default constructor
> private final int amount;
>                  ^
> 2 errors
> Task :compileJava FAILED
> FAILURE: Build failed with an exception.
>
> * What went wrong:
> Execution failed for task ':compileJava'.
>
> Compilation failed; see the compiler error output for details.
>
> * Try:
>   Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
>
> * Get more help at https://help.gradle.org
>   BUILD FAILED in 20s
>   2 actionable tasks: 1 executed, 1 up-to-date
>
>   BUILD FAILED in 391ms



**변수에 대한 생성자가  만들어지지 않았다는..*

*@RequiredArgsConstructor이 선언된 모든 final 필드가 포함된 생성자를 생성해 준다고 하는데*

*lombok의 어딘가에서 생성자가 안생기게 막고있는 느낌적인 느낌*



## ◾해결

1. gradle 다운그레이드

   인텔리제이에서 alt+F12  누르고 해당 프로젝트 기준으로 터미널이 열리는데, 거기서 아래 명령어를 실행

   ```
   gradlew wrapper --gradle-version 4.10.2
   ```



## ◾참고링크

1. 책 펴낸이 사이트 질의글..
   https://www.daleseo.com/lombok-popular-annotations/