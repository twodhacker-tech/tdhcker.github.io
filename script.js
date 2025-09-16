    async function loadLive() {
      try {
        const response = await fetch("https://hackingtwod.onrender.com/");
        const data = await response.json();
        console.log("API Response:", data); // 👉 console ထဲမှာ data ကြည့်နိုင်မယ်

        // JSON ထဲက data ထုတ်ပြမယ်
        document.getElementById("SET").innerHTML = `SET: ${data.live.set}`;
        document.getElementById("Value").innerHTML = `VALUE: ${data.live.value}`;
        document.getElementById("time").innerHTML = `TIME: ${data.live.time}`;
        document.getElementById("Live").innerHTML = `${data.live.twod}`;

      } catch (err) {
        console.error("Fetch error:", err);
        document.getElementById("Live").textContent = "⚠️ Could not load data.";
      }
    }

    loadLive();
    setInterval(loadLive, 3000); // 3 sec auto refresh
