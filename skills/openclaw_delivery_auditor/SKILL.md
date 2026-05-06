---
name: openclaw_delivery_auditor
description: Use this skill when the user wants to audit an OpenClaw-native Skill, sub-agent, or app development repository before deployment into an OpenClaw runtime workspace.
---

# OpenClaw Delivery Auditor

## Core Mission

Act as a fail-closed delivery gate for OpenClaw-native repositories. Audit the current development result before deployment and output exactly one result: `PASS`, `PASS_WITH_WARNINGS`, or `FAIL`.

Do not write code, deploy, edit runtime workspaces, or repair findings unless the user explicitly changes the task. This skill judges deployment readiness only.

## Required Inputs

Prefer explicit user input. If missing, infer only from repository documents.

- Development repository path.
- Artifact Type: `skill`, `agent`, or `both`.
- Runtime target path.
- Validation command, defaulting to `bash scripts/validate.sh`.
- Deployment manifest path, defaulting to `docs/deploy_manifest.md`.

If these cannot be inferred from `AGENTS.md`, `docs/project_manifest.md`, `docs/project_spec.md`, `docs/openclaw-contract.md`, `docs/test_plan.md`, `docs/deploy_manifest.md`, `docs/decision_log.md`, or `docs/handoff.md`, return `FAIL` and list the missing information.

## Audit Workflow

1. Inspect repository structure before deciding artifact type or runtime boundary.
2. Read the required project documents and deployment manifest.
3. Load `references/audit_checklist.md` for the detailed checklist.
4. Check structure, specification consistency, deployment readiness, sensitive-file risk, and OpenClaw command policy.
5. Run the validation command. Do not claim validation ran unless it actually ran.
6. Produce a Markdown audit report. Save it to `docs/delivery_audit_report.md` only if the user asks.

## Files to Inspect

Required common files:

- `AGENTS.md`
- `docs/project_spec.md`
- `docs/openclaw-contract.md`
- `docs/test_plan.md`
- `docs/decision_log.md`
- `docs/deploy_manifest.md`

Recommended files:

- `docs/project_manifest.md`
- `docs/handoff.md`
- `docs/deploy_log.md`

For `skill` artifacts, require `openclaw/skill/SKILL.md` and verify its YAML frontmatter includes `name` and `description`; `name` must be snake_case and `description` must describe triggering conditions.

For `agent` artifacts, require:

- `openclaw/agent/AGENTS.md`
- `openclaw/agent/IDENTITY.md`
- `openclaw/agent/SOUL.md`
- `openclaw/agent/TOOLS.md`

Recommend but do not always fail on missing:

- `openclaw/agent/USER.md`
- `openclaw/agent/skills/`
- `openclaw/agent/resources/`

## Result Rules

Use `FAIL` when any blocking issue exists, including missing required documents, missing or incomplete `docs/deploy_manifest.md`, unclear artifact type, unclear source or runtime target, failed or missing validation command, high-risk sensitive files, unconfirmed destructive commands, missing Skill frontmatter, or missing required agent identity files.

Use `PASS_WITH_WARNINGS` only when all core deployment gates pass and remaining issues are non-blocking, such as missing recommended handoff docs, incomplete non-critical tests, or documentation TODOs that do not affect deployment safety.

Use `PASS` only when required files are present, artifact type and runtime target are clear, deployment manifest is complete, validation passes, no sensitive files are found, no unconfirmed OpenClaw commands are found, and the deployment boundary is explicit.

If unsure, fail closed.

## Output Format

Always output this Markdown report shape:

```markdown
# Delivery Audit Report

## Result

PASS / PASS_WITH_WARNINGS / FAIL

## Summary

...

## Checked Repository

...

## Artifact Type

...

## Runtime Target

...

## Deployment Mode

...

## Validation Command

...

## Deployment Command

...

## Passed Checks

- ...

## Warnings

- ...

## Failed Checks

- ...

## Blocking Issues

- ...

## Required Fixes Before Deployment

1. ...

## Recommended Next Step

...

## Audit Notes

...
```

If the user asks to save the report, write it to `docs/delivery_audit_report.md`.

## Safety Rules

Do not print secrets, tokens, private keys, cookies, or file contents from suspicious sensitive files. Report only paths and risk levels.

Do not invent OpenClaw CLI commands. Only treat commands as confirmed when they are explicitly listed in `docs/openclaw-contract.md` or `docs/deploy_manifest.md`.

Default to running only `bash scripts/validate.sh` unless the user or repository documents explicitly confirm another validation command.

## Forbidden Behaviors

Do not:

- Deploy the project.
- Modify `~/.openclaw/` or any runtime workspace.
- Auto-fix findings unless explicitly asked.
- Print secret contents.
- Invent commands, paths, validation results, or deployment success.
- Bypass `docs/deploy_manifest.md`.
- Ignore a failed validation command.
- Give a vague release recommendation for a `FAIL` result.

## Completion Checklist

Before finishing, ensure:

- The report includes one clear result.
- All blocking issues are listed.
- Validation command status is truthful.
- Sensitive-file findings omit contents.
- Deployment readiness is judged from documents and actual checks, not assumptions.
- Files changed by the audit are limited to `docs/delivery_audit_report.md` when saving was requested.
