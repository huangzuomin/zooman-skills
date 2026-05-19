### 触发条件

- 用户需求模糊，未明确文种、读者、使用场景或写作目的时，先输出 `TaskBrief`，不要直接成稿。
- 涉及领导决策、政策建议、改革方案、舆情专报、对外报送、公开发布、保密、合法性审核或跨部门职责时，先输出 `TaskBrief`。
- 用户明确要求“直接起草某文种”，且材料足够、风险较低时，可直接进入成稿，但仍需保留待核实提示。

### TaskBrief 固定字段

```yaml
task_name:
recommended_doc_type:
candidate_doc_types:
route:
reader_role:
task_purpose:
decision_required:
requires_evidence:
requires_kb_search:
requires_legality_review:
requires_publicity_review:
requires_secrecy_review:
missing_info:
retrieval_plan:
```

### 编译规则

- `recommended_doc_type` 必须说明推荐理由；不能确定时列出最多 3 个候选文种。
- `route` 必须判断为上行、下行、平行、公开发布、内部阅示或内部事务材料之一。
- `reader_role` 至少判断为上级机关、主要领导、分管领导、平级单位、下级单位、内部部门、公众或其他明确对象。
- `task_purpose` 必须区分请求批准、汇报情况、部署工作、沟通协调、供领导决策、记录会议、对外告知、复盘总结等目的。
- 缺少关键事实时写入 `missing_info`，不要补写或猜测。
- `retrieval_plan` 按权威依据包、事实数据包、单位口径包、历史样稿包、风险敏感包组织。
- 如存在上游 `official-material-handoff`，优先读取其中的 `topic`、`requested_doc_type`、`reader_role`、`purpose`、`deadline` 作为初始字段，但仍要独立校验文种、行文方向和风险。
- `retrieval_plan` 在本项目中只作为“上游补材建议”，不得触发本项目直接扫描知识库。

### 输出边界

- 任务简报不是成稿，不得把缺失信息写成事实。
- 任务简报中允许写“合理假设”，但必须标注为假设，并列入待人工确认。
- 如果任务简报显示存在 S0 风险，应先说明阻断原因，再给出补充材料清单。
- 对来自上游的 `known_gaps`，必须原样进入缺失信息或待人工确认事项。
