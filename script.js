async function loadLive() {
  const url = "https://api.thaistock2d.com/live";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network error: " + response.status);

    const data = await response.json();
    const live = data.live;

    // Live Data ပြ
    document.getElementById("liveStock").innerHTML = `
      📌 SET: <b>${live.set}</b><br>
      💰 Value: <b>${live.value}</b><br>
      ⏰ Time: <b>${live.time}</b><br>
      🎯 2D: <b style="color:red">${live.twod}</b>
    `;
  } catch (error) {
    document.getElementById("liveStock").textContent =
      "⚠️ Could not load live data.";
    console.error("Fetch error:", error);
  }
}

// ပထမဆုံးခေါ်
loadLive();

// ၃ စက္ကန့်တစ်ကြိမ် refresh
setInterval(loadLive, 3000);