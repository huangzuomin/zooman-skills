# OpenClaw Delivery Audit Checklist

Use this checklist while auditing an OpenClaw-native development repository before deployment.

## Repository Structure

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

Skill artifact requirements:

- `openclaw/skill/SKILL.md` exists.
- `SKILL.md` has YAML frontmatter.
- Frontmatter contains `name`.
- Frontmatter contains `description`.
- `name` is snake_case.
- `description` clearly states trigger conditions.

Agent artifact requirements:

- `openclaw/agent/AGENTS.md`
- `openclaw/agent/IDENTITY.md`
- `openclaw/agent/SOUL.md`
- `openclaw/agent/TOOLS.md`

Agent recommended files:

- `openclaw/agent/USER.md`
- `openclaw/agent/skills/`
- `openclaw/agent/resources/`

## Specification Consistency

Check:

- `docs/project_spec.md` states project goal, Artifact Type, inputs, outputs, workflow, Non-goals, and Success Criteria.
- `docs/openclaw-contract.md` states the boundary between development repository and runtime workspace.
- `docs/deploy_manifest.md` is consistent with the runtime target and boundary in `docs/openclaw-contract.md`.
- `docs/test_plan.md` includes static validation, functional validation, runtime validation, and regression checklist.
- `docs/decision_log.md` records key design decisions.

## Deployment Manifest

`docs/deploy_manifest.md` must exist and include:

- Project
- Artifact Type
- Development Repository
- Source Package
- Runtime Target
- Deployment Mode
- Pre-deployment Requirements
- Files Allowed to Deploy
- Files Never Deploy
- Backup Rule
- Deployment Strategy
- Post-deployment Validation
- Rollback
- Deployment Record

Result rules:

- Missing manifest means `FAIL`.
- Missing required manifest field means `FAIL`.
- Complete fields with only non-blocking confirmation gaps may be `PASS_WITH_WARNINGS`.

## Sensitive File Risk

High-risk paths or patterns:

- `.env`
- `.env.*`
- `credentials/`
- `secrets/`
- `*.pem`
- `*.key`
- `id_rsa`
- `id_ed25519`
- `*.p12`
- `*.pfx`

Medium-risk paths or patterns:

- `*.log`
- `cookies*`
- `token*`
- `private*`
- `config.local.*`

Dependency and cache paths:

- `node_modules/`
- `__pycache__/`
- `.pytest_cache/`
- `.venv/`
- `dist/`
- `build/`

Rules:

- Do not print sensitive contents.
- Report only suspicious paths and risk levels.
- Any high-risk sensitive file means `FAIL`.
- Medium-risk files may be `PASS_WITH_WARNINGS` or `FAIL` based on exposure and deployment scope.
- Dependency and cache paths should not be deployed; mark as warning or failure if deployment manifest allows them.

## OpenClaw Command Audit

Check project documents and scripts for OpenClaw CLI commands.

Rules:

- Do not invent OpenClaw CLI commands.
- Treat a command as confirmed only if explicitly listed in `docs/openclaw-contract.md` or `docs/deploy_manifest.md`.
- Unconfirmed OpenClaw commands are `WARNING` or `FAIL`.
- Unconfirmed commands that deploy, modify runtime directories, delete files, overwrite files, or alter `~/.openclaw/` are `FAIL`.

## Validation Command

Default command:

```bash
bash scripts/validate.sh
```

Rules:

- Run the validation command.
- Missing validation command means `FAIL`.
- Failed validation command means `FAIL`.
- Passing validation with non-blocking gaps may be `PASS_WITH_WARNINGS`.
- Never claim validation passed unless the command actually ran and exited successfully.

## Deployment Readiness

Require clear answers for:

- Deployment mode.
- Source directory or package.
- Runtime target directory.
- Files allowed to deploy.
- Files never deploy.
- Backup rule.
- Rollback strategy.
- Post-deployment validation.

Any missing core deployment readiness item should be `FAIL`.

## Final Result

Use `PASS` only when:

- Required files are complete.
- Artifact type is clear.
- Deployment manifest is complete.
- Validation command passes.
- No sensitive files are found.
- No unconfirmed OpenClaw commands are found.
- Deployment boundary is clear.
- Next deployment step is explicit.

Use `PASS_WITH_WARNINGS` only when core gates pass but non-blocking issues remain.

Use `FAIL` for any blocking issue. If uncertain, fail closed.
