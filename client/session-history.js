// 페이지 로딩 시, 세션 히스토리를 갖는다.
// 세션 히스토리	
/*
// pushState, replaceState 두 개의 함수로 화면 이동 없이 현재 url을 업데이트 한다.
// pushState: 새로운 url을 히스토리에 추가한다.
    -> (state, title, url) ,
    -> state: history.state에서 꺼내쓸 수 있는 값
    -> url: 세션 히스토리에 넣을 url
// replaceState: 히스토리를 pop하고 push한다.
    -> (state, title, url) 
    -> state: history.state에서 꺼내쓸 수 있는 값
    -> title: 변경될 페이지의 title을 가리키는 값인 것 같지만 거의 대부분의 브라우저에서 지원 안 함
    -> url: 세션 히스토리에서 현재 url과 대체할 url이다.
*/
/*
    / -> HomePage
    /list -> ListPage
    /detail/1 -> DetailPage
    url에 따라 화면을 그린다. 
    hashbang -> 
*/