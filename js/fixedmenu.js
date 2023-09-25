window.addEventListener("load", function () {
    // top 버튼 스크롤 기능
    const topBtn = document.getElementById("top-btn");
    topBtn.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(window.scrollY);
        if (window.scrollY == 0) {
            window.scrollTo({
                top: 99999,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    });
    // 화살표 이미지 회전
    const topBtnImg = document.getElementById("top-btn-img");
    window.addEventListener("scroll", function (scTop) {
        scTop = this.document.documentElement.scrollTop;
        if (scTop > 0) {
            topBtnImg.classList.add("up");
        } else {
            topBtnImg.classList.remove("up");
        }
    });
});
