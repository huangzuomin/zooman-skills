### 职责边界

- 本项目只输出归档建议，不直接写回 Obsidian 或本地知识库。
- 知识库取材、归档回写、错情沉淀和口径沉淀由 `personal-kb-steward` 处理。
- 如用户提供 Obsidian 笔记、历史文稿、material-pack 或 evidence-pack，只能按显式材料使用，不得假定存在隐藏知识库。
- 归档建议以 Markdown frontmatter 表达，便于后续交回知识库管家。

### 最小 frontmatter 字段

```yaml
title:
doc_type:
route:
task_purpose:
reader_role:
decision_required:
date:
project:
status:
review_status:
evidence_level:
evidence_refs:
publicity_attr:
security_level:
consultation_status:
legality_review:
archive_status:
feedback_code:
tags:
```

### 回交知识库管家的建议对象

- `TaskBrief`：记录任务判断、文种路由、缺失信息和检索计划。
- `EvidenceUseNote`：记录哪些材料可用于正式判断，哪些只能作背景，哪些不得写入正文。
- `EvidenceCard[]`：记录每条关键事实的来源、等级、可用边界和冲突。
- `Draft`：记录正式文稿草案。
- `ReviewReport`：记录审稿门禁结果和人工确认事项。
- `ArchiveSuggestion`：记录建议归档位置、版本、source_refs、审签链和后续任务。

### 草案包标准结构

```markdown
# 机关材料草案包

## 01-task-brief

## 02-evidence-use-note

## 03-draft

## 04-review-report

## 05-pending-confirmation

## 06-archive-suggestion
```

### 回写建议

- 可复用口径只沉淀表达方式，不沉淀未经核实的事实。
- 审稿发现的 S0/S1 问题应写入 `feedback_code`，用于后续规则迭代。
- 最终成稿、资料包、审稿记录和待核实事项应分开保存，避免事实层、表达层和审核层混在一篇笔记中。
- 归档建议中必须保留上游 `source_refs`、`material_pack_ref`、`evidence_pack_ref` 和 `known_gaps`。
