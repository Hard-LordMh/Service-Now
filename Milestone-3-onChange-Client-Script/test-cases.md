# Milestone 3 — Test Cases

## onChange Client Script: Show Info Message on Impact Change

All tests should be performed on the **Incident** form after creating the onChange Client Script.

---

### Test Case 1 — Info Message on High Impact

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M3-001 |
| **Objective** | Verify that an informational message appears when Impact is set to `1 - High` |
| **Preconditions** | Client Script is active; open a new Incident form |
| **Steps** | 1. Change the **Impact** field to `1 - High`. <br/> 2. Observe the top of the form. |
| **Expected Result** | A **blue info banner** appears: *"Impact set to HIGH — This incident affects a large number of users..."* |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 2 — Info Message on Medium Impact

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M3-002 |
| **Objective** | Verify that the message updates when Impact changes to `2 - Medium` |
| **Preconditions** | Impact is currently `1 - High` (previous message visible) |
| **Steps** | 1. Change **Impact** to `2 - Medium`. <br/> 2. Observe the top of the form. |
| **Expected Result** | Previous message **clears**; a new message appears: *"Impact set to MEDIUM..."* |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 3 — Info Message on Low Impact

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M3-003 |
| **Objective** | Verify that the correct message appears for `3 - Low` Impact |
| **Preconditions** | Open a new or existing Incident form |
| **Steps** | 1. Change **Impact** to `3 - Low`. <br/> 2. Observe the top of the form. |
| **Expected Result** | A message appears: *"Impact set to LOW — This incident affects a single user..."* |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 4 — No Message on Form Load

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M3-004 |
| **Objective** | Verify that no message appears when the form first loads |
| **Preconditions** | An existing Incident with Impact set to `1 - High` |
| **Steps** | 1. Open the existing Incident record. <br/> 2. Observe the top of the form — do **not** change any fields. |
| **Expected Result** | **No info message** is displayed on load. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 5 — Messages Do Not Stack

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M3-005 |
| **Objective** | Verify that changing Impact multiple times does not stack messages |
| **Preconditions** | Open a new Incident form |
| **Steps** | 1. Change Impact to `1 - High` → observe message. <br/> 2. Change Impact to `2 - Medium` → observe message. <br/> 3. Change Impact to `3 - Low` → observe message. |
| **Expected Result** | At each step, only **one** info message is visible — the previous message is cleared before the new one appears. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

> **Instructions:** Fill in *Actual Result* and *Status* after testing in your ServiceNow instance.
