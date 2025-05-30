
// videoタグとbuttonタグを変数に格納
const video = document.querySelector(".js-video");
const videoButton = document.querySelector(".js-video-button");

// mutedを操作する関数を定義
const toggleAudio = () => {
    video.muted = !video.muted;;
}

videoButton.addEventListener('click', () => {
    // 関数を実行
    toggleAudio();

    // テキストを操作
    if (videoButton.textContent === 'sound') {
        videoButton.textContent = 'no sound';
    } else {
        videoButton.textContent = 'sound';
    }
});

// gotop
// ボタンの要素を取得
const backToTopButton = document.getElementById("backToTop");

// スクロールイベントを監視
window.addEventListener("scroll", () => {
  // スクロール位置が100pxを超えたらボタンを表示
  if (window.scrollY > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// ボタンクリックでトップに戻る
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0, // ページトップの位置
    behavior: "smooth", // スムーズなスクロール
  });
});

