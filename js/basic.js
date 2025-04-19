$(()=>{ //프로그램 실행 준비

  //상단 메뉴 동적이벤트

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const logo = document.querySelector(".logo img");
    const nav = document.getElementById("mainNav");
  
    if (scrollPosition > 100) {
      logo.src = "img/footer_logo.png";  // 스크롤 시 변경될 로고 이미지 경로
      nav.style.backgroundColor = "#9bddc9"; // 배경색 변경
      nav.style.color = "white"; // 글자 색 변경
    } else {
      logo.src = "img/topLogo.png"; // 원래 로고 이미지
      nav.style.backgroundColor = "transparent"; // 배경색 초기화
      nav.style.color = "#1d634e"; // 원래 글자 색상
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
  
  // 창 크기 변경 시 체크
  window.addEventListener("resize", handleMenuVisibility);

  //이제부터 갤러리, 페이지네이션 기능 작성! (2025.04.19에 추가함)

  document.addEventListener("DOMContentLoaded", function() {
    const pageButtons = document.querySelectorAll("#pagination button");
  
    pageButtons.forEach(button => {
      button.addEventListener("click", function() {
        const page = button.getAttribute("data-page");
  
        // 모든 갤러리 숨기기
        const galleries = document.querySelectorAll(".page-gallery");
        galleries.forEach(gallery => gallery.classList.remove("active"));
  
        // 선택된 갤러리만 표시
        const selectedGallery = document.getElementById(`page${page}Gallery`);
        selectedGallery.classList.add("active");
      });
    });
  
    // 이미지 클릭 시 라이트박스 실행
    document.querySelectorAll(".page-gallery img").forEach(img => {
      img.addEventListener("click", function() {
        showLightbox(this);  // 클릭된 이미지 전달
      });
    });
  });
  
  // 이미지 클릭 시 라이트박스 구현
  function showLightbox(item) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxText = document.getElementById("lightbox-text");
  
    // item이 이미지라면 그 src와 alt를 직접 전달
    lightboxImg.src = item.src;
    lightboxText.textContent = item.alt; // info 대신 alt를 사용할 수 있음
    
    // 라이트박스 표시
    lightbox.style.display = "block";
  
    // 닫기 버튼 클릭 시 라이트박스 숨기기
    document.getElementById("lightbox-close").onclick = function() {
      lightbox.style.display = "none";
    };
  }
  });//프로그램 종료