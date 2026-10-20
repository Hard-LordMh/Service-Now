# 🛠️ Implement Client Script & UI Policy (Incident)

> A complete, milestone-driven ServiceNow project demonstrating how to configure **UI Policies** and **Client Scripts** on the **Incident** table to enforce field behavior, validate submissions, and control list-cell edits.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Problem Statement](#problem-statement)
- [Objectives](#objectives)
- [Tools & Technologies](#tools--technologies)
- [Folder Structure](#folder-structure)
- [Milestones](#milestones)
- [Setup & Implementation Instructions](#setup--implementation-instructions)
- [Testing Methodology](#testing-methodology)
- [Screenshots](#screenshots)
- [Conclusion](#conclusion)
- [License](#license)

---

## Project Overview

This project walks through the end-to-end process of configuring **UI Policies** and **Client Scripts** on the ServiceNow **Incident** table. Each milestone tackles a distinct capability — from making fields mandatory or read-only through UI Policies, to running custom JavaScript logic on field changes, form submissions, and list-cell edits.

All scripts and configurations target a **standard Incident form** and use only **supported, documented ServiceNow APIs** (`g_form`, `g_user`, list-cell edit callback signatures). Business rules used in this project are clearly labeled as **examples** for learning purposes.

---

## Problem Statement

ServiceNow administrators and developers frequently need to:

1. **Control field visibility and editability** based on form conditions without writing code.
2. **React to field-value changes** in real time to guide the end user.
3. **Validate form data before submission** to prevent incomplete or incorrect records.
4. **Enforce data quality during list editing**, where users bypass the full form.

Without these controls, incidents may be created with missing critical data, inconsistent field values, or invalid combinations — leading to SLA breaches, misrouted tickets, and poor reporting quality.

---

## Objectives

| # | Objective | Approach |
|---|-----------|----------|
| 1 | Make the **Description** field mandatory and read-only when a condition is met | UI Policy (no code) |
| 2 | Set the **Urgency** field to a specific value and make it read-only | UI Policy Action (no code) |
| 3 | Display a dynamic info message when **Impact** changes | `onChange` Client Script |
| 4 | Prevent form submission when required fields are empty | `onSubmit` Client Script |
| 5 | Validate cell edits on the Incident list view | `onCellEdit` Client Script |
| 6 | Verify all configurations with structured test cases | Manual testing checklist |

---

## Tools & Technologies

| Tool / Technology | Purpose |
|-------------------|---------|
| **ServiceNow** (Paris release or later) | Platform for all configurations |
| **Incident Table** (`incident`) | Target table for UI Policies & Client Scripts |
| **UI Policy** | Declarative field control (mandatory, read-only, visible) |
| **Client Script** | Client-side JavaScript (onChange, onSubmit, onCellEdit) |
| **JavaScript (ES5)** | Scripting language used inside Client Scripts |
| **GlideForm API** (`g_form`) | ServiceNow client-side form manipulation API |
| **Markdown / GitHub** | Documentation and version control |

---

## Folder Structure

```
Implement-Client-Script-UI-Policy-Incident/
│
├── README.md                              ← You are here
│
├── Milestone-1-UI-Policy-Incident/
│   ├── README.md
│   ├── test-cases.md
│   └── screenshot-placeholder.md
│
├── Milestone-2-UI-Policy-Urgency/
│   ├── README.md
│   ├── test-cases.md
│   └── screenshot-placeholder.md
│
├── Milestone-3-onChange-Client-Script/
│   ├── README.md
│   ├── onChange_impact_message.js
│   ├── test-cases.md
│   └── screenshot-placeholder.md
│
├── Milestone-4-onSubmit-Validation/
│   ├── README.md
│   ├── onSubmit_save_validation.js
│   ├── test-cases.md
│   └── screenshot-placeholder.md
│
├── Milestone-5-onCellEdit-Client-Script/
│   ├── README.md
│   ├── onCellEdit_priority_validation.js
│   ├── test-cases.md
│   └── screenshot-placeholder.md
│
├── Milestone-6-Testing/
│   └── README.md                          ← Full testing checklist
│
├── Conclusion/
│   └── README.md                          ← Project summary & reflections
│
└── screenshots/
    └── README.md                          ← Instructions for adding screenshots
```

---

## Milestones

| Milestone | Title | Type | Link |
|-----------|-------|------|------|
| 1 | Create UI Policy on Incident | UI Policy (no code) | [Milestone 1](./Milestone-1-UI-Policy-Incident/) |
| 2 | Create UI Policy Action – Urgency | UI Policy Action (no code) | [Milestone 2](./Milestone-2-UI-Policy-Urgency/) |
| 3 | onChange Client Script | Client Script (JavaScript) | [Milestone 3](./Milestone-3-onChange-Client-Script/) |
| 4 | onSubmit Validation Client Script | Client Script (JavaScript) | [Milestone 4](./Milestone-4-onSubmit-Validation/) |
| 5 | onCellEdit Client Script | Client Script (JavaScript) | [Milestone 5](./Milestone-5-onCellEdit-Client-Script/) |
| 6 | Testing the Configuration | Testing Checklist | [Milestone 6](./Milestone-6-Testing/) |
| — | Conclusion | Summary & Reflections | [Conclusion](./Conclusion/) |

---

## Setup & Implementation Instructions

### Prerequisites

- Access to a **ServiceNow developer instance** ([developer.servicenow.com](https://developer.servicenow.com/)).
- The `admin` role or the `client_script_admin` / `policy_admin` roles.
- Familiarity with navigating the ServiceNow Application Navigator.

### Implementation Order

Follow the milestones **in sequence** — some later configurations depend on understanding the earlier ones.

1. **Milestone 1 → 2:** Configure the UI Policy and its Action first. These require no JavaScript and introduce the declarative approach.
2. **Milestone 3:** Create the `onChange` Client Script to see real-time field-change behavior.
3. **Milestone 4:** Create the `onSubmit` Client Script to enforce save-time validation.
4. **Milestone 5:** Create the `onCellEdit` Client Script to cover list-view editing.
5. **Milestone 6:** Run through the full testing checklist to verify everything works.

### How to Create a UI Policy

1. Navigate to **System UI → UI Policies**.
2. Click **New**.
3. Fill in the fields as documented in [Milestone 1](./Milestone-1-UI-Policy-Incident/README.md).
4. Save the record, then configure UI Policy Actions as documented in [Milestone 2](./Milestone-2-UI-Policy-Urgency/README.md).

### How to Create a Client Script

1. Navigate to **System Definition → Client Scripts**.
2. Click **New**.
3. Set the **Table**, **Type**, **Field Name** (for onChange), and paste the script from the relevant milestone folder.
4. Save and test on the Incident form or list view.

---

## Testing Methodology

All testing is **manual** and performed directly in a ServiceNow developer instance.

| Phase | What Is Tested | How |
|-------|---------------|-----|
| Unit | Each milestone in isolation | Open an Incident form/list, trigger the condition, observe the result |
| Integration | All milestones active simultaneously | Verify no conflicts between UI Policies and Client Scripts |
| Negative | Invalid or missing input | Confirm validation messages appear and submission is blocked |
| Edge Cases | Boundary values, rapid edits | Confirm scripts handle edge cases gracefully |

Detailed test cases are provided inside each milestone's `test-cases.md` file.  
A consolidated testing checklist is available in [Milestone 6](./Milestone-6-Testing/README.md).

---

## Screenshots

> **Note:** Screenshots are **not included** in this repository. Placeholder instructions are provided in each milestone's `screenshot-placeholder.md` file and in the [screenshots/](./screenshots/) folder.

After configuring each milestone in your own ServiceNow instance, capture and add screenshots as described in the placeholders. Recommended screenshots include:

- UI Policy configuration form
- UI Policy Action configuration
- Client Script configuration records
- Incident form showing field behavior (mandatory, read-only, info messages)
- Validation error messages on submit
- List-cell edit validation
- Final testing results

---

## Conclusion

A full project summary — including features implemented, learning outcomes, known limitations, and ideas for future improvement — is available in the [Conclusion](./Conclusion/README.md) document.

---

## License

This project is intended for **educational and portfolio purposes**. All configurations and scripts are designed for ServiceNow developer instances. Use in production environments should include proper testing, peer review, and change management.

---

<p align="center">
  <strong>Built for learning. Ready for your portfolio.</strong><br/>
  ⭐ Star this repository if you found it helpful!
</p>
"# Service-Now" 
"# sb-service-now-" 
