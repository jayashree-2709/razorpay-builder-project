// AI-Powered Rescue Drone Dashboard

function startMission() {
    document.getElementById("missionStatus").innerText =
        "Mission Active";
    document.getElementById("missionStatus").style.color = "green";
}

function stopMission() {
    document.getElementById("missionStatus").innerText =
        "Mission Stopped";
    document.getElementById("missionStatus").style.color = "red";
}

function detectPerson() {
    document.getElementById("detection").innerText =
        "⚠️ PERSON DETECTED — Location: Sector A-12";

    document.getElementById("detection").style.background =
        "#dcfce7";
}

function detectHazard() {
    document.getElementById("hazard").innerText =
        "🔥 HAZARD DETECTED — Possible fire/obstacle ahead";

    document.getElementById("hazard").style.background =
        "#fee2e2";
}

function getLocation() {
    document.getElementById("location").innerText =
        "📍 GPS Location: 11.0168° N, 76.9558° E";
}

function emergencyAlert() {
    alert(
        "🚨 EMERGENCY ALERT SENT!\nRescue team has been notified."
    );
}
