#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
URL="http://127.0.0.1:4173/study/"
LOG="${TMPDIR:-/tmp}/study-manager.log"

if ! python3 -c "import urllib.request; urllib.request.urlopen('${URL}', timeout=0.4)" >/dev/null 2>&1; then
  if command -v systemctl >/dev/null 2>&1 && systemctl --user start prompt-library.service >/dev/null 2>&1; then
    :
  else
    nohup python3 "$ROOT/server.py" >"$LOG" 2>&1 &
  fi

  for _ in {1..50}; do
    if python3 -c "import urllib.request; urllib.request.urlopen('${URL}', timeout=0.4)" >/dev/null 2>&1; then
      break
    fi
    sleep 0.1
  done
fi

xdg-open "$URL" >/dev/null 2>&1 &
