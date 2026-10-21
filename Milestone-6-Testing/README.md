# Milestone 6 — Testing the Configuration

## 🎯 Objective

Provide a **complete testing checklist** covering all five implementation milestones. This document serves as a structured quality assurance tool to verify that every UI Policy and Client Script is functioning correctly — both individually and when all configurations are active simultaneously.

---

## 📋 Pre-Testing Checklist

Before running the test cases, confirm the following:

| # | Item | Status |
|---|------|--------|
| 1 | ServiceNow developer instance is running | ⬜ Ready |
| 2 | Logged in with `admin` role | ⬜ Ready |
| 3 | UI Policy (Milestone 1) is **Active** | ⬜ Ready |
| 4 | UI Policy Action — Description (Milestone 1) is configured | ⬜ Ready |
| 5 | UI Policy Action — Urgency (Milestone 2) is configured | ⬜ Ready |
| 6 | onChange Client Script (Milestone 3) is **Active** | ⬜ Ready |
| 7 | onSubmit Client Script (Milestone 4) is **Active** | ⬜ Ready |
| 8 | onCellEdit Client Script (Milestone 5) is **Active** | ⬜ Ready |
| 9 | List editing is enabled in the instance | ⬜ Ready |
| 10 | Browser JavaScript console is open for debugging (F12) | ⬜ Ready |

---

## 🧪 Consolidated Testing Checklist

### Section A — UI Policy: Description Field (Milestone 1)

| Test ID | Test Description | Expected Result | Actual Result | Status |
|---------|-----------------|-----------------|---------------|--------|
| TC-A01 | Set Priority to `1 - Critical` | Description becomes **mandatory** and **read-only** | | ⬜ Pass / ⬜ Fail |
| TC-A02 | Change Priority away from Critical | Description reverts to **editable** and **not mandatory** | | ⬜ Pass / ⬜ Fail |
| TC-A03 | Open existing Critical Incident | Description is mandatory + read-only **on form load** | | ⬜ Pass / ⬜ Fail |
| TC-A04 | Open Incident with non-Critical Priority | Description is in **default** state | | ⬜ Pass / ⬜ Fail |
| TC-A05 | Pre-fill Description, then set Critical Priority | Text is **preserved**; field becomes read-only | | ⬜ Pass / ⬜ Fail |

---

### Section B — UI Policy Action: Urgency (Milestone 2)

| Test ID | Test Description | Expected Result | Actual Result | Status |
|---------|-----------------|-----------------|---------------|--------|
| TC-B01 | Set Priority to `1 - Critical` | Urgency auto-set to `1 - High` and **read-only** | | ⬜ Pass / ⬜ Fail |
| TC-B02 | Change Priority away from Critical | Urgency reverts to **editable** | | ⬜ Pass / ⬜ Fail |
| TC-B03 | Open existing Critical Incident | Urgency is `1 - High` and **read-only on load** | | ⬜ Pass / ⬜ Fail |
| TC-B04 | Both actions fire together | Description (mandatory + read-only) AND Urgency (set + read-only) | | ⬜ Pass / ⬜ Fail |
| TC-B05 | Non-Critical Priority | Urgency is **editable**, default behavior | | ⬜ Pass / ⬜ Fail |

---

### Section C — onChange Client Script: Impact Message (Milestone 3)

| Test ID | Test Description | Expected Result | Actual Result | Status |
|---------|-----------------|-----------------|---------------|--------|
| TC-C01 | Change Impact to `1 - High` | Blue info message: *"Impact set to HIGH..."* | | ⬜ Pass / ⬜ Fail |
| TC-C02 | Change Impact to `2 - Medium` | Previous message clears; new message: *"Impact set to MEDIUM..."* | | ⬜ Pass / ⬜ Fail |
| TC-C03 | Change Impact to `3 - Low` | Message: *"Impact set to LOW..."* | | ⬜ Pass / ⬜ Fail |
| TC-C04 | Open existing Incident (no changes) | **No info message** on form load | | ⬜ Pass / ⬜ Fail |
| TC-C05 | Change Impact multiple times rapidly | Only **one** message visible at a time (no stacking) | | ⬜ Pass / ⬜ Fail |

---

### Section D — onSubmit Client Script: Save Validation (Milestone 4)

