# Milestone 4 — Create onSubmit Client Script (Save Validation)

## 🎯 Objective

Create an **onSubmit Client Script** on the **Incident** table that **validates the form before submission**. If the **Short Description** or **Category** fields are empty, the script displays an error message and **prevents the record from being saved**.

---

## 📌 ServiceNow Configuration

| Property | Value |
|----------|-------|
| **Table** | Incident (`incident`) |
| **Type** | `onSubmit` |
| **Field name** | *(not applicable for onSubmit)* |
| **Module** | System Definition → Client Scripts |

### Client Script Record Fields

| Field | Value |
|-------|-------|
| **Name** | `Validate Required Fields Before Save` |
| **Table** | `Incident [incident]` |
| **Type** | `onSubmit` |
| **Field name** | *(leave blank — onSubmit scripts do not bind to a specific field)* |
| **Active** | `true` (checked) |
| **Inherited** | `false` |
| **Global** | `true` (checked) |
| **Description** | `Prevents saving an Incident if Short Description or Category is empty. Displays field-level and form-level error messages.` |

---

## 🔧 Configuration Steps

### Step 1 — Navigate to Client Scripts

1. In the Application Navigator, type **Client Scripts**.
2. Click **System Definition → Client Scripts**.
3. Click **New**.

### Step 2 — Fill in the Client Script Form

Use the values from the table above. Set the **Type** to `onSubmit`. Leave **Field name** blank.

### Step 3 — Paste the Script

Copy the contents of [`onSubmit_save_validation.js`](./onSubmit_save_validation.js) into the **Script** field.

### Step 4 — Save

Click **Submit** to save the Client Script.

---

## 📜 Script: `onSubmit_save_validation.js`

```javascript
function onSubmit() {
    var isValid = true;

    // Validate Short Description
    var shortDesc = g_form.getValue('short_description');
    if (!shortDesc || shortDesc.trim() === '') {
        g_form.showFieldMsg('short_description',
            'Short Description is required before saving.',
            'error');
        g_form.setMandatory('short_description', true);
        isValid = false;
    }

    // Validate Category
    var category = g_form.getValue('category');
    if (!category || category.trim() === '') {
        g_form.showFieldMsg('category',
            'Please select a Category before saving.',
            'error');
        g_form.setMandatory('category', true);
        isValid = false;
    }

    // If validation fails, show a form-level error and abort submission
    if (!isValid) {
        g_form.addErrorMessage(
            'Submission blocked — Please fill in all required fields ' +
            'highlighted above before saving this Incident.'
        );
        return false; // Prevents form submission
    }

    // All validations passed — allow submission
    return true;
}
```

---

## 🧠 Logic Explanation

### Flow

```
USER clicks Save / Submit / Update
        │
        ▼
onSubmit() fires
        │
        ├── Check Short Description
        │       └── Empty? → Show field error, set mandatory, isValid = false
        │
        ├── Check Category
        │       └── Empty? → Show field error, set mandatory, isValid = false
        │
        ├── isValid == false?
        │       └── Show form-level error → return false (BLOCK submission)
        │
        └── isValid == true?
                └── return true (ALLOW submission)
```

### Key Concepts

1. **`g_form.getValue(fieldName)`**: Retrieves the current value of a field. Returns an empty string if the field is blank.

2. **`.trim()`**: Removes whitespace to catch cases where a user types only spaces.

3. **`g_form.showFieldMsg(field, message, type)`**: Displays an inline message directly beneath the specified field. The `'error'` type renders a red message.

4. **`g_form.setMandatory(field, true)`**: Dynamically marks the field as mandatory (adds a red asterisk). This is a visual cue that persists until the user fills in the field.

5. **`g_form.addErrorMessage(message)`**: Displays a red error banner at the top of the form.

6. **`return false`**: In an `onSubmit` Client Script, returning `false` **prevents** the form from being submitted to the server.

7. **`return true`**: Allows the submission to proceed.

### API Reference

| API | Method | Purpose |
|-----|--------|---------|
| `g_form` | `getValue(field)` | Get the current value of a field |
| `g_form` | `showFieldMsg(field, msg, type)` | Show an inline message under a field |
| `g_form` | `setMandatory(field, bool)` | Dynamically set a field as mandatory |
| `g_form` | `addErrorMessage(msg)` | Show a red error banner at the top of the form |

> **Example business rule note:** The requirement "Short Description and Category must be filled before saving" is an **example** validation for learning purposes. Your organization may have different mandatory field requirements.

---

## ✅ Expected Result

| Scenario | Result |
|----------|--------|
| Both Short Description and Category are empty → click Save | **Submission blocked.** Red error messages appear under both fields, plus a red banner at top. |
| Short Description is filled, Category is empty → click Save | **Submission blocked.** Error appears only under Category. |
| Category is filled, Short Description is empty → click Save | **Submission blocked.** Error appears only under Short Description. |
| Both fields are filled → click Save | **Submission succeeds.** The Incident is saved normally. |

---

## 📂 Files in This Milestone

| File | Purpose |
|------|---------|
| `README.md` | This document — full configuration guide |
| `onSubmit_save_validation.js` | The onSubmit Client Script source code |
| `test-cases.md` | Practical test cases |
| `screenshot-placeholder.md` | Instructions for screenshots to add |

---

## 🔗 Navigation

[← Milestone 3](../Milestone-3-onChange-Client-Script/) · [Main README](../README.md) · [Milestone 5 →](../Milestone-5-onCellEdit-Client-Script/)
