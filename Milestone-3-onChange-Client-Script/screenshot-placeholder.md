# Milestone 3 — Screenshot Placeholders

The following screenshots should be captured from your **ServiceNow developer instance** after creating the onChange Client Script.

---

## Required Screenshots

### 1. Client Script Record

- **Filename:** `m3_client_script_form.png`
- **What to capture:** The Client Script form showing:
  - Name: `Show Info Message on Impact Change`
  - Table: `Incident [incident]`
  - Type: `onChange`
  - Field name: `impact`
  - Active: checked
  - The full script visible in the Script field
- **Where to find it:** System Definition → Client Scripts → open the record.

---

### 2. Info Message — High Impact

- **Filename:** `m3_info_message_high.png`
- **What to capture:** The Incident form showing a **blue info banner** at the top after setting Impact to `1 - High`.
- **How to get it:** Open a new Incident, change Impact to `1 - High`.

---

### 3. Info Message — Medium Impact

- **Filename:** `m3_info_message_medium.png`
- **What to capture:** The Incident form showing the Medium impact info message.
- **How to get it:** Change Impact to `2 - Medium`.

---

### 4. Info Message — Low Impact

- **Filename:** `m3_info_message_low.png`
- **What to capture:** The Incident form showing the Low impact info message.
- **How to get it:** Change Impact to `3 - Low`.

---

### 5. No Message on Form Load

- **Filename:** `m3_no_message_on_load.png`
- **What to capture:** An existing Incident form that loaded **without** any info message (demonstrating the `isLoading` guard).
- **How to get it:** Open an existing Incident without changing any fields.

---

## How to Add Screenshots

1. Save each screenshot with the filename listed above.
2. Place the files in the [`../screenshots/`](../screenshots/) directory.
3. Embed them in this milestone's README:

```markdown
![Info Message - High Impact](../screenshots/m3_info_message_high.png)
```

---

> ⚠️ **Do not use fabricated or AI-generated images.** All screenshots must come from your own ServiceNow instance.
