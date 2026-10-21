# Milestone 3 — Create onChange Client Script

## 🎯 Objective

Create an **onChange Client Script** on the **Incident** table that listens for changes to the **Impact** field and displays a dynamic **informational message** on the form to guide the user based on the selected impact level.

---

## 📌 ServiceNow Configuration

| Property | Value |
|----------|-------|
| **Table** | Incident (`incident`) |
| **Type** | `onChange` |
| **Field name** | `Impact` |
| **Module** | System Definition → Client Scripts |

### Client Script Record Fields

| Field | Value |
|-------|-------|
| **Name** | `Show Info Message on Impact Change` |
| **Table** | `Incident [incident]` |
| **Type** | `onChange` |
| **Field name** | `impact` |
| **Active** | `true` (checked) |
| **Inherited** | `false` |
| **Global** | `true` (checked) |
| **Description** | `Displays an informational message when the Impact field changes, guiding the user on the severity implications.` |

---

## 🔧 Configuration Steps

### Step 1 — Navigate to Client Scripts

1. In the Application Navigator, type **Client Scripts**.
2. Click **System Definition → Client Scripts**.
3. Click **New**.

### Step 2 — Fill in the Client Script Form

Use the values from the table above. Set the **Type** to `onChange` and the **Field name** to `impact`.

### Step 3 — Paste the Script

Copy the contents of [`onChange_impact_message.js`](./onChange_impact_message.js) into the **Script** field.

### Step 4 — Save

Click **Submit** to save the Client Script.

---

## 📜 Script: `onChange_impact_message.js`

```javascript
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    // Do not run on form load or template application
    if (isLoading || newValue === '') {
        return;
    }

    // Clear any previous info messages
    g_form.clearMessages();

    // Display a contextual message based on the selected Impact value
    // Impact values: 1 = High, 2 = Medium, 3 = Low
    switch (newValue) {
        case '1':
            g_form.addInfoMessage(
                'Impact set to HIGH — This incident affects a large number of users ' +
                'or a critical business service. Please ensure the Description and ' +
                'Assignment Group are filled in accurately.'
            );
            break;

        case '2':
            g_form.addInfoMessage(
                'Impact set to MEDIUM — This incident affects a moderate number of ' +
                'users or a non-critical business service.'
            );
            break;

        case '3':
            g_form.addInfoMessage(
                'Impact set to LOW — This incident affects a single user or a ' +
                'non-essential service.'
            );
            break;

        default:
            // No message for unexpected values
            break;
    }
}
```

---

## 🧠 Logic Explanation

1. **Guard clause:** The script exits immediately if the form is loading (`isLoading`) or if the new value is empty. This prevents unwanted messages when the form first renders or when the field is cleared.

2. **Clear previous messages:** `g_form.clearMessages()` removes any existing info/error messages so the user only sees the most current message. This prevents message stacking when the user changes Impact multiple times.

3. **Switch statement:** The script checks the new value of the Impact field:
   - `'1'` → High impact → detailed guidance message
   - `'2'` → Medium impact → moderate guidance
   - `'3'` → Low impact → minimal guidance
   - `default` → no message for unexpected values

4. **`g_form.addInfoMessage()`**: This is a supported ServiceNow GlideForm API method that displays a blue informational banner at the top of the form.

### API Reference

| API | Method | Purpose |
|-----|--------|---------|
| `g_form` | `clearMessages()` | Removes all info and error messages from the form |
| `g_form` | `addInfoMessage(message)` | Displays a blue informational banner at the top of the form |

> **Note:** The messages in this script are **examples** designed to guide users. Your organization should customize the message text to match its own incident management policies.

---

## ✅ Expected Result

| Action | Result |
|--------|--------|
| Change Impact to `1 - High` | Blue info message: *"Impact set to HIGH — This incident affects..."* |
| Change Impact to `2 - Medium` | Previous message clears; new message: *"Impact set to MEDIUM..."* |
| Change Impact to `3 - Low` | Previous message clears; new message: *"Impact set to LOW..."* |
| Form loads with Impact pre-set | **No message** (guarded by `isLoading` check) |
| Impact is cleared (empty) | **No message** (guarded by empty-value check) |

---

## 📂 Files in This Milestone

| File | Purpose |
|------|---------|
| `README.md` | This document — full configuration guide |
| `onChange_impact_message.js` | The onChange Client Script source code |
| `test-cases.md` | Practical test cases |
| `screenshot-placeholder.md` | Instructions for screenshots to add |

---

## 🔗 Navigation

[← Milestone 2](../Milestone-2-UI-Policy-Urgency/) · [Main README](../README.md) · [Milestone 4 →](../Milestone-4-onSubmit-Validation/)
