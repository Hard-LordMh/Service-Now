# 📸 Screenshots Directory

This folder is reserved for **your own ServiceNow screenshots**. No screenshots have been fabricated or generated — all images should come from your live developer instance after completing each milestone.

---

## Recommended Screenshots

Add the following screenshots after implementing each milestone. Use the suggested filenames for consistency.

### Milestone 1 — UI Policy on Incident

| Filename | Description |
|----------|-------------|
| `m1_ui_policy_form.png` | The UI Policy record showing Name, Table, Conditions, and other fields |
| `m1_condition_builder.png` | The condition builder showing the rule (e.g., Priority = 1 – Critical) |
| `m1_incident_before.png` | Incident form **before** the UI Policy condition is met |
| `m1_incident_after.png` | Incident form **after** the condition is met (fields mandatory/read-only) |

### Milestone 2 — UI Policy Action (Urgency)

| Filename | Description |
|----------|-------------|
| `m2_ui_policy_action.png` | The UI Policy Action record for the Urgency field |
| `m2_urgency_readonly.png` | Incident form showing Urgency set and read-only |

### Milestone 3 — onChange Client Script

| Filename | Description |
|----------|-------------|
| `m3_client_script_form.png` | The Client Script record (Type: onChange, Field: Impact) |
| `m3_info_message.png` | Incident form showing the info message after Impact changes |
| `m3_message_cleared.png` | Incident form after the info message is cleared on next change |

### Milestone 4 — onSubmit Client Script

| Filename | Description |
|----------|-------------|
| `m4_client_script_form.png` | The Client Script record (Type: onSubmit) |
| `m4_validation_error.png` | Incident form showing the error message when validation fails |
| `m4_successful_save.png` | Incident form saving successfully when all fields are populated |

### Milestone 5 — onCellEdit Client Script

| Filename | Description |
|----------|-------------|
| `m5_client_script_form.png` | The Client Script record (Type: onCellEdit) |
| `m5_list_view.png` | Incident list view showing the cell being edited |
| `m5_cell_edit_rejected.png` | Alert or message shown when invalid cell edit is rejected |
| `m5_cell_edit_accepted.png` | List view after a valid cell edit is accepted |

### Milestone 6 — Testing

| Filename | Description |
|----------|-------------|
| `m6_all_active.png` | System UI → UI Policies list showing the active policy |
| `m6_client_scripts_list.png` | System Definition → Client Scripts list showing all three scripts |
| `m6_full_test_pass.png` | Evidence of all test cases passing (e.g., annotated screenshots) |

---

## How to Add Screenshots

1. Take screenshots from your **ServiceNow developer instance**.
2. Crop to show only the relevant area.
3. Save with the filenames listed above (or your own descriptive names).
4. Place all files in this `screenshots/` directory.
5. Reference them in the milestone READMEs using relative paths:

```markdown
![UI Policy Configuration](../screenshots/m1_ui_policy_form.png)
```

---

> ⚠️ **Do not commit fabricated or placeholder images.** This folder should only contain real screenshots from your own ServiceNow instance.
