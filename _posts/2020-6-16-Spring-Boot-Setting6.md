---
layout: post
title:  push 된 파일 .gitinore 적용하기
---

## ◾ 스프링부트와 AWS로 혼자 구현하는 웹서비스

application-oauth.properties 파일을 ignore 처리해야 하는데 실수로 이미 push 처리해 버린 상황..

.gitignore에 적용하고 다시 push를 시켜도 ignore이 먹지 않는다.



## ◾해결

`Apply .gitignore`

git bahs를 열어 아래 명령어를 쳐준다.

```
$ git rm -r --cached .
$ git add .
$ git commit -m "Apply .gitignore"
$ git push
```





## ◾참고링크

1. 이미 Push 된 file .gitignore 적용하기 https://cjh5414.github.io/gitignore-update/