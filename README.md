# SnapFree

**SnapFree** is a community Snap repository — free, open, and built for everyone. The snap equivalent of [FlatFree](https://github.com/spivanatalie64/FlatFree).

Canonical's Snap Store is proprietary, centralized, and gatekept. **SnapFree is the alternative.**

**We accept AI-assisted submissions.** We do not police how code is written. If it builds, if it's free software — it belongs here.

Website: **https://snapfree.acreetionos.org** — also at **https://snapfree.pages.dev**

## Adding SnapFree to your system

**One-line install (adds assertion automatically):**
```bash
curl -fsSL https://snapfree.acreetionos.org/install.sh | bash
```

Or manually — add our store assertion and install:
```bash
curl -fsSL https://snapfree.acreetionos.org/snapfree.assert -o snapfree.assert
sudo snap ack snapfree.assert
sudo snap install snapfree --edge  # example
# Or for any SnapFree snap (dangerous flag not needed once store is ack'd via brand store proxy):
snap install acreetion-media-writer --dangerous  # fallback direct install
```

Direct `.snap` install (no store required):
```bash
curl -LO https://snapfree.acreetionos.org/repo/snaps/acreetion-media-writer_5.3.1_amd64.snap
sudo snap install --dangerous acreetion-media-writer_5.3.1_amd64.snap
```

## Available Snaps

| Snap | Description |
|------|-------------|
| [`acreetion-media-writer`](./acreetion-media-writer) | AcreetionOS Media Writer — Write OS images to USB drives |
| [`cinnamon-terminal`](./cinnamon-terminal) | Cinnamon Terminal — GNOME Terminal fork for Cinnamon |

## Why SnapFree?

The Snap Store is closed-source server-side, centrally controlled by Canonical, and subject to arbitrary takedowns and policy shifts. Third-party snap repos are deliberately made difficult. SnapFree fixes that.

- **Open index** — `repo/index.json` lists every snap with URL, hash, and assertions
- **No gatekeeping** — if it builds with snapcraft and is free software, it's in
- **AI welcome** — same policy as FlatFree. Any tool used by a human is human work.

## Submitting a Snap

Open a pull request adding a directory with your snap name and a `snapcraft.yaml`:

```
my-app/
  snapcraft.yaml
  README.md
```

CI validates with `snapcraft lint` / `review-tools` and builds the snap. No review board. No moral policing.

## CLI Tool

```bash
curl -L https://github.com/spivanatalie64/SnapFree/releases/download/v1.0.0/snapfree-submit -o snapfree-submit
chmod +x snapfree-submit
./snapfree-submit --help
```

## License

Unless otherwise noted, all manifests are GPL-2.0.
