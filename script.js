document.getElementById("year").textContent = new Date().getFullYear();

function sendWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text = `السلام عليكم، أنا ${name}%0Aنوع الخدمة: ${service}%0Aتفاصيل الطلب: ${message}`;
  const url = `https://wa.me/966596014720?text=${text}`;

  window.open(url, "_blank");
}
