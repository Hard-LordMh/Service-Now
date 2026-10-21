# Milestone 2 — Create UI Policy Action: Urgency

## 🎯 Objective

Extend the UI Policy created in [Milestone 1](../Milestone-1-UI-Policy-Incident/) by adding a **UI Policy Action** that automatically sets the **Urgency** field to `1 - High` and makes it **read-only** when the policy condition is met.

This demonstrates how UI Policy Actions can **set field values** in addition to controlling mandatory, read-only, and visibility states.

---

## 📌 ServiceNow Table

| Property | Value |
|----------|-------|
| **Table** | Incident (`incident`) |
| **Parent UI Policy** | `Make Description Mandatory on Critical Priority` (from Milestone 1) |
| **Module** | System UI → UI Policies → *[open policy]* → UI Policy Actions related list |

---

## 🔧 Configuration Steps

### Step 1 — Open the Existing UI Policy

1. Navigate to **System UI → UI Policies**.
2. Open the UI Policy created in Milestone 1: `Make Description Mandatory on Critical Priority`.

### Step 2 — Add a New UI Policy Action

1. Scroll down to the **UI Policy Actions** related list at the bottom of the form.
2. Click **New**.

### Step 3 — Configure the Urgency Action

| Field | Value | Notes |
|-------|-------|-------|
| **Field name** | `Urgency` | Select from the dropdown |
| **Mandatory** | `— Leave default —` | We are not changing mandatory status |
| **Read only** | `true` | Prevent users from changing Urgency |
| **Visible** | `— Leave default (true) —` | Keep the field visible |
| **Value** | `1 - High` | Auto-set Urgency to High |

### Step 4 — Save the Action

Click **Submit** to save the UI Policy Action.

### Step 5 — Verify the UI Policy Now Has Two Actions

After saving, the UI Policy should show **two** actions in the related list:

| # | Field | Mandatory | Read Only | Value |
|---|-------|-----------|-----------|-------|
| 1 | Description | true | true | *(not set)* |
| 2 | Urgency | *(default)* | true | `1 - High` |

---

## 🧠 Logic Explanation

```
IF Priority == "1 - Critical"
    THEN
        Description → Mandatory = true, Read Only = true
        Urgency    → Value = "1 - High", Read Only = true
ELSE (Reverse if false = true)
        Description → reverts to default
        Urgency    → reverts to default (editable, original value restored)
```

### Why Set Urgency via UI Policy Action?

- **Consistency:** When an Incident is Critical, the Urgency should always reflect high urgency. Setting it through a UI Policy Action enforces this without requiring a Business Rule or script.
- **User guidance:** Making the field read-only prevents users from accidentally changing Urgency to a lower value on a Critical incident.
- **Reversibility:** Because `Reverse if false` is enabled on the parent UI Policy, changing Priority away from Critical will restore Urgency to its previous state and make it editable again.

> **Example business rule note:** The rule "Critical incidents must have Urgency set to High" is an **example** used for learning purposes. Your organization may have different requirements. Always follow your organization's actual incident management policies.

---

## ✅ Expected Result

| Scenario | Urgency Field Behavior |
|----------|----------------------|
| Priority changes to `1 - Critical` | Urgency is **automatically set to `1 - High`** and becomes **read-only** |
| Priority changes away from Critical | Urgency **reverts to its previous value** and becomes **editable** |
| Form loads with Priority = `1 - Critical` | Urgency is immediately `1 - High` and **read-only** |
| New Incident with default Priority | Urgency behaves **normally** (editable, default value) |

---

## 📂 Files in This Milestone

| File | Purpose |
|------|---------|
| `README.md` | This document — full configuration guide |
| `test-cases.md` | Practical test cases for the Urgency UI Policy Action |
| `screenshot-placeholder.md` | Instructions for screenshots to add |

> **No JavaScript file** is included in this milestone. UI Policy Actions are configured declaratively — no scripting is required.

---

## 🔗 Navigation

[← Milestone 1](../Milestone-1-UI-Policy-Incident/) · [Main README](../README.md) · [Milestone 3 →](../Milestone-3-onChange-Client-Script/)
