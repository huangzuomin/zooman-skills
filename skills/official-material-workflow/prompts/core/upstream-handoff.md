### 上游交接包输入协议

#### 职责边界

- 本项目不扫描 Obsidian vault，不建立本地知识库索引，不从 raw/quicknote/inbox 取材。
- 本项目只消费上游明确给出的 `official-material-handoff`、`material-pack`、`evidence-pack`、`gap-report` 和 `source_refs`。
- 上游知识库取材、证据采集、材料包编译、缺口识别和来源追踪由 `personal-kb-steward` 负责。
- 不得假定存在隐藏知识库内容；交接包没有给出的事实、口径和来源，一律视为缺失信息。

#### 可接收输入

```text
task.md
handoff.md / handoff.json
material-pack.md / material-pack.json
evidence-pack.md / evidence-pack.json
gap-report.md
```

#### handoff.json 建议字段

```json
{
  "task": {
    "topic": "",
    "requested_doc_type": "",
    "reader_role": "",
    "purpose": "",
    "deadline": ""
  },
  "material_pack_ref": "",
  "evidence_pack_ref": "",
  "source_refs": [],
  "known_gaps": [],
  "risk_notes": [],
  "recommended_next_step": ""
}
```

#### 消费规则

- `TaskBrief` 可优先读取 handoff 中的 `topic`、`requested_doc_type`、`reader_role`、`purpose`、`deadline`，但仍要独立判断文种和行文方向。
- `EvidenceUseNote` 只能引用 evidence-pack 和 material-pack 中明确给出的材料。
- `known_gaps` 必须进入待核实清单或审稿报告，不得在草稿中悄悄补齐。
- `risk_notes` 必须进入审稿报告或证据使用说明。
- `source_refs` 必须保留到归档建议中，便于回交知识库管家。

#### 标准输出

```text
01-task-brief
02-evidence-use-note
03-draft
04-review-report
05-pending-confirmation
06-archive-suggestion
```

#### 回交边界

- 本项目只输出 `ArchiveSuggestion`，不直接写回知识库。
- 归档、错情沉淀、口径沉淀和知识库健康检查交回 `personal-kb-steward` 处理。
