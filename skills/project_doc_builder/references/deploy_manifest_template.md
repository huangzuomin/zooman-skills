# Deploy Manifest Template

Use this template when generating `docs/deploy_manifest.md` as part of a full OpenClaw-native project document set.

Allowed `Deployment Mode` values:

- `skill_sync`
- `agent_workspace_sync`
- `agent_skill_sync`
- `documentation_only`
- `custom_manual`

## Template

~~~markdown
# Deploy Manifest

## Project

<project-name>

## Artifact Type

OpenClaw Skill / OpenClaw sub-agent workspace / Both

## Development Repository

```text
~/projects/openclaw-apps/<project-name>
```

## Source Package

```text
<source-package>
```

## Runtime Target

```text
<runtime-target>
```

## Deployment Mode

```text
<skill_sync | agent_workspace_sync | agent_skill_sync | documentation_only | custom_manual>
```

## Pre-deployment Requirements

- Delivery audit must be PASS.
- If audit result is PASS_WITH_WARNINGS, user must explicitly approve deployment.
- `bash scripts/validate.sh` must pass.
- Runtime target must be confirmed.
- Backup must be created before deployment.

## Files Allowed to Deploy

- <allowed-file-or-directory>

## Files Never Deploy

- `.git/`
- `.env`
- `.env.*`
- `credentials/`
- `secrets/`
- `*.pem`
- `*.key`
- `node_modules/`
- `__pycache__/`
- `*.log`
- `docs/`

## Backup Rule

Before deployment, create a timestamped backup:

```text
<runtime-target>.backup.<timestamp>
```

## Deployment Strategy

Conservative sync by default:

- Copy approved files.
- Skip forbidden files.
- Do not delete target files unless explicitly approved.

## Post-deployment Validation

```text
To be confirmed.
```

Do not invent OpenClaw CLI commands.

## Rollback

If deployment fails, restore from the backup created during this deployment.

## Deployment Record

Append deployment result to:

```text
docs/deploy_log.md
```
~~~

## Artifact Defaults

### OpenClaw Skill

Use these defaults when the project is a Skill and the names are known or can be safely inferred:

- Development Repository: `~/projects/openclaw-apps/<project-name>`
- Source Package: `openclaw/skill/`
- Runtime Target: `~/.openclaw/workspace/skills/<skill-name>`
- Deployment Mode: `skill_sync`
- Files Allowed to Deploy: `SKILL.md`, `scripts/`, `resources/`, `references/`
- Files Never Deploy: use the Common Files Never Deploy list.

### OpenClaw Sub-agent Workspace

Use these defaults when the project is an agent and the names are known or can be safely inferred:

- Development Repository: `~/projects/openclaw-apps/<project-name>`
- Source Package: `openclaw/agent/`
- Runtime Target: `~/.openclaw/workspace-<agent-name>`
- Deployment Mode: `agent_workspace_sync`
- Files Allowed to Deploy: `AGENTS.md`, `SOUL.md`, `IDENTITY.md`, `USER.md`, `TOOLS.md`, `skills/`, `resources/`
- Files Never Deploy: use the Common Files Never Deploy list.

### Both

Generate separate deployment sections for:

- Skill package deployment.
- Agent workspace deployment.

If the structure is unclear, set `Deployment Mode` to `custom_manual` and list the unresolved structure under `Open Questions`.

## Common Files Never Deploy

Use this baseline for every artifact type:

- `.git/`
- `.env`
- `.env.*`
- `credentials/`
- `secrets/`
- `*.pem`
- `*.key`
- `node_modules/`
- `__pycache__/`
- `*.log`
- `docs/`
