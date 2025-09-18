const API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=de";

// Diese Funktion holt einen Fakt von der API
async function fetchFact() {
    try {
        // Wir senden eine Anfrage an die API
        const res = await fetch(API_URL);
        // Wenn die Antwort nicht ok ist, werfen wir einen Fehler
        if (!res.ok) throw new Error("Netzwerkfehler");
        // Wir wandeln die Antwort in ein JSON-Objekt um
        const data = await res.json();
        // Wir geben den Text des Fakts zurück
        return data.text;
    } catch (error) {
        // Falls ein Fehler auftritt, geben wir eine Fehlermeldung zurück
        return "Leider kein Fakt verfügbar. Versuche es später nochmal!";
    }
}

// Diese Funktion zeigt den Fakt im HTML-Dokument an
async function showFact() {
    // Wir suchen das HTML-Element mit der ID "fact"
    const factElement = document.getElementById("fact");
    // Wir holen den Fakt (das Ergebnis der Funktion fetchFact)
    const text = await fetchFact();
    // Wenn das Element existiert, setzen wir den Text des Elements auf den Fakt
    if (factElement) {
        factElement.innerText = text;
    }
}

// Eventlistener: Wenn die Seite geladen ist, wird automatisch ein Fakt angezeigt
window.addEventListener('DOMContentLoaded', () => {
    showFact();
});
