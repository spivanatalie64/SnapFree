#!/bin/bash
set -euo pipefail
BASE="https://snapfree.acreetionos.org"
echo "[snapfree] Adding SnapFree repository..."
if [ -f "$BASE/snapfree.assert" ]; then
  curl -fsSL "$BASE/snapfree.assert" -o /tmp/snapfree.assert
  sudo snap ack /tmp/snapfree.assert || echo "[snapfree] snap ack failed — falling back to --dangerous installs"
fi
echo "[snapfree] Done. Install snaps with: sudo snap install --dangerous <snap>.snap"
echo "[snapfree] Or browse: $BASE"
