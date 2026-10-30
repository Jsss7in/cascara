// Cascarup – das Bestellbuch der Partizipationsscheine (Google Apps Script, in einer Google-Tabelle).
// Die Website schickt jede Bestellung hierher: Sie wird als Zeile im Blatt «Bestellungen» abgelegt, das Team bekommt
// eine E-Mail und die Käuferin oder der Käufer eine Bestätigung mit Betrag, Code und dem Weg zum QR-Code.
// Einrichten: _build/bestellbuch/ANLEITUNG.md. Nach einer Änderung hier: Bereitstellen → Bereitstellungen verwalten →
// bearbeiten → Version «Neue Version» → Bereitstellen (die Adresse bleibt gleich).

const TEAM = 'info@cascarup.ch';
const PREIS = 15;            // CHF pro Schein, wie auf der Website (content.py PS_PRICE)
const MAX = 20;              // Scheine pro Bestellung online (PS_MAX)
const BLATT = 'Bestellungen';
const SPALTEN = ['Eingang', 'Code', 'Status', 'Betrag CHF', 'Anzahl', 'Am Ende', 'Vorname', 'Name', 'E-Mail', 'Telefon',
  'Strasse', 'PLZ', 'Ort', 'Sprache', 'Notiz'];
const STATUS = ['offen', 'bezahlt', 'Zertifikat verschickt', 'storniert'];

