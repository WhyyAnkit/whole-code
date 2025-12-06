// =======================
//   CORE WINDOW SYSTEM
// =======================

function toggleStart() {
  const menu = document.getElementById('startMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function openApp(id) {
  closeAllApps();
  document.getElementById(id).style.display = 'block';
}

function closeApp(id) {
  document.getElementById(id).style.display = 'none';
}

function closeAllApps() {
  const apps = document.querySelectorAll('.app-window');
  apps.forEach(app => app.style.display = 'none');
}


// =======================
//   SEARCH START MENU
// =======================

function searchApps() {
  let input = document.getElementById('searchBox').value.toLowerCase();
  let items = document.querySelectorAll('#appsList li');

  items.forEach(i => {
    i.style.display = i.textContent.toLowerCase().includes(input) ? "block" : "none";
  });
}


// =======================
// FILE EXPLORER
// =======================

function openCodePage() {
  window.location.href = "h.htm"; // Local page open
}

function downloadCode() {
  alert("Downloading file...");
}

function toggleFiles() {
  const list = document.getElementById("fileList");
  list.style.display = list.style.display === "none" ? "block" : "none";
}


// =======================
// BROWSER APP FUNCTIONS
// =======================

// SHOW BOX
function showBox(title, content) {
  const box = document.getElementById("browserBox");
  const t = document.getElementById("boxTitle");
  const c = document.getElementById("boxContent");

  t.textContent = title;
  c.innerHTML = content;

  box.style.display = "block";
}


// BUTTON 1 – YOUTUBE
function showYT() {
  showBox("My YouTube Channel", `
    <b>Click below to open:</b><br><br>
    <a href="https://youtube.com/@goodluckdubeyy" target="_blank" class="link-btn">
      👉 Visit My Channel
    </a>
  `);
}


// BUTTON 2 – FRIENDS LIST
function showFriends() {
  showBox("My Friends", `
    <ul style="font-size:18px; line-height:30px;">
      <li>Mehul</li>
      <li>Mukul</li>
      <li>Aaliya</li>
      <li>Mannan</li>
      <li>Nimit</li>
      <li>Prabhmeet</li>
    </ul>
  `);
}


// BUTTON 3 – ABOUT
function showAbout() {
  showBox("About Me", `
    <p style="font-size:18px;">
      I am <b>Aarav Kumar Dubey</b>, currently studying in 
      <b>Oxford Senior Secondary School</b>.<br>
      Soon I will be promoted to <b>9th Class</b>.
    </p>
  `);
}


// =======================
// BROWSER SEARCH
// =======================

function searchNow() {
  const query = document.getElementById("browserSearch").value.trim();

  if (query === "") {
    showBox("Error", "Please type something in the search bar.");
    return;
  }

  // If direct URL → open
  if (query.startsWith("http") || query.includes(".com")) {
    window.open(query.startsWith("http") ? query : "https://" + query, "_blank");
    return;
  }

  // Otherwise → Google search
  window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");
}

function openWiFi() {
    document.getElementById("popup-title").innerText = "Available Wi-Fi Networks";

    let wifiList = [
        "Connect with Aarav 5G",
        "Aaliya 5G",
        "Aarav_Home_2.4G",
        "Galaxy-Plus",
        "JioFiber 8833",
        "NetLink Ultra 5G"
    ];

    let html = "";
    wifiList.forEach(w => {
        html += `<div class="wifi">${w}</div>`;
    });

    document.getElementById("popup-body").innerHTML = html;
    document.getElementById("popup").classList.remove("hidden");
}

function openBluetooth() {
    document.getElementById("popup-title").innerText = "Bluetooth Devices";

    let bluetoothList = [
        "Connected with Windows 10",
        "Aarav Earbuds Pro",
        "Samsung Phone",
        "Boat Earphones 255",
        "Realme Pods X",
        "JBL Speaker"
    ];

    let html = "";
    bluetoothList.forEach(b => {
        html += `<div class="bluetooth">${b}</div>`;
    });

    document.getElementById("popup-body").innerHTML = html;
    document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}
