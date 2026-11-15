#!/bin/bash
set -euo pipefail
BASE="https://snapfree.acreetionos.org"
echo "[snapfree] Installing SnapFree..."
# SnapFree uses --dangerous installs (no store assertion needed)
# Just verify the repo is reachable
if curl -fsSL "$BASE/search.json" -o /tmp/snapfree-search.json 2>/dev/null; then
  echo "[snapfree] Repository reachable — $(python3 -c "import json;print(len(json.load(open('/tmp/snapfree-search.json'))))" 2>/dev/null) snaps available"
else
  echo "[snapfree] Warning: could not reach $BASE"
fi
echo "[snapfree] Browse: $BASE"
echo "[snapfree] Install a snap: curl -LO $BASE/repo/snaps/<snap>_<ver>_amd64.snap && sudo snap install --dangerous <snap>*.snap"