// Einmal von Hand ausführen: legt die Spalten, die Auswahl für den Status, die Farben und die Übersicht an.
function einrichten() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName(BLATT) || ss.insertSheet(BLATT, 0);
  sh.getRange(1, 1, 1, SPALTEN.length).setValues([SPALTEN]).setFontWeight('bold').setBackground('#E6D3B7');
  sh.setFrozenRows(1);
  sh.getRange('A2:A').setNumberFormat('dd.MM.yyyy HH:mm');
  sh.getRange('D2:D').setNumberFormat('0.00');
  sh.getRange('C2:C').setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(STATUS, true).build());
  const farbe = (status, hex) => SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=$C2="${status}"`).setBackground(hex).setRanges([sh.getRange('A2:O')]).build();
  sh.setConditionalFormatRules([farbe('offen', '#FBE3CF'), farbe('bezahlt', '#D9EED5'),
    farbe('Zertifikat verschickt', '#D3E4F4'), farbe('storniert', '#E6E6E6')]);
  sh.autoResizeColumns(1, SPALTEN.length);

  const ov = ss.getSheetByName('Übersicht') || ss.insertSheet('Übersicht', 1);
  ov.clear();
  const B = `'${BLATT}'!`;
  ov.getRange(1, 1, 9, 2).setValues([
    ['Übersicht', ''],
    ['Bestellungen (ohne storniert)', `=COUNTIFS(${B}B2:B,"<>",${B}C2:C,"<>storniert")`],
    ['Scheine bestellt (ohne storniert)', `=SUMIFS(${B}E2:E,${B}C2:C,"<>storniert")`],
    ['Bezahlt (CHF)', `=SUMIFS(${B}D2:D,${B}C2:C,"bezahlt")+SUMIFS(${B}D2:D,${B}C2:C,"Zertifikat verschickt")`],
    ['Noch nicht bezahlt (CHF)', `=SUMIFS(${B}D2:D,${B}C2:C,"offen")`],
    ['Scheine «Behalten»', `=SUMIFS(${B}E2:E,${B}F2:F,"Behalten",${B}C2:C,"<>storniert")`],
    ['Scheine «Geld zurück»', `=SUMIFS(${B}E2:E,${B}F2:F,"Geld zurück",${B}C2:C,"<>storniert")`],
    ['Zertifikate noch zu verschicken', `=COUNTIFS(${B}C2:C,"bezahlt")`],
    ['So gehts', 'Kommt in TWINT eine Zahlung, den Code aus der Mitteilung in «Bestellungen» suchen und den Status auf «bezahlt» setzen.'],
  ]);
  ov.getRange('A1').setFontWeight('bold').setFontSize(14);
  ov.getRange('B4:B5').setNumberFormat('0.00');
  ov.autoResizeColumn(1);
}

// Die Website schickt hierher (POST, JSON als Text). Was sie schickt, wird geprüft; Betrag und Wortlaut der
// E-Mails entstehen hier, nicht im Browser, damit niemand die Tabelle oder die Mails mit eigenem Inhalt füllt.
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    let d;
    try { d = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (err) { return antwort({ ok: false, error: 'json' }); }
    const text = (k, max) => String(d[k] == null ? '' : d[k]).replace(/[\r\n\t]+/g, ' ').trim().slice(0, max || 120);
    const code = text('Code', 12);
    const n = Math.round(Number(d.Anzahl));
    const email = text('email', 160);
    if (!/^PS-[A-Z2-9]{5}$/.test(code)) return antwort({ ok: false, error: 'code' });
    if (!(n >= 1 && n <= MAX)) return antwort({ ok: false, error: 'anzahl' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !text('Vorname') || !text('Name')) return antwort({ ok: false, error: 'angaben' });

    const sh = SpreadsheetApp.getActive().getSheetByName(BLATT);
    // dieselbe Bestellung zweimal (die Website versucht es noch einmal) wird nur einmal abgelegt
    // «Ich habe bezahlt» schickt dieselbe Bestellung noch einmal: dann nur vermerken, sonst ist sie schon da
    const last = sh.getLastRow();
    const codes = last > 1 ? sh.getRange(2, 2, last - 1, 1).getValues().map((r) => r[0]) : [];
    const i = codes.indexOf(code);
    if (i >= 0) {
      if (text('Gemeldet') === 'bezahlt') {
        sh.getRange(i + 2, SPALTEN.indexOf('Notiz') + 1).setValue(`Käufer meldet «bezahlt» am ${Utilities.formatDate(new Date(), 'Europe/Zurich', 'dd.MM.yyyy HH:mm')}`);
        try { MailApp.sendEmail({ to: TEAM, name: 'Cascarup Bestellbuch', subject: `Bezahlt gemeldet: ${code}`, body: `${code} meldet «bezahlt». Bitte in TWINT prüfen und im Bestellbuch den Status setzen.` }); } catch (err) { /* die Notiz steht */ }
      }
      return antwort({ ok: true, schon: true });
    }

    const o = {
      code, n, betrag: n * PREIS, email,
      ende: text('Am Ende') === 'Geld zurück' ? 'Geld zurück' : 'Behalten',
      vorname: text('Vorname'), name: text('Name'), telefon: text('Telefon', 40),
      strasse: text('Strasse'), plz: text('PLZ', 10), ort: text('Ort'), sprache: text('Sprache', 10),
    };
    sh.appendRow([new Date(), o.code, 'offen', o.betrag, o.n, o.ende, o.vorname, o.name, o.email, o.telefon,
      o.strasse, o.plz, o.ort, o.sprache, ''].map(sicher));
    SpreadsheetApp.flush();

    // erst ablegen, dann schreiben: scheitert eine E-Mail, ist die Bestellung trotzdem da
    try { mailTeam(o); } catch (err) { notiz(sh, 'Mail ans Team fehlgeschlagen'); }
    try { mailKunde(o); } catch (err) { notiz(sh, 'Bestätigung an Kunde fehlgeschlagen'); }
    return antwort({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

// Wer die Adresse im Browser öffnet, sieht, dass das Bestellbuch läuft.
function doGet() {
  return antwort({ ok: true, bestellbuch: 'Cascarup', zeit: new Date().toISOString() });
}

function antwort(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Eingaben, die mit = + - @ beginnen, würde die Tabelle als Formel lesen: als Text ablegen
function sicher(v) {
  return typeof v === 'string' && /^[=+\-@]/.test(v) ? `'${v}` : v;
}

function notiz(sh, text) {
  sh.getRange(sh.getLastRow(), SPALTEN.indexOf('Notiz') + 1).setValue(text);
}

function chf(x) { return `CHF ${x.toFixed(2)}`; }

