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

      } catch (err) {p
        console.error("Fetch error:", err);
        document.getElementById("Live").textContent = "--";
      }
    }

    loadLive();
    setInterval(loadLive, 4000); // 4 sec auto refresh
