# Milestone 4 — Test Cases

## onSubmit Client Script: Validate Required Fields Before Save

All tests should be performed on the **Incident** form after creating the onSubmit Client Script.

---

### Test Case 1 — Both Fields Empty → Submission Blocked

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M4-001 |
| **Objective** | Verify that submission is blocked when both Short Description and Category are empty |
| **Preconditions** | Client Script is active; open a new Incident form |
| **Steps** | 1. Leave **Short Description** empty. <br/> 2. Leave **Category** unselected (empty). <br/> 3. Click **Save** or **Submit**. |
| **Expected Result** | Submission is **blocked**. Red error messages appear under both fields. A red error banner appears at the top of the form. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 2 — Short Description Filled, Category Empty → Blocked

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M4-002 |
| **Objective** | Verify that submission is blocked when only Category is empty |
| **Preconditions** | Open a new Incident form |
| **Steps** | 1. Type `"Email service not responding"` in **Short Description**. <br/> 2. Leave **Category** empty. <br/> 3. Click **Save**. |
| **Expected Result** | Submission is **blocked**. Error appears only under Category. No error under Short Description. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 3 — Category Filled, Short Description Empty → Blocked

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M4-003 |
| **Objective** | Verify that submission is blocked when only Short Description is empty |
| **Preconditions** | Open a new Incident form |
| **Steps** | 1. Select `Software` (or any value) in **Category**. <br/> 2. Leave **Short Description** empty. <br/> 3. Click **Save**. |
| **Expected Result** | Submission is **blocked**. Error appears only under Short Description. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 4 — Both Fields Filled → Submission Succeeds

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M4-004 |
| **Objective** | Verify that submission succeeds when both fields are populated |
| **Preconditions** | Open a new Incident form |
| **Steps** | 1. Type `"Printer not working on 3rd floor"` in **Short Description**. <br/> 2. Select `Hardware` in **Category**. <br/> 3. Click **Save**. |
| **Expected Result** | The Incident is **saved successfully**. No error messages appear. The form reloads with the saved record. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 5 — Whitespace-Only Short Description → Blocked

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M4-005 |
| **Objective** | Verify that a Short Description containing only spaces is treated as empty |
| **Preconditions** | Open a new Incident form |
| **Steps** | 1. Type **three spaces** (`   `) in **Short Description**. <br/> 2. Select a Category. <br/> 3. Click **Save**. |
| **Expected Result** | Submission is **blocked**. The `.trim()` logic detects the whitespace-only value as empty. Error appears under Short Description. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 6 — Error Messages Clear After Correction

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M4-006 |
| **Objective** | Verify that error messages do not persist after the user corrects the fields and re-submits |
| **Preconditions** | Previous submission was blocked (errors visible) |
| **Steps** | 1. Fill in **Short Description** with valid text. <br/> 2. Select a **Category**. <br/> 3. Click **Save** again. |
| **Expected Result** | The Incident is **saved successfully**. Previous error messages are no longer relevant (note: inline field messages may persist visually until the page reloads on successful save). |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

> **Instructions:** Fill in *Actual Result* and *Status* after testing in your ServiceNow instance.
