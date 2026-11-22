import json, re, importlib.util, pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
S = str(pathlib.Path(__file__).resolve().parent)
C = str(pathlib.Path(__file__).resolve().parent.parent)
L=json.load(open(f'{S}/logo3.json'))
# nav draws the logo starting at the tip of the C (reading order C → P → u)
pts=re.findall(r'(-?[\d.]+) (-?[\d.]+)', L['line'])[::-1]
line='M'+' L'.join(f'{x} {y}' for x,y in pts)
spec=importlib.util.spec_from_file_location('content', f'{S}/content.py'); content=importlib.util.module_from_spec(spec); spec.loader.exec_module(content)
V=dict(content.V)
import time
V['VER']=time.strftime('%Y%m%d%H%M%S')
V.update({'LOGO_FILL':L['fill'],'LOGO_LINE':line,'LOGO_VB':L['vb']})
def sub(m):
    k=m.group(1)
    if k not in V: print('MISSING', k); return m.group(0)
    return V[k]
head=open(f'{S}/v3_head.html').read()
html=re.sub(r'\{\{([A-Z0-9_]+)\}\}', sub, head+open(f'{S}/v3_body.html').read())
import i18n
missing=set()
def publish(name, page):
    # the German page at the top, the French and English ones in /fr/ and /en/
    for lang, L in i18n.LANGS.items():
        out=pathlib.Path(C)/L['folder']/name; out.parent.mkdir(exist_ok=True)
        out.write_text(i18n.localise(page, name, lang, V['SITE_URL'], missing))
publish('index.html', html)
if missing: print('UNTRANSLATED', len(missing), sorted(missing)[:8])
# Old addresses of the pages that are gone (the online shop's terms, the participation certificates): they lead home.
for old in ('partizipation.html', 'bestellbedingungen.html', 'twint/index.html'):
    for folder in ('', 'fr', 'en'):
        up = '../' * old.count('/')
        out = pathlib.Path(C)/folder/old; out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text('<!doctype html>\n<meta charset="utf-8"><meta name="robots" content="noindex"><title>Cascarup</title>\n'
                       f'<meta http-equiv="refresh" content="0; url={up}{"" if not folder else ""}index.html"><link rel="canonical" href="https://cascarup.ch/{folder + "/" if folder else ""}">\n'
                       f'<script>location.replace("{up}index.html" + location.hash)</script>\n<a href="{up}index.html">cascarup.ch</a>\n')
# one calendar file per stand, next to the page
ics_dir=pathlib.Path(C)/'assets'/'staende'; ics_dir.mkdir(parents=True, exist_ok=True)
for st in content.STANDS:
    if not st.get('cancelled'):
        (ics_dir/f"{st['date']}.ics").write_text(content.ics(st))
# The QR code on the bottle's label says https://cascarup.ch/rueckgabe. The labels stay printed for a long time, so this
# address must never go away, whatever happens to the page: it is written here on every build (never by hand) and
# leads to the return section in the visitor's language. Moving or renaming the section means changing only
# RUECKGABE_ZIEL here, never the code on the label.
RUECKGABE_ZIEL = '#rueckgabe'
RUECKGABE_SEITE = '<!doctype html>\n<!-- cascarup.ch/rueckgabe: the address on the bottle\'s QR code. It leads to the return section of the page, in the\n     visitor\'s language (French or English if the browser asks for it, German otherwise). -->\n<html lang="de-CH">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <meta name="robots" content="noindex">\n  <title>Rückgabe · Cascarup</title>\n  <link rel="canonical" href="https://cascarup.ch/#rueckgabe">\n  <meta http-equiv="refresh" content="0; url=../#rueckgabe">\n  <script>\n    (function () {\n      var l = ((navigator.languages && navigator.languages[0]) || navigator.language || \'\').toLowerCase();\n      var to = l.indexOf(\'fr\') === 0 ? \'../fr/#rueckgabe\' : l.indexOf(\'en\') === 0 ? \'../en/#rueckgabe\' : \'../#rueckgabe\';\n      location.replace(to);\n    })();\n  </script>\n  <style>html { background: #F2F0E6; color: #543520; font: 16px/1.5 system-ui, sans-serif; } a { color: #9A4F26; }</style>\n</head>\n<body>\n  <p style="margin: 40vh auto 0; text-align: center">Weiter zur <a href="../#rueckgabe">Rückgabe</a> · <a href="../fr/#rueckgabe">Retour</a> · <a href="../en/#rueckgabe">Return</a></p>\n</body>\n</html>\n'
(pathlib.Path(C)/'rueckgabe').mkdir(exist_ok=True)
(pathlib.Path(C)/'rueckgabe'/'index.html').write_text(RUECKGABE_SEITE.replace('#rueckgabe', RUECKGABE_ZIEL))
assert RUECKGABE_ZIEL in (pathlib.Path(C)/'rueckgabe'/'index.html').read_text(), 'QR-Weiterleitung fehlt'
print('built', len(html))
