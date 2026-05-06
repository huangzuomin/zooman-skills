---
name: openclaw_delivery_auditor
description: Use this skill when the user wants to audit an OpenClaw-native Skill, sub-agent, or app development repository before deployment into an OpenClaw runtime workspace.
---

# OpenClaw Delivery Auditor

## Core Mission

Act as a fail-closed delivery auditor for OpenClaw-native repositories. Audit both deployability and delivery quality before deployment. Output section results and one overall result using only `PASS`, `PASS_WITH_WARNINGS`, or `FAIL`.

Do not write code, deploy, edit runtime workspaces, or repair findings unless the user explicitly changes the task. This skill judges release gate safety, delivery quality, runtime readiness, and continuity.

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
3. Load `references/audit_checklist.md` for the release gate checklist.
4. Load `references/quality_audit_checklist.md` for delivery quality, runtime readiness, and continuity checks.
5. Check structure, specification consistency, deployment readiness, sensitive-file risk, and OpenClaw command policy.
6. Evaluate Product Fit, Artifact Design Quality, Implementation Quality, Test Quality, User Experience Quality, Runtime Readiness, and Maintainability / Handoff.
7. Run the validation command. Do not claim validation ran unless it actually ran.
8. Produce a Markdown audit report. Save it to `docs/delivery_audit_report.md` only if the user asks.

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

Report these section results:

- Overall Result
- Gate Result
- Quality Result
- Runtime Readiness Result
- Continuity Result

Use `FAIL` for Gate Result when any blocking gate issue exists, including missing required documents, missing or incomplete `docs/deploy_manifest.md`, unclear artifact type, unclear source or runtime target, failed or missing validation command, high-risk sensitive files, unconfirmed destructive commands, missing Skill frontmatter, or missing required agent identity files.

Use `FAIL` for Quality Result when the project goal, artifact design, implementation, tests, or user experience are not good enough to safely deploy, unless the project is explicitly marked experimental and the gate checks pass.

Use `PASS_WITH_WARNINGS` only when all core gates pass and remaining issues are non-blocking. For test quality, passing tests are not enough: if test content cannot be evaluated for core workflow, failure cases, invalid input, and safety boundaries, mark Test Quality `PASS_WITH_WARNINGS`, not `PASS`.

Overall Result rules:

- Gate Result `FAIL` means Overall Result `FAIL`.
- Security audit `FAIL` means Overall Result `FAIL`.
- Runtime Readiness Result `FAIL` means Overall Result `FAIL`.
- Quality Result `FAIL` should block deployment unless the project is explicitly marked experimental.
- Any section `PASS_WITH_WARNINGS` means Overall Result cannot be better than `PASS_WITH_WARNINGS`.
- Overall Result may be `PASS` only when Gate, Security, Runtime Readiness, Quality, and Continuity are all `PASS`.

If unsure, fail closed.

## Output Format

Always output this Markdown report shape:

```markdown
# Delivery Audit Report

## Overall Result

PASS / PASS_WITH_WARNINGS / FAIL

## Gate Result

PASS / PASS_WITH_WARNINGS / FAIL

## Quality Result

PASS / PASS_WITH_WARNINGS / FAIL

## Runtime Readiness Result

PASS / PASS_WITH_WARNINGS / FAIL

## Continuity Result

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

## Gate Audit

### Passed

- ...

### Warnings

- ...

### Failed

- ...

## Security Audit

...

## Quality Assessment

### Product Fit

Result: PASS / PASS_WITH_WARNINGS / FAIL

Notes:
...

### Artifact Design Quality

Result: PASS / PASS_WITH_WARNINGS / FAIL

Notes:
...

### Implementation Quality

Result: PASS / PASS_WITH_WARNINGS / FAIL

Notes:
...

### Test Quality

Result: PASS / PASS_WITH_WARNINGS / FAIL

Notes:
...

### User Experience Quality

Result: PASS / PASS_WITH_WARNINGS / FAIL

Notes:
...

## Runtime Readiness

...

## Maintainability / Handoff

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

## Quality Fixes Before Next Iteration

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

Treat stale template artifacts as deployment risks. If an agent-only project contains an unused `openclaw/skill/SKILL.md` placeholder, mark at least `WARNING`; mark `FAIL` if it can confuse source package or runtime target selection. Apply the symmetric check to skill-only projects with unused `openclaw/agent/` content.

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
- Section results are included for Gate, Quality, Runtime Readiness, and Continuity.
- All blocking issues are listed.
- Quality fixes are separated from required deployment fixes.
- Validation command status is truthful.
- Sensitive-file findings omit contents.
- Deployment readiness is judged from documents and actual checks, not assumptions.
- Files changed by the audit are limited to `docs/delivery_audit_report.md` when saving was requested.