| Test ID | Test Description | Expected Result | Actual Result | Status |
|---------|-----------------|-----------------|---------------|--------|
| TC-D01 | Both Short Description & Category empty → Save | **Blocked.** Errors under both fields + red banner | | ⬜ Pass / ⬜ Fail |
| TC-D02 | Short Description filled, Category empty → Save | **Blocked.** Error only under Category | | ⬜ Pass / ⬜ Fail |
| TC-D03 | Category filled, Short Description empty → Save | **Blocked.** Error only under Short Description | | ⬜ Pass / ⬜ Fail |
| TC-D04 | Both fields filled → Save | **Saved successfully.** No errors | | ⬜ Pass / ⬜ Fail |
| TC-D05 | Whitespace-only Short Description → Save | **Blocked.** Treated as empty by `.trim()` | | ⬜ Pass / ⬜ Fail |
| TC-D06 | Fix errors after blocked submission → Save | **Saved successfully** on second attempt | | ⬜ Pass / ⬜ Fail |

---

### Section E — onCellEdit Client Script: List Priority Validation (Milestone 5)

| Test ID | Test Description | Expected Result | Actual Result | Status |
|---------|-----------------|-----------------|---------------|--------|
| TC-E01 | Edit Priority to `1 - Critical` from list | **Rejected.** Message shown; cell reverts | | ⬜ Pass / ⬜ Fail |
| TC-E02 | Edit Priority to `2 - High` from list | **Accepted.** Cell updates normally | | ⬜ Pass / ⬜ Fail |
| TC-E03 | Edit Short Description from list | **Accepted.** Script does not interfere | | ⬜ Pass / ⬜ Fail |
| TC-E04 | Set Critical Priority from full form | **Allowed.** onCellEdit does not run on forms | | ⬜ Pass / ⬜ Fail |
| TC-E05 | Edit Priority to `4 - Low` from list | **Accepted.** Cell updates normally | | ⬜ Pass / ⬜ Fail |

---

### Section F — Integration Tests (All Milestones Active)

| Test ID | Test Description | Expected Result | Actual Result | Status |
|---------|-----------------|-----------------|---------------|--------|
| TC-F01 | Create new Incident → set Critical Priority → fill fields → Save | UI Policy fires (Description mandatory/read-only, Urgency auto-set). onSubmit validates. Incident saves if valid. | | ⬜ Pass / ⬜ Fail |
| TC-F02 | Change Impact on a Critical Incident | Both UI Policy and onChange script fire without conflict | | ⬜ Pass / ⬜ Fail |
| TC-F03 | Try to save Critical Incident with empty Short Description | onSubmit blocks the save. UI Policy keeps Description mandatory. Both work together. | | ⬜ Pass / ⬜ Fail |
| TC-F04 | Edit Priority to Critical from the list view | onCellEdit rejects the edit. List cell reverts. | | ⬜ Pass / ⬜ Fail |
| TC-F05 | Deactivate all configurations → verify form returns to default | No policies or scripts fire. Form behaves as default. | | ⬜ Pass / ⬜ Fail |

---

## 📊 Test Summary

| Section | Total Tests | Passed | Failed | Notes |
|---------|-------------|--------|--------|-------|
| A — UI Policy (Description) | 5 | | | |
| B — UI Policy Action (Urgency) | 5 | | | |
| C — onChange (Impact Message) | 5 | | | |
| D — onSubmit (Save Validation) | 6 | | | |
| E — onCellEdit (List Priority) | 5 | | | |
| F — Integration | 5 | | | |
| **Total** | **31** | | | |

---

## 🐛 Troubleshooting Tips

| Issue | Possible Cause | Resolution |
|-------|---------------|------------|
| UI Policy does not fire | Policy is inactive or condition is incorrect | Verify Active = true and condition matches Priority = 1 - Critical |
| onChange message does not appear | Client Script is inactive or field name is wrong | Verify Active = true and Field name = `impact` (lowercase) |
| onSubmit does not block save | Script has a syntax error or is not active | Check browser console (F12) for JavaScript errors |
| onCellEdit does not run | List editing is disabled | Enable via System Properties → UI Properties |
| Multiple info messages stacking | `g_form.clearMessages()` not executing | Verify the script matches the provided code exactly |
| Fields not reverting when Priority changes | `Reverse if false` is not checked | Open the UI Policy and enable Reverse if false |

---

## 🔗 Navigation

[← Milestone 5](../Milestone-5-onCellEdit-Client-Script/) · [Main README](../README.md) · [Conclusion →](../Conclusion/)
