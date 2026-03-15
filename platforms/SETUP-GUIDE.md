# Kazi's Agents Army — Platform Setup Guide

> **Version**: 2.0 | **10 Agents** | **6 Platforms** | **Synthesized from 700+ agents, 860+ skills, 11 AI platforms**
> **Author**: Kazi (mk-knight23) | **Repo**: https://github.com/mk-knight23/Kazis-Agents-Army

---

## Quick Overview

This folder contains ready-to-use configurations that turn all 10 agents from Kazi's Agents Army into custom skills/instructions for 6 major AI coding platforms:

| Platform | Config File | Location |
|----------|------------|----------|
| **Claude Code** | `CLAUDE.md` | Project root |
| **OpenAI Codex** | `AGENTS.md` | Project root |
| **Cursor** | `.cursorrules` + `.cursor/rules/*.mdc` | Project root |
| **GitHub Copilot** | `.github/copilot-instructions.md` | Project root |
| **Google Antigravity** | `.gemini/GEMINI.md` | Project root |
| **OpenClaw** | `skills/*/SKILL.md` | `~/.openclaw/skills/` |

---

## 1. Claude Code

Claude Code reads `CLAUDE.md` from the project root at the start of every session.

### Setup
```bash
# Copy to your project root
cp platforms/claude-code/CLAUDE.md /path/to/your-project/CLAUDE.md
```

### How It Works
- Claude Code automatically reads the file on session start
- All 10 agents are defined with activation triggers and methodologies
- Includes working agreements and quality standards
- Works with Claude Code CLI and Cowork mode

### Advanced
- Place in `~/.claude/CLAUDE.md` for global instructions across all projects
- Use `@path/to/import` syntax to import additional files
- Run `/init` in Claude Code to merge with auto-generated context

---

## 2. OpenAI Codex

Codex reads `AGENTS.md` from the project root before doing any work.

### Setup
```bash
# Copy to your project root
cp platforms/codex/AGENTS.md /path/to/your-project/AGENTS.md
```

### How It Works
- Codex reads AGENTS.md before every task
- Agent roster with invocation keywords
- Quality standards and working agreements
- Supports the Codex CLI and Codex in ChatGPT

### Advanced
- Place in `~/.codex/AGENTS.md` for global defaults
- Override per-project with `AGENTS.override.md`
- Set `project_doc_max_bytes` in `~/.codex/config.toml` if file is large

---

## 3. Cursor

Cursor supports both legacy `.cursorrules` (single file) and modern `.cursor/rules/*.mdc` (multiple files).

### Setup
```bash
# Option A: Legacy (single file — works everywhere)
cp platforms/cursor/.cursorrules /path/to/your-project/.cursorrules

# Option B: Modern (recommended — supports glob patterns)
mkdir -p /path/to/your-project/.cursor/rules
cp platforms/cursor/.cursor/rules/kazis-agents-army.mdc /path/to/your-project/.cursor/rules/
```

### How It Works
- Rules inject as persistent context into every AI request
- Agent triggers match automatically based on task keywords
- The `.mdc` format supports YAML frontmatter with glob patterns
- Both formats are provided for compatibility

### Advanced
- Create per-directory rules for different project areas
- Add more `.mdc` files for specific frameworks or conventions
- Rules cascade: Team Rules > Project Rules > User Rules > Legacy

---

## 4. GitHub Copilot

Copilot reads `.github/copilot-instructions.md` for repository-wide instructions.

### Setup
```bash
# Copy to your project
mkdir -p /path/to/your-project/.github
cp platforms/copilot/.github/copilot-instructions.md /path/to/your-project/.github/
```

### How It Works
- Copilot reads the file automatically for all AI interactions
- Agent roster with capabilities and activation triggers
- Code standards applied to suggestions and reviews
- Works in VS Code, JetBrains, and GitHub.com

### Advanced
- Add `*.instructions.md` files for path-specific rules (e.g., `frontend.instructions.md`)
- Use YAML frontmatter to control which files rules apply to
- Works with Copilot Chat, code completion, and Agent Mode

---

## 5. Google Antigravity

Antigravity reads `.gemini/GEMINI.md` for project-level instructions.

### Setup
```bash
# Copy to your project root
mkdir -p /path/to/your-project/.gemini
cp platforms/antigravity/.gemini/GEMINI.md /path/to/your-project/.gemini/
```

### How It Works
- Antigravity reads GEMINI.md at session start
- All 10 agents with keyword triggers for automatic activation
- Works in both Editor View and Manager View (agent-first mode)
- Compatible with Gemini 3 Pro, Claude Sonnet 4.5, and GPT-OSS

