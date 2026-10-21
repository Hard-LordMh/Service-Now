# Milestone 4 — Screenshot Placeholders

The following screenshots should be captured from your **ServiceNow developer instance** after creating the onSubmit Client Script.

---

## Required Screenshots

### 1. Client Script Record

- **Filename:** `m4_client_script_form.png`
- **What to capture:** The Client Script form showing:
  - Name: `Validate Required Fields Before Save`
  - Table: `Incident [incident]`
  - Type: `onSubmit`
  - Active: checked
  - The script visible in the Script field
- **Where to find it:** System Definition → Client Scripts → open the record.

---

### 2. Validation Error — Both Fields Empty

- **Filename:** `m4_validation_both_empty.png`
- **What to capture:** The Incident form showing:
  - Red inline error under **Short Description**
  - Red inline error under **Category**
  - Red error banner at the top of the form
- **How to get it:** Leave both fields empty and click Save.

---

### 3. Validation Error — One Field Empty

- **Filename:** `m4_validation_one_empty.png`
- **What to capture:** The Incident form showing an error under only **one** field (e.g., Category empty while Short Description is filled).
- **How to get it:** Fill Short Description, leave Category empty, click Save.

---

### 4. Successful Save

- **Filename:** `m4_successful_save.png`
- **What to capture:** The Incident form after a **successful save** — no error messages, the record is saved (observe the Incident number in the header).
- **How to get it:** Fill in both Short Description and Category, then click Save.

---

### 5. Mandatory Indicators

- **Filename:** `m4_mandatory_indicators.png`
- **What to capture:** The form showing **red asterisks** next to Short Description and Category after a failed submission (demonstrating `g_form.setMandatory()`).
- **How to get it:** Attempt to save with empty fields, then observe the asterisks.

---

## How to Add Screenshots

1. Save each screenshot with the filename listed above.
2. Place the files in the [`../screenshots/`](../screenshots/) directory.
3. Embed them in this milestone's README:

```markdown
![Validation Error](../screenshots/m4_validation_both_empty.png)
```

---

> ⚠️ **Do not use fabricated or AI-generated images.** All screenshots must come from your own ServiceNow instance.
