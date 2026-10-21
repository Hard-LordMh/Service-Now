# Milestone 5 — Test Cases

## onCellEdit Client Script: Prevent Critical Priority on List Edit

All tests should be performed on the **Incident list view** after creating the onCellEdit Client Script. Ensure list editing is enabled in your instance.

---

### Test Case 1 — Critical Priority Rejected on List Edit

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M5-001 |
| **Objective** | Verify that setting Priority to `1 - Critical` is rejected from the list view |
| **Preconditions** | Client Script is active; list editing is enabled; navigate to the Incident list |
| **Steps** | 1. Navigate to **Incident → All** (or any Incident list view). <br/> 2. Double-click the **Priority** cell of any Incident record. <br/> 3. Select `1 - Critical` from the dropdown. <br/> 4. Press Enter or click away to confirm. |
| **Expected Result** | The edit is **rejected**. A message appears: *"Setting Priority to Critical is not allowed from the list view..."* The cell reverts to its original value. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 2 — Non-Critical Priority Allowed on List Edit

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M5-002 |
| **Objective** | Verify that setting Priority to `2 - High` is allowed from the list view |
| **Preconditions** | Same as above |
| **Steps** | 1. Double-click the **Priority** cell of an Incident. <br/> 2. Select `2 - High`. <br/> 3. Press Enter or click away. |
| **Expected Result** | The edit is **accepted**. The cell updates to `2 - High`. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 3 — Other Fields Not Affected

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M5-003 |
| **Objective** | Verify that editing non-Priority fields from the list is not affected by this script |
| **Preconditions** | Same as above |
| **Steps** | 1. Double-click the **Short Description** cell of an Incident. <br/> 2. Change the text to `"Updated from list view"`. <br/> 3. Press Enter or click away. |
| **Expected Result** | The edit is **accepted**. Short Description updates to the new value. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 4 — Critical Priority Allowed on Full Form

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M5-004 |
| **Objective** | Verify that the onCellEdit restriction does **not** apply to the full Incident form |
| **Preconditions** | Open an Incident record (full form view) |
| **Steps** | 1. Open an Incident in full form view. <br/> 2. Set **Impact** to `1 - High` and **Urgency** to `1 - High` (or directly change Priority if the field is editable). <br/> 3. Click **Save**. |
| **Expected Result** | The Incident is **saved** with Priority `1 - Critical`. The onCellEdit script does not interfere with form-view edits. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 5 — Priority Set to Low from List

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M5-005 |
| **Objective** | Verify that Priority values `3 - Moderate`, `4 - Low`, `5 - Planning` are all allowed |
| **Preconditions** | Same list view setup |
| **Steps** | 1. Double-click the **Priority** cell. <br/> 2. Select `4 - Low`. <br/> 3. Press Enter or click away. |
| **Expected Result** | The edit is **accepted**. The cell updates to `4 - Low`. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

> **Instructions:** Fill in *Actual Result* and *Status* after testing in your ServiceNow instance.
