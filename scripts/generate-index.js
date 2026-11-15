#!/usr/bin/env node
// Generate docs/search.json + docs/repo/index.json from snap directories
import fs from 'fs';
import path from 'path';
const root = path.resolve(import.meta.dirname, '..');
const docs = path.join(root, 'docs');
const snaps = fs.readdirSync(root, {withFileTypes:true})
  .filter(d=>d.isDirectory() && fs.existsSync(path.join(root,d.name,'snapcraft.yaml')))
  .map(d=>d.name);
const index = snaps.map(name=>{
  const yaml = fs.readFileSync(path.join(root,name,'snapcraft.yaml'),'utf8');
  const ver = (yaml.match(/^version:\s*["']?([^"'\n]+)/m)||[])[1]||"0.0.0";
  const summary = (yaml.match(/^summary:\s*(.+)/m)||[])[1]||"";
  return {name, version:ver.trim(), summary:summary.trim(), snap:`repo/snaps/${name}_${ver.trim()}_amd64.snap`};
});
fs.mkdirSync(path.join(docs,'repo/snaps'),{recursive:true});
fs.writeFileSync(path.join(docs,'repo/index.json'), JSON.stringify({snaps:index},null,2));
fs.writeFileSync(path.join(docs,'search.json'), JSON.stringify(index,null,2));
console.log(`Generated index for ${index.length} snaps`);
