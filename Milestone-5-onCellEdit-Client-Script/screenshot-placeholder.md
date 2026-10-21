# Milestone 5 — Screenshot Placeholders

The following screenshots should be captured from your **ServiceNow developer instance** after creating the onCellEdit Client Script.

---

## Required Screenshots

### 1. Client Script Record

- **Filename:** `m5_client_script_form.png`
- **What to capture:** The Client Script form showing:
  - Name: `Prevent Critical Priority on List Edit`
  - Table: `Incident [incident]`
  - Type: `onCellEdit`
  - Active: checked
  - The script visible in the Script field
- **Where to find it:** System Definition → Client Scripts → open the record.

---

### 2. Incident List View — Cell Being Edited

- **Filename:** `m5_list_view_cell_edit.png`
- **What to capture:** The Incident list view showing a **Priority cell being edited** (the dropdown is open or the cell is in edit mode).
- **How to get it:** Navigate to Incident → All, then double-click a Priority cell.

---

### 3. Cell Edit Rejected — Critical Priority

- **Filename:** `m5_cell_edit_rejected.png`
- **What to capture:** The **rejection message** shown after attempting to set Priority to `1 - Critical` from the list view.
- **How to get it:** Select `1 - Critical` from the Priority cell dropdown and confirm.

---

### 4. Cell Edit Accepted — Non-Critical Priority

- **Filename:** `m5_cell_edit_accepted.png`
- **What to capture:** The list view showing a **successful cell edit** (e.g., Priority changed to `2 - High`).
- **How to get it:** Select `2 - High` from the Priority cell dropdown and confirm.

---

### 5. Other Field Edit — Not Affected

- **Filename:** `m5_other_field_edit.png`
- **What to capture:** A non-Priority field (e.g., Short Description) being successfully edited from the list view, demonstrating that the script does not interfere.
- **How to get it:** Double-click a Short Description cell, edit the text, and confirm.

---

## How to Add Screenshots

1. Save each screenshot with the filename listed above.
2. Place the files in the [`../screenshots/`](../screenshots/) directory.
3. Embed them in this milestone's README:

```markdown
![Cell Edit Rejected](../screenshots/m5_cell_edit_rejected.png)
```

---

> ⚠️ **Do not use fabricated or AI-generated images.** All screenshots must come from your own ServiceNow instance.
