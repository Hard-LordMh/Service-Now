# Milestone 2 — Screenshot Placeholders

The following screenshots should be captured from your **ServiceNow developer instance** after completing the Milestone 2 configuration.

---

## Required Screenshots

### 1. UI Policy Action Record (Urgency)

- **Filename:** `m2_ui_policy_action.png`
- **What to capture:** The UI Policy Action form showing:
  - Field name: `Urgency`
  - Read only: `true`
  - Value: `1 - High`
- **Where to find it:** Open the UI Policy from Milestone 1 → scroll to UI Policy Actions related list → click the Urgency action.

---

### 2. UI Policy Actions Related List

- **Filename:** `m2_actions_related_list.png`
- **What to capture:** The UI Policy Actions related list showing **both** actions:
  - Description (mandatory, read-only)
  - Urgency (read-only, value = 1 - High)
- **Where to find it:** Bottom of the UI Policy record form.

---

### 3. Incident Form — Urgency Read-Only

- **Filename:** `m2_urgency_readonly.png`
- **What to capture:** An Incident form where Priority is `1 - Critical`, showing:
  - Urgency field set to `1 - High`
  - Urgency field is **greyed out** (read-only)
  - Description field is also mandatory and read-only (from Milestone 1)
- **How to get it:** Set Impact = `1 - High`, Urgency = `1 - High` on a new Incident.

---

### 4. Incident Form — Urgency Editable (Non-Critical)

- **Filename:** `m2_urgency_editable.png`
- **What to capture:** An Incident form where Priority is **not** Critical, showing:
  - Urgency field is **editable** (normal dropdown)
- **How to get it:** Set Impact and Urgency to `2 - Medium` or lower.

---

## How to Add Screenshots

1. Save each screenshot with the filename listed above.
2. Place the files in the [`../screenshots/`](../screenshots/) directory.
3. Optionally, embed them in this milestone's README:

```markdown
![UI Policy Action - Urgency](../screenshots/m2_ui_policy_action.png)
```

---

> ⚠️ **Do not use fabricated or AI-generated images.** All screenshots must come from your own ServiceNow instance.
