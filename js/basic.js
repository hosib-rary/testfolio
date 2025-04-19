$(()=>{ //프로그램 실행 준비

  //상단 메뉴 동적이벤트

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const logo = document.querySelector(".logo img");
  
    if (scrollPosition > 1200) {
      logo.src = "img/footer_logo.png";  // 스크롤 시 변경될 로고 이미지 경로
    } else {
      logo.src = "img/topLogo.png"; // 원래 로고 이미지
    }
  }

  // 스크롤 이벤트 추가
  window.addEventListener("scroll", handleScroll);

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

  
  document.getElementById("hamburgerBtn").addEventListener("click", () => {
      document.getElementById("sideMenu").classList.toggle("active");
  });

  //가로 사이즈 600이하 #menu 강제 숨김처리 
  function handleMenuVisibility() {
    const menu = document.getElementById("menu");

    if (window.innerWidth <= 600) {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex"; // 기존에 flex로 되어 있었으니!
    }
  }

  window.addEventListener("resize", handleMenuVisibility);
  
  // 창 크기 변경 시 체크
  window.addEventListener("resize", handleMenuVisibility);

  // 갤러리 데이터
  const galleryData = [
    { src: "./img/event-1.png", alt: "프로젝트 1", info: "작업시간: 3일 / 사용툴: Illustrator" },
    { src: "./img/event-2.png", alt: "프로젝트 2", info: "작업시간: 4일 / 사용툴: Illustrator" },
    { src: "./img/event-3.png", alt: "프로젝트 3", info: "작업시간: 5일 / 사용툴: Illustrator" },
    { src: "./img/event-4.png", alt: "프로젝트 4", info: "작업시간: 2일 / 사용툴: Illustrator" },
    { src: "./img/event-5.png", alt: "프로젝트 5", info: "작업시간: 3일 / 사용툴: Illustrator" },
    { src: "./img/event-6.png", alt: "프로젝트 6", info: "작업시간: 4일 / 사용툴: Illustrator" },
    { src: "./img/event-7.png", alt: "프로젝트 7", info: "작업시간: 5일 / 사용툴: Illustrator" },
    { src: "./img/event-8.png", alt: "프로젝트 8", info: "작업시간: 2일 / 사용툴: Illustrator" },
    { src: "./img/event-9.png", alt: "프로젝트 9", info: "작업시간: 3일 / 사용툴: Illustrator" },
    { src: "./img/event-10.png", alt: "프로젝트 10", info: "작업시간: 4일 / 사용툴: Illustrator" },
    { src: "./img/event-11.png", alt: "프로젝트 11", info: "작업시간: 5일 / 사용툴: Illustrator" },
    { src: "./img/event-12.png", alt: "프로젝트 12", info: "작업시간: 2일 / 사용툴: Illustrator" },
    { src: "./img/event-13.png", alt: "프로젝트 13", info: "작업시간: 3일 / 사용툴: Illustrator" }
];

// 갤러리 렌더링 함수 수정
function renderGallery() {
  const section = document.getElementById("sectionFour");
  const gallery = document.createElement("div");
  gallery.id = "gallery";
  section.appendChild(gallery);

  galleryData.forEach(item => {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.classList.add("gallery-image");

    img.onerror = () => {
      img.src = "img/placeholder.jpg";  // 이미지 로딩 실패 시 대체 이미지
      img.alt = "이미지를 불러올 수 없습니다";  // 대체 텍스트
    };

    img.onclick = () => showLightbox(item);
    gallery.appendChild(img);
  });
}

// 라이트박스 열기
function showLightbox(item) {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightbox-img").src = item.src;
  document.getElementById("lightbox-text").textContent = item.info;
  lightbox.classList.remove("hidden");
}

document.getElementById("lightbox-close").onclick = () => {
  document.getElementById("lightbox").classList.add("hidden");
};

document.addEventListener("DOMContentLoaded", renderGallery);



  });//프로그램 종료