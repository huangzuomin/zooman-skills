---
name: initialize_openclaw_dev_env
description: Use this skill when the user wants to initialize a VM-based development repository for an OpenClaw-native Skill, sub-agent, or app using the standard OpenClaw development template.
---

# Initialize OpenClaw Development Environment

## When to use

Use this skill to initialize a separate VM-based development repository for an OpenClaw-native Skill, sub-agent, or combined delivery from the standard OpenClaw development template.

Do not use this skill to create or edit an OpenClaw runtime workspace directly. Daily development must happen under a development repository such as `~/projects/openclaw-apps/<project-name>`, not under `~/.openclaw/workspace` or `~/.openclaw/workspace-*`.

## Required inputs

Collect these values from the user or infer them only when the request states them clearly:

- Project name.
- Artifact type: `skill`, `agent`, or `both`.
- Runtime target:
  - Skill: `~/.openclaw/workspace/skills/<skill-name>`.
  - Agent: `~/.openclaw/workspace-<agent-name>`.

Ask at most 5 focused questions when required values are missing or unsafe to infer.

## Defaults

Use these defaults unless the user provides explicit alternatives:

- Template path: `~/projects/openclaw-apps/openclaw-app-template`.
- Projects root: `~/projects/openclaw-apps`.

For `skill` or `both`, collect a `skill_name` in `snake_case`. For `agent` or `both`, collect an `agent-name` in `kebab-case`. If the user provides a project goal or manual runtime test command, write it into the appropriate project docs. If no manual runtime test command is provided, keep a clear placeholder and do not invent one.

## Preflight checklist

Before creating or modifying a project directory, run and report the relevant results:

```bash
pwd
hostname
whoami
test -d ~/projects/openclaw-apps/openclaw-app-template
```

Also verify:

- The projects root exists or can be created with `mkdir -p`.
- The target project directory does not already exist.
- The artifact type is exactly `skill`, `agent`, or `both`.
- The runtime target matches the artifact type.

If the template path does not exist, stop with:

```text
Template directory not found. Please verify the template path.
```

Do not download templates automatically.

## Workflow

1. Run the preflight checklist.
2. Create the projects root if needed with `mkdir -p <projects-root>`.
3. Copy the template into the new development repository:

```bash
cd ~/projects/openclaw-apps
cp -a openclaw-app-template <project-name>
cd <project-name>
```

4. Initialize Git only if the copied project is not already a Git repository:

```bash
git init
git status
```

5. Customize the required project files.
6. Run static validation:

```bash
bash scripts/validate.sh
```

If validation fails, inspect the failure, fix project files, and rerun validation. Try at most 3 automatic fix cycles. If it still fails, stop and report the failure.

## File customization rules

Customize `docs/project_spec.md` with:

- Goal.
- Artifact Type.
- Target User.
- Input.
- Output.
- Workflow.
- Non-goals.
- Success Criteria.

When business details are missing, use clear placeholders instead of inventing requirements.

Customize `docs/openclaw-contract.md` according to artifact type.

For a Skill:

```text
Artifact Type: OpenClaw Skill
Skill source path: openclaw/skill/
Skill deployment path: ~/.openclaw/workspace/skills/<skill-name>
Skill runtime entrypoint: openclaw/skill/SKILL.md
Deployment script: scripts/deploy-skill.sh
```

For a sub-agent:

```text
Artifact Type: OpenClaw sub-agent workspace
Agent workspace source path: openclaw/agent/
Agent workspace deployment path: ~/.openclaw/workspace-<agent-name>
Agent runtime entrypoint: openclaw/agent/AGENTS.md
Deployment script: scripts/deploy-agent.sh
```

For `both`, keep both contracts and clearly identify the primary deliverable.

For deployment, document the script commands but do not manually copy files into `~/.openclaw/`:

```bash
SKILL_NAME=<skill-name> bash scripts/deploy-skill.sh
AGENT_NAME=<agent-name> bash scripts/deploy-agent.sh
```

