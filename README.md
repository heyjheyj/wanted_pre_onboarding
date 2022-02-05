# 원티드 프리온보딩 프론트엔드 코스 과제

### Stack: React, PostCSS

### Date(Duration): 2022년 2월 3일 ~ 2월 5일(3일)

### Heroku 배포 주소: https://wantedpreonboarding.herokuapp.com/

## 주요기능

### 1. Toggle Switch

![Toggle](./public/images/toggle.gif)

#### 기능: Toggle Switch ON, OFF

- OFF상태일 때는 Switch 내 배경이 회색으로, 아래 글씨가 OFF로 바뀜, ON 상태일 때는 배경이 보라색(#431cc6)으로, 아래 글씨가 ON으로 나뀜

#### Log: 토글 내 배경 처리 문제

- 토글하면 배경색 전체가 한번에 바뀌는 것이 아니라, 버튼 이동에 맞춰 바뀌도록 구현하는 것이 어려웠다.
  switch와 토글 inner색상을 따로 만들어 동시에 이동하도록 만들었고, 이 둘을 label로 감싸 box를 만들고 overflow hidden으로 처리했다.
  transition으로 switch가 자연스럽게 움직이도록 했다.

---

### 2. Modal

![Modal](./public/images/modal.gif)

#### 기능: 버튼 클릭 시, 문구와 닫기 버튼이 있는 Madal이 열림

- 'Open Modal' 버튼을 누르면 Modal창이 열리고, Modal창은 클릭으로 닫을 수 있도록 구현

---

### 3. Tab

![Tab](./public/images/tab.gif)

#### 기능: tab을 클릭하면 tab의 배경색과 문구가 달라짐

- 각 tab은 클릭시 배경이 보라색으로 변경되고(transition이용), 동시에 아래 문구도 tab1은 ONE으로, tab2는 TWO로, tab3은 THREE로 변경됨

#### Log: 문구와 배경색이 동시에 바뀌도록 처리

- 클릭 이벤트가 발생하면 배경색과 문구가 동시에 바뀌도록 처리하는 것이 까다로웠다.
  current tab이 어떤 것인지에 따라 색상이 변경되도록하고 문구도 동시에 바뀔 수 있도록 index를 이용해 랜더링했다.

---

### 4. Tag

![Tag](./public/images/tag.gif)

#### 기능: input을 통해 tag를 등록하고, tag내에 있는 버튼을 이용해 해당 tag를 삭제할 수 있도록 함

#### Log: css의 어려움

- 프론트엔드를 공부하면서 시간이 갈수록 어렵다고 느껴지는 게 CSS다. 고려해야할 요소도 많고 사용할 수 있는 기능도 많아, 많은 시간을 투자하지 않으면 절대 능숙해지지 않을 것 같다.
  Tag는 일종의 todolist와 비슷해 기능을 구현하는 데는 큰 어려움이 없었지만, 각 박스들의 width와 flex-wrap을 이용한 배치 등을 적용하는게 까다로웠다.

- tag 등록시 랜덤으로 색이 지정되도록도 해봤다.

![Tag](<./public/images/tag(colorful).gif>)

---

### 5. Auto Complete

![AutoComplete](./public/images/autoComplete.gif)

#### 기능: input에 일부 검색어를 넣으면 자동완성으로 일부 검색어가 포함된 결과값을 보여줌

#### Log1: input이 blur 됐을 때 자동완성이 닫히도록 구현하기

- 자동완성이 닫히지 않는다: 자동완성은 li태그들을 ul태그로 묶어 랜더링 해줬다. 자동완성 검색어를 클릭해서 input의 value값을 세팅해주는 방식인데 이 부분은 문제없이 동작했다. 그러나 검색어를 입력한 뒤 자동완성 검색어를 클릭하지 않은 상태에서, input과 자동완성 외부에서 클릭이벤트가 발생했을 때 자동완성이 닫히지 않는 문제가 발생했다.
- onBlur 이벤트 적용: 문제 해결을 위해 처음에는 input에 blur이벤트를 적용시켰다. 즉 input이 클릭이 되면 isAutoCompleting이 true가 되면서 자동완성이 보여지고, blur가 됐을 때 isAutoCompleting이 false가 되어 자동완성이 보여지지 않도록 처리했다. 그런데 이럴경우 li태그를 클릭했을 때 blur이벤트가 먼저 적용돼 li태그에 클릭이벤트가 먹히지 않는 문제가 발생했다. 또 다른 방법을 강구해야 했다.
- 클릭이벤트 제어: onBlur가 input과 자동완성에서만 일어나지 않도록 하면 되지 않을까?하는 생각에 이 둘을 감싸고 있는 부모태그에 ref를 걸었다. 그리고 클릭이벤트가 발생했을 때 이 부모태그를 제외한 다른 곳에서 클릭이 발생했을 때에만 isAutoCompleting을 false로 처리하도록 조건을 달았다. 결과적으로 잘 동작했다.
- 닫기버튼은 이 기능에 더해 input값을 초기화하는 것까지 더했다. 클릭이벤트 처리하는 것이 이렇게 복잡할 줄은... 더 공부해야 겠다는 다짐을 해본다.

#### Log2: 검색어 sorting문제

- 검색어 sorting이 안된다: 단순 문자들로만 만들어진 배열 자료를 이용헸다면 sorting이 쉬웠을텐데, key와 value가 2개씩 담긴 객체들이 있는 배열을 데이터로 이용해서 sorting하는 부분에 문제가 생겼다.
- MDN에서 찾아 적용 : mdn사이트에 arrays of objects는 속성값 중 하나의 value를 비교하는 방식으로 sorting할 수 있다고 나와 있었다. 예제에 있었던 함수를 적용해봤다. 잘 동작했다.

---

### 6. Click To Edit

![ClickToEdit](./public/images/clicktoedit.gif)

#### 기능: input box를 클릭해 내용을 수정하면, 가장 아래 문구가 함께 변경됨

- input box의 focus, blur 이벤트를 이용해 내용을 수정하고 state를 업데이트 할 수 있도록 함

#### Log: blur가 될 때 내용 저장하기

- 보통 input으로는 onChange로 state를 업데이트 하고 서버와 통신하는 로직을 많이 구현했는데 이번에는 input이 blur처리가 될 때 상태를 업데이트 하도록 했다. focus가 되면 class가 변경되도록 해 CSS 효과를 줬다.
