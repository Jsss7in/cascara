import json, re, importlib.util, pathlib, sys
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
html=open(f'{S}/v3_head.html').read()+open(f'{S}/v3_body.html').read()
def sub(m):
    k=m.group(1)
    if k not in V: print('MISSING', k); return m.group(0)
    return V[k]
html=re.sub(r'\{\{([A-Z0-9_]+)\}\}', sub, html)
open(f'{C}/index.html','w').write(html)
print('built', len(html))
