# Quality Audit Checklist

Use this checklist after the release gate checks. The goal is to decide whether the OpenClaw-native Skill, sub-agent, or app is worth deploying and maintainable after deployment.

## Product Fit

Check:

- Problem is concrete.
- Target user is clear.
- Trigger scenario is clear.
- Input materials are explicit.
- Expected output is explicit.
- Artifact type is justified.
- The project is not just a generic prompt.
- The project explains why it should be an OpenClaw Skill, sub-agent, or native app.

Result guidance:

- `PASS`: Problem, user, inputs, outputs, and artifact type are clear.
- `PASS_WITH_WARNINGS`: A few details are vague but do not block release.
- `FAIL`: Goal, inputs, outputs, or project positioning are unclear.

## Artifact Design Quality

For Skill artifacts, check:

- Skill name is specific and stable.
- Description is triggerable.
- When-to-use and when-not-to-use guidance are clear.
- Workflow produces concrete output.
- Output standard is stable.
- Safety rules exist.
- Validation behavior exists.
- Scope avoids broad "do everything" behavior.
- The skill does not hide uncertainty.
- The skill does not invent commands or tool abilities.

For Agent artifacts, check:

- Identity is clear.
- Mission is narrow enough.
- `AGENTS.md`, `IDENTITY.md`, `SOUL.md`, and `TOOLS.md` are consistent.
- `USER.md`, if present, is relevant and not filled with temporary notes.
- Runtime boundaries are explicit.
- Internal skills are organized.
- The agent avoids generic assistant drift.
- Relationship to the parent or surrounding OpenClaw system is clear.
- Non-goals are clear.
- Authority over deployment and filesystem changes is explicit and limited.

## Implementation Quality

Check:

- Code is organized by responsibility.
- Modules are named clearly.
- Avoidable duplication is absent or justified.
- Error handling is explicit.
- External dependencies are justified.
- File paths are configurable or documented.
- Commands are safe from injection or accidental destructive behavior.
- Side effects are controlled.
- Runtime code does not depend on development-only files.
- Sensitive values are not hard-coded.
- Temporary files are not part of the runtime package.

## Test Quality

Core rule:

```text
Passing tests are not enough.
```

Inspect whether tests cover:

- Core workflow.
- Failure cases.
- Invalid input.
- Empty input.
- Network errors or external dependency failures when relevant.
- Security boundaries.
- Path handling.
- Fake or mock environment values.
- Expected output format.
- No accidental dependency on real secrets.

Result guidance:

- `PASS`: Tests cover core paths and key failure paths.
- `PASS_WITH_WARNINGS`: Tests pass but coverage cannot prove core business quality, or test content cannot be fully evaluated.
- `FAIL`: Tests are missing, fail, or do not exercise the project's core capability.

## User Experience Quality

Check:

- User knows how to invoke the Skill or agent.
- Expected input format is clear.
- Output format is stable.
- Missing inputs are handled gracefully.
- Failure messages are actionable.
- Output can be used without heavy manual cleanup.
- Manual runtime testing is explained.
- The project avoids vague output such as "done" without evidence.

## Runtime Readiness

Check:

- Runtime target is clear.
- `docs/deploy_manifest.md` matches `docs/openclaw-contract.md`.
- Source package is clean.
- Forbidden files are excluded.
- Unused template artifacts are removed or explicitly excluded.
- Manual runtime test is documented or explicitly marked pending.
- The project explains how to verify OpenClaw recognizes the Skill or agent.
- Deployment does not rely on invented OpenClaw CLI commands.
- Runtime package does not include development docs unless explicitly needed.

Special stale-template rule:

- If an agent-only project contains an unused `openclaw/skill/SKILL.md` placeholder, mark at least `WARNING`.
- If that placeholder can confuse deployment source selection, mark `FAIL` until it is removed or explicitly excluded in `docs/deploy_manifest.md`.
- If a skill-only project contains unused `openclaw/agent/` content, apply the same warning-or-fail judgment.

## Maintainability / Continuity

Check:

- `docs/handoff.md` exists or equivalent handoff content exists.
- `docs/project_manifest.md` is useful.
- `docs/decision_log.md` contains real decisions, not empty placeholders.
- Latest project status is clear.
- Next recommended step is clear.
- Open questions are visible.
- A new Codex, Claude Code, or Cursor session can continue from files.
- Documentation is not polluted by obsolete instructions.
- Development repository and runtime workspace are clearly separated.
- Deployment history is recorded or `docs/deploy_log.md` location is defined.

## Quality Fix Classification

Separate fixes into two categories.

Required Fixes Before Deployment:

- Missing `docs/deploy_manifest.md`.
- Failed validation.
- High-risk secrets.
- Runtime target unclear.
- Source package unclear.
- Unconfirmed runtime workspace modification command.
- Required runtime files missing.
- Deployment mode unclear.

Quality Fixes Before Next Iteration:

- Tests do not cover failure cases.
- Handoff is missing.
- Skill description is too vague.
- Agent identity is too broad.
- Error messages are not actionable.
- README or invocation guidance is unclear.
- Template placeholders remain.
- Manual runtime test is pending.
