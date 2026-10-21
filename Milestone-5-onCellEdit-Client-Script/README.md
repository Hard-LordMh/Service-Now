# Milestone 5 — Create onCellEdit Client Script

## 🎯 Objective

Create an **onCellEdit Client Script** on the **Incident** table that validates cell edits made directly from the **list view**. When a user edits the **Priority** field from the Incident list, the script checks whether the new value is `1 - Critical` and, if so, **rejects the edit** with a warning message — requiring users to open the full form to set Critical priority.

This demonstrates how to use the `onCellEdit` Client Script type to enforce data quality on list-view edits.

---

## 📌 ServiceNow Configuration

| Property | Value |
|----------|-------|
| **Table** | Incident (`incident`) |
| **Type** | `onCellEdit` |
| **Field name** | *(not applicable — onCellEdit scripts do not bind to a single field)* |
| **Module** | System Definition → Client Scripts |

### Client Script Record Fields

| Field | Value |
|-------|-------|
| **Name** | `Prevent Critical Priority on List Edit` |
| **Table** | `Incident [incident]` |
| **Type** | `onCellEdit` |
| **Field name** | *(leave blank)* |
| **Active** | `true` (checked) |
| **Inherited** | `false` |
| **Global** | `true` (checked) |
| **Description** | `Prevents setting Priority to Critical (1) via list-cell editing. Users must open the full Incident form to set Critical priority.` |

---

## 🔧 Configuration Steps

### Step 1 — Navigate to Client Scripts

1. In the Application Navigator, type **Client Scripts**.
2. Click **System Definition → Client Scripts**.
3. Click **New**.

### Step 2 — Fill in the Client Script Form

Use the values from the table above. Set the **Type** to `onCellEdit`. Leave **Field name** blank.

### Step 3 — Paste the Script

Copy the contents of [`onCellEdit_priority_validation.js`](./onCellEdit_priority_validation.js) into the **Script** field.

### Step 4 — Save

Click **Submit** to save the Client Script.

### Step 5 — Enable List Editing (if not already enabled)

For `onCellEdit` scripts to run, **list editing** must be enabled:

1. Navigate to **System Properties → UI Properties** (or search `glide.ui.list_edit_update_save`).
2. Ensure the property **Enable list edit** is set to `true`.
3. Alternatively, double-click a cell in any list view — if a cell becomes editable, list editing is already enabled.

---

## 📜 Script: `onCellEdit_priority_validation.js`

```javascript
function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    // Only validate edits to the 'priority' field
    var fieldName = newValue.getName();

    if (fieldName === 'priority') {
        var newVal = newValue.getValue();

        // '1' corresponds to "1 - Critical" in the Priority choice list
        if (newVal === '1') {
            // Reject the edit with a user-friendly message
            callback(false,
                'Setting Priority to Critical is not allowed from the list view. ' +
                'Please open the Incident form to set Critical priority.'
            );
            return;
        }
    }

    // Allow the edit for all other fields and non-Critical priority values
    callback(true);
}
```

---

## 🧠 Logic Explanation

### How onCellEdit Works

The `onCellEdit` Client Script type runs when a user edits a cell directly in a **list view** (by double-clicking a cell). Its function signature differs from `onChange` and `onSubmit`:

```
function onCellEdit(sysIDs, table, oldValues, newValue, callback)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `sysIDs` | Array | An array of sys_id strings for the records being edited (supports multi-row edits) |
| `table` | String | The table name (e.g., `'incident'`) |
| `oldValues` | Object | An object containing the old values of the edited field for each record |
| `newValue` | GlideListValue | An object with `.getName()` (field name) and `.getValue()` (new value) methods |
| `callback` | Function | Call `callback(true)` to allow the edit, or `callback(false, 'message')` to reject it |

### Flow

```
USER double-clicks a cell in the Incident list
        │
        ▼
onCellEdit() fires
        │
        ├── Is the edited field 'priority'?
        │       ├── No  → callback(true) — allow the edit
        │       └── Yes → Is the new value '1' (Critical)?
        │                   ├── No  → callback(true) — allow the edit
        │                   └── Yes → callback(false, 'message') — REJECT the edit
```

### Why Restrict Critical Priority from List Editing?

> **Example business rule:** This restriction is an **example** scenario for learning purposes. The rationale is that setting an Incident to Critical priority should require the user to review the full form — including Description, Assignment Group, and other fields — rather than making a quick change from the list view.

### Key Difference from onChange/onSubmit

| Aspect | onChange / onSubmit | onCellEdit |
|--------|-------------------|------------|
| **Where it runs** | Form view | List view |
| **API available** | `g_form`, `g_user` | `callback`, `newValue`, `oldValues` |
| **How to block** | `return false` (onSubmit) | `callback(false, 'message')` |
| **Field binding** | onChange binds to a field | onCellEdit does not bind to a field |

---

## ✅ Expected Result

| Scenario | Result |
|----------|--------|
| Edit Priority to `1 - Critical` from the list | **Edit rejected.** An alert/message displays: *"Setting Priority to Critical is not allowed from the list view..."* The cell reverts to its original value. |
| Edit Priority to `2 - High` from the list | **Edit accepted.** The cell updates normally. |
| Edit Priority to `3 - Moderate` from the list | **Edit accepted.** The cell updates normally. |
| Edit a different field (e.g., Short Description) from the list | **Edit accepted.** The script only checks the Priority field. |
| Open the full Incident form and set Priority to Critical | **Allowed.** This script only runs on list-cell edits, not on the form. |

---

## 📂 Files in This Milestone

| File | Purpose |
|------|---------|
| `README.md` | This document — full configuration guide |
| `onCellEdit_priority_validation.js` | The onCellEdit Client Script source code |
| `test-cases.md` | Practical test cases |
| `screenshot-placeholder.md` | Instructions for screenshots to add |

---

## 🔗 Navigation

[← Milestone 4](../Milestone-4-onSubmit-Validation/) · [Main README](../README.md) · [Milestone 6 →](../Milestone-6-Testing/)
