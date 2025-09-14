async function loadLive() {
  const url = "https://api.thaistock2d.com/live";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network error: " + response.status);

    const data = await response.json();
    const live = data.live;

    // Show SET, Value, Time, 2D
    document.getElementById("liveStock").innerHTML = `
      📌 SET: <b>${live.set}</b><br>
      💰 Value: <b>${live.value}</b><br>
      ⏰ Time: <b>${live.time}</b><br>
      🎯 2D: <b>${live.twod}</b>
    `;
  } catch (error) {
    console.error("Fetch error:", error);
    document.getElementById("liveStock").textContent =
      "⚠️ Could not load live data.";
  }
}

// Load once and auto-refresh every 3s
window.onload = () => {
  loadLive();
  setInterval(loadLive, 3000);
};