For `skill`, customize `openclaw/skill/SKILL.md` with frontmatter:

```yaml
---
name: <skill_name>
description: <clear trigger condition>
---
```

The Skill body must include:

- When to use.
- Inputs.
- Workflow.
- Output Standard.
- Safety.
- Validation.

For `agent`, customize these files so they no longer contain template-only placeholder content:

- `openclaw/agent/AGENTS.md`.
- `openclaw/agent/SOUL.md`.
- `openclaw/agent/IDENTITY.md`.
- `openclaw/agent/USER.md`.
- `openclaw/agent/TOOLS.md`.

If the user has not provided a complete agent definition, write a minimal usable version and mark the fields that need completion.

## Project manifest

Create or update `docs/project_manifest.md` with this structure:

```markdown
# Project Manifest

## Project Name

## Artifact Type

## Created From Template

## Template Path

## Project Path

## Runtime Target

## Skill Name

## Agent Name

## Key Files

## Validation Command

## Deployment Command

## Manual Runtime Test Command

## Initialization Notes
```

Use this manifest as the handoff record for future Codex, Claude Code, or Cursor sessions.

## Validation

The initialized project is not ready until this command has passed:

```bash
bash scripts/validate.sh
```

Before completion, also verify:

- `AGENTS.md` exists.
- `docs/project_spec.md` exists.
- `docs/openclaw-contract.md` exists.
- `docs/test_plan.md` exists.
- `docs/decision_log.md` exists.
- `docs/project_manifest.md` exists.
- The correct deployable package exists:
  - Skill: `openclaw/skill/SKILL.md`.
  - Agent: `openclaw/agent/AGENTS.md`.
- No unresolved template placeholders remain in core fields such as project name, skill name, agent name, artifact type, and runtime target.
- No secrets were written.
- No files under `~/.openclaw/` were modified.
- No OpenClaw CLI commands were invented.

Runtime validation is optional during initialization. If requested, only run the exact manual runtime test command written in `docs/openclaw-contract.md`.

## Definition of ready

The initialized development repository is ready when:

- The project was copied from the standard template.
- Development files live under the independent project repository.
- OpenClaw runtime paths are documented as deployment targets only.
- Required docs and deployable package files are customized.
- `docs/project_manifest.md` records the initialization.
- `bash scripts/validate.sh` passes.
- Deployment commands are documented but not executed unless the user requests deployment.

## Deployment boundary

Do not directly edit, delete, or manually copy files into:

```text
~/.openclaw/workspace
~/.openclaw/workspace-*
```

Deployment into OpenClaw runtime locations may happen only through the template-provided deployment scripts and only when the user asks for deployment.

## Forbidden behaviors

Do not:

- Treat an OpenClaw runtime workspace as the development repository.
- Overwrite an existing project directory without explicit permission.
- Download templates automatically.
- Invent OpenClaw CLI commands, flags, or runtime tests.
- Claim runtime validation passed unless the exact command was actually run.
- Hard-code API keys, tokens, SSH keys, cookies, or credentials.
- Remove existing template files unless necessary.
- Create unrelated web apps, servers, package managers, or frameworks.
- Delete or overwrite user data without explicit confirmation.

## Completion report

At the end, report:

- Project path.
- Artifact type.
- Skill name and/or agent name.
- Runtime target.
- Customized files.
- Commands run.
- Validation result.
- Anything not validated.
- Next deployment command.

Also generate this handoff prompt for the next coding session:

```text
Read AGENTS.md, docs/project_spec.md, docs/openclaw-contract.md, docs/test_plan.md, and docs/project_manifest.md.

This project is an OpenClaw <skill / agent / both> project.

Work only inside this development repository.

Do not edit ~/.openclaw directly.

Do not invent OpenClaw CLI commands.

Implement the next development task according to docs/project_spec.md.

Run bash scripts/validate.sh before finishing.

Report files changed, commands run, validation result, and anything not validated.
```
