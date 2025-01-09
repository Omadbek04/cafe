// Vaqtni yangilash funksiyasi
function updateTime() {
    const now = new Date();
  
    // Soat va daqiqalar
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const isPM = hours >= 12; // PM/AM format
    const amPmText = isPM ? "pm" : "am";
  
    if (hours > 12) hours -= 12; // 12 soat formatiga o'girish
    if (hours === 0) hours = 12;
  
    // DOM elementlarini yangilash
    document.getElementById("clock").textContent = String(hours).padStart(2, "0");
    document.getElementById("minute").textContent = String(minutes).padStart(2, "0");
    document.getElementById("pm_am").textContent = amPmText;
  
    // Sana va haftaning kuni
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    document.getElementById("week").textContent = `${daysOfWeek[now.getDay()]},`;
    document.getElementById("monts").textContent = `${now.getDate()} ${months[now.getMonth()]}`;
    document.getElementById("year").textContent = now.getFullYear();
  }
  
  // Vaqtni har soniyada yangilash
  setInterval(updateTime, 1000);
  
  // Dastlab bir marta chaqirish
  updateTime();
  