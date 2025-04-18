$(()=>{ //프로그램 실행 준비

  window.addEventListener("scroll", ()=>{
  const nav = document.getElementById("mainNav"); 
  const logo = document.getElementById("logo"); 

  if (window.scrollY > 100) {
  nav.classList.add("active");// 스크롤 Y가 100 이상일 때
  logo.src = "img/logo2.png"; // 스크롤된 로고 이미지
  } else {
  nav.classList.remove("active");// 100 미만일 때
  logo.src = "img/topLogo.png";      // 원래 로고 이미지
  } 
});

  //타이핑
  const text = "나는 성장하는\n예비 개발자입니다";
  const typingEl = document.getElementById("typing");
  let i = 0;

  function typeText() {
  if (i < text.length) {
      typingEl.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
      i++;
      setTimeout(typeText, 150);
  }
  }
  typeText();


  //상단에서 스크롤시 적용
  
  window.addEventListener("scroll", () => {
      const nav = document.getElementById("mainNav");
      if (window.scrollY > 100) {
      nav.classList.add("active");
      } else {
      nav.classList.remove("active");
      }
  });
  
  document.getElementById("hamburgerBtn").addEventListener("click", () => {
      document.getElementById("sideMenu").classList.toggle("active");
  });

  //가로 사이즈 600이하 #menu 강제 숨김처리 
  //function handleMenuVisibility() { <- 요거 왜 안되닝...
      const menu = document.getElementById("menu");
  
      if (window.innerWidth <= 600) {        
      menu.style.display = "none";
      } else {
      menu.style.display = "flex"; // 기존에 flex로 되어 있었으니!
      }
  //}
  
  // 초기 로딩 시 체크
  //window.addEventListener("DOMContentLoaded", handleMenuVisibility);
  
  // 창 크기 변경 시 체크
  window.addEventListener("resize", handleMenuVisibility);

  // 갤러리 구간 설정 (이미지 서치)
  const galleryData = [
    { src: "img/event-01.png", alt: "프로젝트1", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-02.png", alt: "프로젝트2", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-03.png", alt: "프로젝트3", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-04.png", alt: "프로젝트4", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-05.png", alt: "프로젝트5", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-06.png", alt: "프로젝트6", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-07.png", alt: "프로젝트7", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-08.png", alt: "프로젝트8", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-09.png", alt: "프로젝트9", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-10.png", alt: "프로젝트10", info: "작업시간: 3시간/ 사용툴: Illustrator" },
    { src: "img/event-11.png", alt: "프로젝트11", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-12.png", alt: "프로젝트12", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-13.png", alt: "프로젝트13", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-14.png", alt: "프로젝트14", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-15.png", alt: "프로젝트15", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-16.png", alt: "프로젝트16", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-17.png", alt: "프로젝트17", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/event-18.png", alt: "프로젝트18", info: "작업시간: 3시간 / 사용툴: Illustrator" },
    { src: "img/placeholder.png", alt: "준비중", info: "작업시간: 준비중" },
    { src: "img/placeholder.png", alt: "준비중", info: "작업시간: 준비중" },
    { src: "img/placeholder.png", alt: "준비중", info: "작업시간: 준비중" },
    { src: "img/placeholder.png", alt: "준비중", info: "작업시간: 준비중" },
    { src: "img/placeholder.png", alt: "준비중", info: "작업시간: 준비중" },
    { src: "img/placeholder.png", alt: "준비중", info: "작업시간: 준비중" },
    { src: "img/placeholder.png", alt: "준비중", info: "작업시간: 준비중" },
    { src: "img/placeholder.png", alt: "준비중", info: "작업시간: 준비중" },
    { src: "img/placeholder.png", alt: "준비중", info: "작업시간: 준비중" },
    { src: "img/placeholder.png", alt: "준비중", info: "작업시간: 준비중" },
    { src: "img/placeholder.png", alt: "준비중", info: "작업시간: 준비중" },
    { src: "img/placeholder.png", alt: "준비중", info: "작업시간: 준비중" }
  ];

  //대체이미지 

  const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.onerror = () => {
    img.src = "img/placeholder.jpg";
    img.alt = "앗, 이미지를 찾을 수 없네요! 준비중인가봐요! ㅠㅠ...";
  };
  img.onclick = () => alert(`${item.src}\n${item.info}`);
  galleryEl.appendChild(img);


  // 페이지네이션 구간 
  const galleryEl = document.getElementById("gallery");
  const paginationEl = document.getElementById("pagination");
  const itemsPerPage = 12;
  let currentPage = 1;

  function renderGallery(page) {
      galleryEl.innerHTML = "";
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const items = galleryData.slice(start, end);
  
      items.forEach(item => {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt;
      img.onclick = () => alert(`${item.src}\n${item.info}`);
      galleryEl.appendChild(img);
      });
  }
  
  function renderPagination() {
      paginationEl.innerHTML = "";
      const totalPages = Math.ceil(galleryData.length / itemsPerPage);
      for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      if (i === currentPage) btn.disabled = true;
      btn.onclick = () => {
          currentPage = i;
          renderGallery(currentPage);
          renderPagination();
      };
      paginationEl.appendChild(btn);
      }
  }
  
  renderGallery(currentPage);
  renderPagination();


  });//프로그램 종료