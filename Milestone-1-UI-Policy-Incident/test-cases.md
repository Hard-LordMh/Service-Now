# Milestone 1 — Test Cases

## UI Policy: Make Description Mandatory on Critical Priority

All tests should be performed on the **Incident** form in your ServiceNow developer instance after the UI Policy from this milestone has been created and activated.

---

### Test Case 1 — Policy Activates on Critical Priority

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M1-001 |
| **Objective** | Verify that the Description field becomes mandatory and read-only when Priority is `1 - Critical` |
| **Preconditions** | UI Policy is active; open a new or existing Incident form |
| **Steps** | 1. Set **Impact** to `1 - High` and **Urgency** to `1 - High` (this sets Priority to `1 - Critical`). <br/> 2. Observe the **Description** field. |
| **Expected Result** | Description shows a **red asterisk** (mandatory) and is **greyed out / non-editable** (read-only). |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 2 — Policy Reverses on Non-Critical Priority

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M1-002 |
| **Objective** | Verify that the Description field returns to default behavior when Priority is not Critical |
| **Preconditions** | UI Policy is active; Incident is currently at Priority `1 - Critical` |
| **Steps** | 1. Change **Urgency** to `2 - Medium` (this changes Priority away from Critical). <br/> 2. Observe the **Description** field. |
| **Expected Result** | Description is **editable** and **not mandatory** (no red asterisk). |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 3 — Policy Evaluates on Form Load

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M1-003 |
| **Objective** | Verify that the policy evaluates when the form loads (not only on field change) |
| **Preconditions** | An existing Incident record with Priority `1 - Critical` |
| **Steps** | 1. Open the existing Incident record. <br/> 2. Immediately observe the **Description** field without changing any values. |
| **Expected Result** | Description is **mandatory** and **read-only** as soon as the form loads. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 4 — Policy Does Not Activate on Other Priorities

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M1-004 |
| **Objective** | Verify that the policy does not affect the Description field when Priority is 2, 3, 4, or 5 |
| **Preconditions** | UI Policy is active; open a new Incident form |
| **Steps** | 1. Set **Impact** to `2 - Medium` and **Urgency** to `2 - Medium`. <br/> 2. Observe the **Description** field. <br/> 3. Repeat for other non-Critical Priority combinations. |
| **Expected Result** | Description remains in its **default** state (editable, not mandatory unless required by other configurations). |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 5 — Pre-filled Description Is Preserved

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M1-005 |
| **Objective** | Verify that if Description already has text, the text is preserved when the field becomes read-only |
| **Preconditions** | Open a new Incident form |
| **Steps** | 1. Type `"Server outage in data center"` into the **Description** field. <br/> 2. Set Priority to `1 - Critical`. <br/> 3. Observe the Description field. |
| **Expected Result** | The text `"Server outage in data center"` is **still visible** and the field is now **read-only** — the existing value is not erased. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

> **Instructions:** Copy this file, fill in the *Actual Result* and *Status* columns after testing each case in your ServiceNow instance.
