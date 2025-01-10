// Vaqtni yangilash funksiyasi
function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const isPM = hours >= 12;
  const amPmText = isPM ? "pm" : "am";

  if (hours > 12) hours -= 12;
  if (hours === 0) hours = 12;

  document.getElementById("clock").textContent = String(hours).padStart(2, "0");
  document.getElementById("minute").textContent = String(minutes).padStart(2, "0");
  document.getElementById("pm_am").textContent = amPmText;

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  document.getElementById("week").textContent = `${daysOfWeek[now.getDay()]},`;
  document.getElementById("monts").textContent = `${now.getDate()} ${months[now.getMonth()]}`;
  document.getElementById("year").textContent = now.getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  updateTime();
  setInterval(updateTime, 1000);
});

// inputdan img yuklab olish
function onFileSelected(event) {
  const selectedFile = event.target.files[0]; // Tanlangan fayl
  const reader = new FileReader(); // Faylni o'qish uchun FileReader obyekt
  if (selectedFile) {
    // Tanlangan faylni o'qish
    reader.onload = function (event) {
      const imgtag = document.getElementById("myimage");
      imgtag.style.display = "block";
      imgtag.src = event.target.result; // Rasmni yuklash
      imgtag.title = selectedFile.name; // Fayl nomini title sifatida o'rnatish
    };

    reader.readAsDataURL(selectedFile); // Faylni Base64 formatga o'girish
    document.getElementById("img_input").classList.add("myimage_none");
  }
}

//login btn functional

document.addEventListener("DOMContentLoaded", function () {
  const pinInput = document.getElementById("login-pin");
  const buttons = document.querySelectorAll(".login_btns button");

  // Har bir tugmachaga bosish hodisasini qo'shish
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonValue = this.textContent;

      // "C" tugmasi barcha qiymatni tozalash
      if (this.id === "login-allDelete") {
        pinInput.value = "";
      }
      // O'chirish tugmasi (bir belgini o'chirish)
      else if (this.id === "login-deleteOne") {
        pinInput.value = pinInput.value.slice(0, -1); // Oxirgi belgini o‘chirish
      }
      // Raqamni qo'shish
      else {
        pinInput.value += buttonValue;
      }
    });
  });
});

/// dropdown
// Barcha tugmalarni olish
const buttons = document.querySelectorAll(".toggle-btn");

// Tugmalarni bosilganda aktiv qilish funksiyasi
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Hamma tugmalardan "active" klassini olib tashlash
    buttons.forEach((btn) => btn.classList.remove("active_dropdown"));

    // Bosilgan tugmaga "active" klassini qo'shish
    button.classList.add("active_dropdown");
  });
});

// modal ochilishi va yopilishi funcsyasi
// Modal elementini olish
const modal = document.getElementById("order_modal");
const buyurtma = document.getElementById("buyurtma");
buyurtma.addEventListener("click", () => openModal());
// Modalni yopish funksiyasi
const closeModal = (event) => {
  // Agar tashqi modaldan bosilgan bo'lsa yoki `Escape` tugmasi bosilgan bo'lsa, modalni yopish
  if (event?.target === modal || !event) {
    modal.style.display = "none";
  }
};

// ESC tugmasi bilan modalni yopish
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Modalni ochish (kerak bo'lsa)
const openModal = () => {
  modal.style.display = "flex";
};
