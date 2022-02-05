# 원티드 프리온보딩 프론트엔드 코스 과제

- Stack: React, PostCSS
- Date(Duration): 2022년 2월 3일 ~ 2월 5일(3일)
- Heroku 배포 주소:

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
  문구를 state로 관리하고 각 tab의 id와 문구가 같으면 배경색이 변경되도록 처리했다.

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

#### Log: input값에 해당하는 결과값 찾는 로직

- 서버에 있는 데이터를 조회한다는 생각으로 로직을 구현했다.

---

### 6. Click To Edit

![ClickToEdit](./public/images/clicktoedit.gif)

#### 기능: input box를 클릭해 내용을 수정하면, 가장 아래 문구가 함께 변경됨

- input box의 focus, blur 이벤트를 이용해 내용을 수정하고 state를 업데이트 할 수 있도록 함

#### Log: blur가 될 때 내용 저장하기

- 보통 input으로는 onChange로 state를 업데이트 하고 서버와 통신하는 로직을 많이 구현했는데 이번에는 input이 blur처리가 될 때 상태를 업데이트 하도록 했다. focus가 되면 class가 변경되도록 해 CSS 효과를 줬다.
