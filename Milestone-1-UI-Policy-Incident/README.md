# Milestone 1 — Create UI Policy on Incident

## 🎯 Objective

Create a **UI Policy** on the **Incident** table that automatically makes the **Description** field **mandatory** and **read-only** when a specific condition is met — without writing any JavaScript.

This demonstrates ServiceNow's **declarative** approach to controlling form field behavior.

---

## 📌 ServiceNow Table

| Property | Value |
|----------|-------|
| **Table** | Incident (`incident`) |
| **Module** | System UI → UI Policies |

---

## 🔧 Configuration Steps

### Step 1 — Navigate to UI Policies

1. Log in to your ServiceNow developer instance.
2. In the **Application Navigator** (left sidebar), type **UI Policies**.
3. Click **System UI → UI Policies**.
4. Click **New** to create a new UI Policy.

### Step 2 — Fill in the UI Policy Form

| Field | Value | Notes |
|-------|-------|-------|
| **Name** | `Make Description Mandatory on Critical Priority` | Descriptive name for easy identification |
| **Table** | `Incident [incident]` | Select from the dropdown |
| **Active** | `true` (checked) | Ensures the policy is active |
| **Short description** | `When Priority is Critical, make Description mandatory and read-only` | Optional but recommended |
| **Order** | `100` | Default; adjust if you have multiple policies |
| **On load** | `true` (checked) | Evaluate when the form first loads |
| **Reverse if false** | `true` (checked) | Revert field behavior when the condition is no longer met |
| **Global** | `true` (checked) | Apply to all views (or select a specific view) |

### Step 3 — Define the Condition

In the **Conditions** section of the UI Policy form, build the following condition:

```
Priority  is  1 - Critical
```

This means the policy will activate **only** when the Incident's Priority field equals `1 - Critical`.

> **Note:** Priority in ServiceNow is typically auto-calculated from Impact and Urgency. You can also use Impact or Urgency directly if you prefer a condition you can control more easily during testing.

### Step 4 — Save the UI Policy

Click **Submit** (or **Save** if you want to stay on the record to add UI Policy Actions).

### Step 5 — Add UI Policy Actions

After saving the UI Policy, scroll down to the **UI Policy Actions** related list and click **New**. Configure the action for the **Description** field:

| Field | Value |
|-------|-------|
| **Field name** | `Description` |
| **Mandatory** | `true` |
| **Read only** | `true` |
| **Visible** | `— Leave as default (true) —` |

Click **Submit** to save the action.

---

## 🧠 Logic Explanation

```
IF Priority == "1 - Critical"
    THEN
        Description → Mandatory = true
        Description → Read Only = true
ELSE (because Reverse if false = true)
        Description → Mandatory = false (reverts to default)
        Description → Read Only = false (reverts to default)
```

- **No JavaScript is needed.** The UI Policy engine evaluates the condition client-side whenever the form loads or the Priority field changes.
- **Reverse if false** ensures that when Priority is changed away from Critical, the Description field returns to its normal (editable, non-mandatory) state.

---

## ✅ Expected Result

| Scenario | Description Field Behavior |
|----------|---------------------------|
| Priority = `1 - Critical` | Description becomes **mandatory** (red asterisk) and **read-only** (greyed out) |
| Priority = `2 - High` | Description returns to its **default** behavior (editable, not mandatory) |
| Priority = `3 - Moderate` | Description returns to its **default** behavior |
| Form loads with Priority = `1 - Critical` | Description is immediately **mandatory** and **read-only** |

---

## 📂 Files in This Milestone

| File | Purpose |
|------|---------|
| `README.md` | This document — full configuration guide |
| `test-cases.md` | Practical test cases for this UI Policy |
| `screenshot-placeholder.md` | Instructions for screenshots to add |

> **No JavaScript file** is included in this milestone because UI Policies are configured declaratively through the ServiceNow UI — no scripting is required.

---

## 🔗 Navigation

← [Main README](../README.md) · [Milestone 2 →](../Milestone-2-UI-Policy-Urgency/)
