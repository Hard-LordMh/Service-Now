# Milestone 1 — Screenshot Placeholders

The following screenshots should be captured from your **ServiceNow developer instance** after completing the Milestone 1 configuration.

---

## Required Screenshots

### 1. UI Policy Record

- **Filename:** `m1_ui_policy_form.png`
- **What to capture:** The full UI Policy form showing:
  - Name: `Make Description Mandatory on Critical Priority`
  - Table: `Incident [incident]`
  - Active: checked
  - On load: checked
  - Reverse if false: checked
- **Where to find it:** System UI → UI Policies → open the record you created.

---

### 2. Condition Builder

- **Filename:** `m1_condition_builder.png`
- **What to capture:** The condition section of the UI Policy showing:
  - `Priority is 1 - Critical`
- **Where to find it:** Inside the UI Policy record, scroll to the Conditions area.

---

### 3. Incident Form — Before (Non-Critical Priority)

- **Filename:** `m1_incident_before.png`
- **What to capture:** An Incident form where Priority is **not** Critical, showing the Description field in its **default** state (editable, no red asterisk).
- **How to get it:** Open a new Incident, set Impact and Urgency to `2 - Medium`.

---

### 4. Incident Form — After (Critical Priority)

- **Filename:** `m1_incident_after.png`
- **What to capture:** The same Incident form after changing Priority to `1 - Critical`, showing:
  - Description field with a **red asterisk** (mandatory)
  - Description field **greyed out** (read-only)
- **How to get it:** Change Impact to `1 - High` and Urgency to `1 - High`.

---

## How to Add Screenshots

1. Save each screenshot with the filename listed above.
2. Place the files in the [`../screenshots/`](../screenshots/) directory.
3. Optionally, embed them in this milestone's README:

```markdown
![UI Policy Form](../screenshots/m1_ui_policy_form.png)
```

---

> ⚠️ **Do not use fabricated or AI-generated images.** All screenshots must come from your own ServiceNow instance.
