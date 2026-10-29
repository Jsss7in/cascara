# Bestellbuch einrichten (einmal, ca. 5 Minuten)

Danach landet jede Bestellung der Partizipationsscheine als Zeile in einer Google-Tabelle, ihr bekommt eine E-Mail,
und die Käuferin oder der Käufer eine Bestätigung. FormSubmit braucht es dann nur noch als Reserve.

1. Mit dem Google-Konto, das die Bestellungen sehen soll, <https://sheets.new> öffnen. Die Tabelle «Cascarup Bestellbuch» nennen.
2. Menü **Erweiterungen → Apps Script**.
3. Alles im Editor löschen und den ganzen Inhalt von `Code.gs` (dieser Ordner) einfügen. Speichern (Disketten-Symbol).
4. Oben in der Auswahl die Funktion **einrichten** wählen und **Ausführen** klicken. Google fragt nach Berechtigungen:
   «Berechtigungen prüfen» → Konto wählen → «Erweitert» → «Zu … wechseln (unsicher)» → «Zulassen».
   (Die Warnung kommt, weil das Skript von euch ist und nicht von Google geprüft wurde.)
5. **Bereitstellen → Neue Bereitstellung** → Zahnrad → **Web-App**.
   Ausführen als: **Ich**. Zugriff: **Jeder**. → **Bereitstellen**.
6. Die **Web-App-URL** kopieren (endet auf `/exec`) und Claude schicken. Sie kommt in `content.py` bei `PS_SHEET`.

Im Alltag: Kommt in TWINT eine Zahlung, im Blatt «Bestellungen» den Namen oder den Code suchen und den Status auf
«bezahlt» setzen (später «Zertifikat verschickt»). Die Übersicht zeigt die Summen.
