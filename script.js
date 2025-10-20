document.addEventListener("DOMContentLoaded", function () {
  const envelopeContainer = document.querySelector(".envelope-container");
  let petalsInterval = null;

  // Hàm tạo một cánh hoa
  function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    // 1. Vị trí bắt đầu
    petal.style.left = Math.random() * window.innerWidth + "px";

    // 2. Thời gian rơi
    const duration = Math.random() * 5 + 7; // Rơi chậm hơn (7-12 giây)
    petal.style.animationDuration = duration + "s, 3s"; // 3s cho flutter

    // 3. Độ lảo đảo (cho keyframe 'flutter')
    const drift = Math.random() * 100 - 50; // -50px đến +50px
    petal.style.setProperty("--x-drift", drift + "px");

    // 4. Kích thước (giữ nguyên)
    const size = Math.random() * 5 + 8;
    petal.style.width = size + "px";
    petal.style.height = size * 1.5 + "px";

    // 5. Nâng cấp: Màu sắc và độ trong suốt
    // 70% là màu hồng, 30% là màu trắng
    petal.style.backgroundColor = Math.random() > 0.3 ? "#f7d9e5" : "#ffffff";
    petal.style.opacity = Math.random() * 0.4 + 0.6; // 0.6 đến 1.0

    document.body.appendChild(petal);

    // Xóa cánh hoa sau khi rơi xong
    setTimeout(() => {
      petal.remove();
    }, duration * 1000);
  }

  // Xử lý sự kiện click vào phong bì
  envelopeContainer.addEventListener("click", function () {
    if (!envelopeContainer.classList.contains("opened")) {
      envelopeContainer.classList.add("opened");

      // Bắt đầu hiệu ứng hoa rơi
      setTimeout(() => {
        petalsInterval = setInterval(createPetal, 400); // Rơi dày hơn
      }, 1500);
    }
  });
});
