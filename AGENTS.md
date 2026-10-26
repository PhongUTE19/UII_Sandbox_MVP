# AGENTS.md

Persistent guidelines and operational rules for AI agents working on this project.

## Project Context
- **Title**: Nghiên cứu công dụng phế thải xây dựng công trình sau phá dỡ làm vật liệu cải thiện tính chất đất trồng
- **Type**: Single-Page Academic & Environmental Research Landing Page
- **Stack**: React (Vite), Tailwind CSS v4 (`@tailwindcss/vite`), Lucide React icons
- **Scope**: Frontend-only, static assets and data. No backend, database, auth, AI APIs, or Docker.

---

## Ongoing Operating Rules

1. **Read Relevant Documentation First**:
   - Always inspect `docs/brief.md`, `docs/ui.md`, `docs/scope.md`, `docs/decisions.md`, and `docs/progress.md` before making architectural or content changes.

2. **Authoritative Requirements**:
   - Treat the latest user-confirmed requirements as authoritative over prior assumptions.

3. **Synchronize Documentation with Changes**:
   - When requirements change or new features are implemented, update affected documentation files (`docs/progress.md`, `docs/test.md`, etc.) alongside the code.

4. **Honest Verification Policy**:
   - Never claim a feature, test, or check is complete without executing verification commands and inspecting output.
   - Run relevant verification commands (e.g. `npm run build`, linting, or browser inspections) and report actual, objective results.

5. **Preserve User Changes**:
   - Preserve existing user-authored code and customizations. Never perform destructive file rewrites without confirmation.

6. **Keep `progress.md` Current**:
   - Keep `docs/progress.md` concise and up to date with current status, completed tasks, known issues, and next steps without bloating with full historical transcript logs.

7. **Flag Conflicts Early**:
   - Flag any conflicts between requirements, documentation, and existing implementation instead of silently guessing or hallucinating resolutions.

8. **Strict Scientific Integrity**:
   - Do not invent research findings, team identities, numerical experimental data, or institutional affiliations.
   - Use clearly labeled placeholders (e.g., `[Dữ liệu đang cập nhật / Placeholder]`, `[TS. Nguyễn Văn A - Đang cập nhật]`) for unconfirmed scientific claims or private personnel data.
