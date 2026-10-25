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
V.update(NAV_PS=content.nav('index.html'), MENU_PS=content.menu('index.html'), FOOTER_PS=content.footer('index.html'),
         PS_MAIN=content.ps_main())
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
# the participation certificates: their own page, with its own title and description
ps_head=(head.replace('<title>Cascarup – Sirup aus der Kaffeekirsche · Fribourg</title>', '<title>Werde Teil von Cascarup – Partizipationsschein ab CHF 15</title>')
  .replace('{{SITE_URL}}"', '{{SITE_URL}}partizipation.html"'))
ps_head=re.sub(r'(<meta name="description" content=")[^"]*', r'\1Werde Teil von Cascarup: Mit einem Partizipationsschein ab CHF 15 gibst du unserem Schülerunternehmen das Startkapital. Am Ende des Jahres bekommst du dein Geld zurück, wenn du möchtest.', ps_head)
ps_head=re.sub(r'(<meta property="og:title" content=")[^"]*', r'\1Werde Teil von Cascarup', ps_head).replace('assets/og.jpg', 'assets/og-ps.jpg')
ps_head=re.sub(r'(<meta property="og:description" content=")[^"]*', r'\1Partizipationsschein ab CHF 15. Ein Schülerunternehmen aus Fribourg.', ps_head)
ps=re.sub(r'\{\{([A-Z0-9_]+)\}\}', sub, ps_head+open(f'{S}/ps_body.html').read())
publish('partizipation.html', ps)
if missing: print('UNTRANSLATED', len(missing), sorted(missing)[:8])
(pathlib.Path(C)/'assets'/'ps').mkdir(parents=True, exist_ok=True)
(pathlib.Path(C)/'assets'/'ps'/'rosette.svg').write_text(content.rosette_svg())
# one calendar file per stand, next to the page
ics_dir=pathlib.Path(C)/'assets'/'staende'; ics_dir.mkdir(parents=True, exist_ok=True)
for st in content.STANDS:
    (ics_dir/f"{st['date']}.ics").write_text(content.ics(st))
print('built', len(html))
