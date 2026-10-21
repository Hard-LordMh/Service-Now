# Milestone 2 — Test Cases

## UI Policy Action: Set Urgency to High on Critical Priority

All tests should be performed on the **Incident** form after completing both Milestone 1 (UI Policy) and Milestone 2 (Urgency Action).

---

### Test Case 1 — Urgency Auto-Set on Critical Priority

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M2-001 |
| **Objective** | Verify that Urgency is automatically set to `1 - High` when Priority becomes Critical |
| **Preconditions** | UI Policy and both actions are active; open a new Incident |
| **Steps** | 1. Set **Impact** to `1 - High`. <br/> 2. Set **Urgency** to `1 - High` (Priority becomes `1 - Critical`). <br/> 3. Observe the **Urgency** field. |
| **Expected Result** | Urgency displays `1 - High` and is **read-only** (greyed out). |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 2 — Urgency Reverts When Priority Changes

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M2-002 |
| **Objective** | Verify that Urgency reverts to its editable state when Priority is no longer Critical |
| **Preconditions** | Incident currently at Priority `1 - Critical` |
| **Steps** | 1. Change **Impact** to `2 - Medium`. <br/> 2. Observe the **Urgency** field. |
| **Expected Result** | Urgency becomes **editable** and its value may revert (depending on Reverse if false behavior). |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 3 — Urgency Is Read-Only on Form Load

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M2-003 |
| **Objective** | Verify that Urgency is read-only when an existing Critical Incident is opened |
| **Preconditions** | An existing Incident with Priority `1 - Critical` saved in the system |
| **Steps** | 1. Open the existing Incident record. <br/> 2. Immediately observe the **Urgency** field without changing anything. |
| **Expected Result** | Urgency shows `1 - High` and is **read-only** on form load. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 4 — Both Actions Work Together

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M2-004 |
| **Objective** | Verify that both the Description action (Milestone 1) and the Urgency action (Milestone 2) fire simultaneously |
| **Preconditions** | Both UI Policy Actions are active |
| **Steps** | 1. Open a new Incident. <br/> 2. Set Priority to `1 - Critical`. <br/> 3. Observe **both** the Description and Urgency fields. |
| **Expected Result** | Description is **mandatory + read-only**; Urgency is set to `1 - High` and **read-only**. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

### Test Case 5 — No Effect on Non-Critical Priorities

| Property | Detail |
|----------|--------|
| **Test ID** | TC-M2-005 |
| **Objective** | Verify that Urgency behaves normally when Priority is not Critical |
| **Preconditions** | Open a new Incident |
| **Steps** | 1. Set **Impact** to `3 - Low` and **Urgency** to `3 - Low`. <br/> 2. Observe the **Urgency** field. |
| **Expected Result** | Urgency is **editable** and shows `3 - Low` — no policy interference. |
| **Actual Result** | *(Fill in after testing)* |
| **Status** | ⬜ Pass / ⬜ Fail |

---

> **Instructions:** Fill in *Actual Result* and *Status* after testing in your ServiceNow instance.
