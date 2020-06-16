---
layout: post
title:  인텔리제이 console 한글 깨짐 현상 시 설정 
---

## ◾ 스프링부트와 AWS로 혼자 구현하는 웹서비스



인텔리제이 콘솔에서 한글 깨짐 현상이 발생하였다.

UTF-8 설정 문제인듯 하여, 간단한 구글링으로 해결했다.



## ◾해결

인텔리제이에서 shift 두번 눌러주고 창이 뜨면 "vm" 이라고 검색한다.

Edit Custom VM Option 클릭한다.

창이 뜨면 아래 내용을 파일 하단에 추가해준다.

```
-Dfile.encoding=UTF-8
```

인텔리제이 종료 후 재시작 하면 짜잔 - 한글이 잘 나온다.

![utf-8깨짐]({{site.baseurl}}/images/utf-8깨짐.PNG)



## ◾참고링크

1. [**Intellij output 한글 깨지는 문제**](https://freehoon.tistory.com/146)
   https://freehoon.tistory.com/146