function mailTeam(o) {
  MailApp.sendEmail({
    to: TEAM, replyTo: o.email, name: 'Cascarup Bestellbuch',
    subject: `Partizipationsschein ${o.code} · ${chf(o.betrag)} · ${o.vorname} ${o.name}`,
    body: [
      `Neue Bestellung, abgelegt im Bestellbuch (Status: offen).`, '',
      `Code: ${o.code}`, `Betrag: ${chf(o.betrag)}`, `Anzahl: ${o.n}`, `Am Ende: ${o.ende}`, '',
      `Name: ${o.vorname} ${o.name}`, `E-Mail: ${o.email}`, `Telefon: ${o.telefon}`,
      `Adresse: ${o.strasse}, ${o.plz} ${o.ort}`, `Sprache: ${o.sprache}`, '',
      `Kommt die Zahlung in TWINT mit diesem Code an: im Bestellbuch den Status auf «bezahlt» setzen.`,
    ].join('\n'),
  });
}

const KUNDE = {
  de: (o) => ({
    subject: `Cascarup: deine Bestellung ${o.code}`,
    body: [
      `Hallo ${o.vorname}`, '', `Danke, dass du Teil von Cascarup wirst! Wir haben deine Bestellung erhalten:`,
      `${o.n} Partizipationsschein${o.n > 1 ? 'e' : ''}, ${chf(o.betrag)}, am Ende: ${o.ende}.`, '',
      `So bezahlst du mit TWINT:`, `1. Öffne die TWINT-App und tippe auf «Scannen».`,
      `2. Scanne unseren QR-Code: https://cascarup.ch/twint/`, `3. Gib genau ${chf(o.betrag)} ein.`,
      `4. Schreib deinen Code ${o.code} in die Mitteilung.`, '',
      `Sobald deine Zahlung bei uns ist, gehört dein Schein dir. Wegen deines Zertifikats melden wir uns bald bei dir.`, '',
      `Fragen? Antworte einfach auf diese E-Mail.`, `Cascarup, Freiburg`,
    ].join('\n'),
  }),
  fr: (o) => ({
    subject: `Cascarup : ta commande ${o.code}`,
    body: [
      `Bonjour ${o.vorname}`, '', `Merci de rejoindre Cascarup ! Nous avons bien reçu ta commande :`,
      `${o.n} bon${o.n > 1 ? 's' : ''} de participation, ${chf(o.betrag)}, à la fin : ${o.ende === 'Behalten' ? 'je le garde' : 'remboursement'}.`, '',
      `Pour payer avec TWINT :`, `1. Ouvre l’app TWINT et touche « Scanner ».`,
      `2. Scanne notre code QR : https://cascarup.ch/twint/`, `3. Saisis exactement ${chf(o.betrag)}.`,
      `4. Écris ton code ${o.code} dans le message.`, '',
      `Dès que ton paiement nous parvient, ton bon est souscrit. Nous te contacterons bientôt au sujet de ton certificat.`, '',
      `Des questions ? Réponds simplement à cet e-mail.`, `Cascarup, Fribourg`,
    ].join('\n'),
  }),
  en: (o) => ({
    subject: `Cascarup: your order ${o.code}`,
    body: [
      `Hello ${o.vorname}`, '', `Thank you for joining Cascarup! We have received your order:`,
      `${o.n} participation certificate${o.n > 1 ? 's' : ''}, ${chf(o.betrag)}, at the end: ${o.ende === 'Behalten' ? 'keep it' : 'money back'}.`, '',
      `How to pay with TWINT:`, `1. Open the TWINT app and tap “Scan”.`,
      `2. Scan our QR code: https://cascarup.ch/twint/`, `3. Enter exactly ${chf(o.betrag)}.`,
      `4. Write your code ${o.code} in the message.`, '',
      `As soon as your payment arrives, your certificate is yours. We’ll be in touch soon about your certificate document.`, '',
      `Questions? Just reply to this e-mail.`, `Cascarup, Fribourg`,
    ].join('\n'),
  }),
};

function mailKunde(o) {
  const lang = /^fr/.test(o.sprache) ? 'fr' : /^en/.test(o.sprache) ? 'en' : 'de';
  const m = KUNDE[lang](o);
  MailApp.sendEmail({ to: o.email, replyTo: TEAM, name: 'Cascarup', subject: m.subject, body: m.body });
}
