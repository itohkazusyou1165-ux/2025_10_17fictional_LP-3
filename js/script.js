//swiper導入部分

// HTMLのbodyの閉じタグ手前などに記述します
const swiper = new Swiper(".assessment-swiper", {
  // オプション
  loop: true, // ループを有効にする

  // カードの幅に合わせた設定
  speed: 1500,
  autoplay: {
    delay: 1500,
  },
  slidesPerView: "auto", // スライドの枚数を自動調整（CSSの幅に従う）
  centeredSlides: true, // アクティブなスライドを中央に配置
  spaceBetween: 30, // スライド間のスペース（px）

  // 必要に応じてページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // 必要に応じてナビボタン
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // レスポンシブ設定（任意）
  breakpoints: {
    // 768px以上
    768: {
      spaceBetween: 50,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  // 監視対象の要素をすべて取得
  const targets = document.querySelectorAll("#cta-text-left");

  // Intersection Observer の設定
  const options = {
    // threshold: 0.2 は、要素が20%ビューポートに入ったら発火するという意味
    threshold: 0.2,
  };

  // Observerのインスタンスを作成
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // 交差している（ビューポートに入っている）場合
      if (entry.isIntersecting) {
        // CSSのクラスを追加してアニメーション開始
        entry.target.classList.add("is-visible");

        // 一度表示された要素は、これ以上監視する必要がないので解除
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // 全てのターゲット要素を監視開始
  targets.forEach((target) => {
    observer.observe(target);
  });
});

//二つ目

document.addEventListener("DOMContentLoaded", () => {
  // 監視対象の要素をすべて取得
  const targets = document.querySelectorAll("#animation-card");

  // Intersection Observer の設定
  const options = {
    // threshold: 0.2 は、要素が20%ビューポートに入ったら発火するという意味
    threshold: 0.2,
  };

  // Observerのインスタンスを作成
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // 交差している（ビューポートに入っている）場合
      if (entry.isIntersecting) {
        // CSSのクラスを追加してアニメーション開始
        entry.target.classList.add("is-visible");

        // 一度表示された要素は、これ以上監視する必要がないので解除
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // 全てのターゲット要素を監視開始
  targets.forEach((target) => {
    observer.observe(target);
  });
});

//3つ目

document.addEventListener("DOMContentLoaded", () => {
  // 監視対象の要素をすべて取得
  const targets = document.querySelectorAll("#animation-card");

  // Intersection Observer の設定
  const options = {
    // threshold: 0.2 は、要素が20%ビューポートに入ったら発火するという意味
    threshold: 0.2,
  };

  // Observerのインスタンスを作成
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // 交差している（ビューポートに入っている）場合
      if (entry.isIntersecting) {
        // CSSのクラスを追加してアニメーション開始
        entry.target.classList.add("is-visible");

        // 一度表示された要素は、これ以上監視する必要がないので解除
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // 全てのターゲット要素を監視開始
  targets.forEach((target) => {
    observer.observe(target);
  });
});
