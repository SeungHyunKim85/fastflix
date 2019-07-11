import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="signUpHeader">
    <a href="#" class="nfLogo-svg"><img src=
    "C:\Users\kshrt\Desktop\fastflix\src\app\Netflix_2015_logo.svg"></a>
    <a href="/login" class="signUpHeader-login">로그인</a>
  </div>
  <div class="signUpCenterContainer">
    <div class="content">첫 한 달 동안 마음껏 <strong>무료로 이용하세요.</strong></div>
    <h1 class="stepTitle">지금 가입하고 한 달 동안 무료로 이용하세요.</h1>
    <div class="contextRow">Netflix 가입, 복잡하지 않아요!</div>
    <div class="contextRow">복잡한 단계는 모두 없앴습니다.</div>
    <div class="regFormTitle">계정을 등록하세요.</div>
    <input id="id_email" type="text" placeholder="이메일">
    <div class="inputError"></div>
    <input id="id_password" type="password" placeholder="비밀번호">
    <div class="inputError"></div>
    <label class="inputLabel">예, Netflix 특별 프로모션 알림 이메일을 보내주세요</label>
    <button class="oversizeButton">다음</button>
  </div>
  <div class="simpleContainer">simpleContainer</div>
  <div class="site-footer">site-footer
    <a class="footer-top">질문이 있으신가요? 고객 센터에 문의하세요</a>
    <ul class="footer-links">
      <li class="footer-link-item">자주 묻는 질문</li>
      <li class="footer-link-item">고객 센터</li>
      <li class="footer-link-item">이용 약관</li>
      <li class="footer-link-item">개인정보</li>
      <li class="footer-link-item">쿠키 설정</li>
      <li class="footer-link-item">회사 정보</li>
    </ul>
    <select class="nfSelect"></select>
    <div class="lang-section-container">
      <p class="copy-text">넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2015-서울중구-1407호</p>
    </div>
  </div>
  `,
  styles: [
    `
    .signUpHeader {
      weight : 1013px;
      height : 91px;
    }
    .signUpHeader-login {
      float : right;
      text-decoration: none;
    }
    .signUpCenterContainer {
      weight : 1019px;
      height : 642px;
    }
    .content {
      display : inline-block;
      weight : 440px;
      height : 61px;
      background-color : #0071eb;
      color : white;
      margin : 20px 0px 0px;
      padding : 20px 0px;
    },
    .stepTitle {
      display : block;
      text-align : left;
      font-weight : 700;
      font-size :
    },
    .contextRow {
      display : inline-block;
    },
    .regFormTitle {
      display : inline-block;
    },
    .inputError {
      display : inline-block;
    },
    .inputLabel {
      display : inline-block;
    },
    .oversizeButton {
      display : inline-block;
      weight : 440px;
      height : 48px;
      background-color : #e50914;
    }
    `
  ]
})
export class AppComponent {
  title = 'fastflix';
}