### Advanced
- Create skills in `.agents/skills/` with `SKILL.md` files for deeper agent expertise
- Use `.agents/workflows/` for step-by-step automated workflows
- Works with Antigravity's multi-agent parallel execution

---

## 6. OpenClaw

OpenClaw uses skill folders with `SKILL.md` files containing YAML frontmatter.

### Setup
```bash
# Copy all 10 skills to your OpenClaw skills directory
cp -r platforms/openclaw/skills/* ~/.openclaw/skills/

# Or to a project-specific location
cp -r platforms/openclaw/skills/* /path/to/your-project/.openclaw/skills/
```

### Individual Skills
| Skill Folder | Agent | Description |
|-------------|-------|-------------|
| `zeus/` | ZEUS | Project orchestration, Phase 0-6, LOKI mode |
| `atlas/` | ATLAS | Full-stack engineering, 15+ languages |
| `sentinel/` | SENTINEL | Security, compliance, threat modeling |
| `forge/` | FORGE | DevOps, CI/CD, cloud, Kubernetes |
| `nexus/` | NEXUS | AI/ML, LLM apps, RAG, evals |
| `pixel/` | PIXEL | Design, UX, accessibility |
| `pulse/` | PULSE | Product, growth, marketing |
| `titan/` | TITAN | Testing, QA, verification |
| `hermes/` | HERMES | Automation, integrations, bots |
| `oracle/` | ORACLE | Research, strategy, intelligence |

### How It Works
- OpenClaw auto-detects skills from the skills directory
- Each skill triggers based on keywords in the description
- Skills load into the agent's context when activated
- Works with WhatsApp, Slack, Discord, Telegram, Signal

### Advanced
- Add `scripts/` folders for executable automations
- Add `references/` folders for supplementary docs
- Publish to ClawHub for community sharing

---

## Universal Setup (All Platforms at Once)

If you want to enable ALL platforms for your project simultaneously:

```bash
PROJECT_ROOT="/path/to/your-project"

# Claude Code
cp platforms/claude-code/CLAUDE.md "$PROJECT_ROOT/"

# OpenAI Codex
cp platforms/codex/AGENTS.md "$PROJECT_ROOT/"

# Cursor
cp platforms/cursor/.cursorrules "$PROJECT_ROOT/"
mkdir -p "$PROJECT_ROOT/.cursor/rules"
cp platforms/cursor/.cursor/rules/*.mdc "$PROJECT_ROOT/.cursor/rules/"

# GitHub Copilot
mkdir -p "$PROJECT_ROOT/.github"
cp platforms/copilot/.github/copilot-instructions.md "$PROJECT_ROOT/.github/"

# Google Antigravity
mkdir -p "$PROJECT_ROOT/.gemini"
cp platforms/antigravity/.gemini/GEMINI.md "$PROJECT_ROOT/.gemini/"

# OpenClaw (user-level)
cp -r platforms/openclaw/skills/* ~/.openclaw/skills/ 2>/dev/null || true

echo "All 6 platforms configured with Kazi's Agents Army!"
```

---

## File Sizes

| Platform | File(s) | Lines |
|----------|---------|-------|
| Claude Code | CLAUDE.md | ~200 |
| OpenAI Codex | AGENTS.md | ~120 |
| Cursor | .cursorrules + .mdc | ~160 + 30 |
| GitHub Copilot | copilot-instructions.md | ~100 |
| Google Antigravity | GEMINI.md | ~170 |
| OpenClaw | 10 × SKILL.md | ~90 each |

---

## The 10 Agents

| # | Agent | Domain | Color |
|---|-------|--------|-------|
| 01 | **ZEUS** | Orchestration, Strategy, Phase 0-6 | Cyan |
| 02 | **ATLAS** | Full-Stack Engineering (15+ langs) | Purple |
| 03 | **SENTINEL** | Security, Compliance, Zero Trust | Red |
| 04 | **FORGE** | DevOps, Cloud, Infrastructure | Orange |
| 05 | **NEXUS** | AI/ML, LLM, RAG, Data | Indigo |
| 06 | **PIXEL** | Design, UX, Accessibility | Pink |
| 07 | **PULSE** | Product, Growth, Marketing | Green |
| 08 | **TITAN** | Testing, QA, Verification | Yellow |
| 09 | **HERMES** | Automation, Integrations, Bots | Teal |
| 10 | **ORACLE** | Research, Strategy, Intelligence | Violet |

---

*Synthesized from 700+ agents, 860+ skills, 11 AI platforms. Built by Kazi.*
