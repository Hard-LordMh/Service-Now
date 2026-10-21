/**
 * ============================================================
 * ServiceNow Client Script — onChange
 * ============================================================
 *
 * Name:        Show Info Message on Impact Change
 * Table:       Incident (incident)
 * Type:        onChange
 * Field name:  impact
 * Active:      true
 *
 * Description:
 *   Displays a contextual informational message on the Incident
 *   form whenever the Impact field value changes. The message
 *   provides guidance to the user based on the selected impact
 *   level (High, Medium, or Low).
 *
 * Configuration:
 *   1. Navigate to System Definition → Client Scripts.
 *   2. Click New.
 *   3. Set Table = Incident, Type = onChange, Field name = impact.
 *   4. Paste this script into the Script field.
 *   5. Save / Submit.
 *
 * APIs Used:
 *   - g_form.clearMessages()       → Clears all form messages
 *   - g_form.addInfoMessage(msg)   → Shows a blue info banner
 *
 * Note:
 *   The messages below are EXAMPLES for learning purposes.
 *   Customize the text to match your organization's policies.
 * ============================================================
 */

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    // ---------------------------------------------------------
    // Guard: Do not execute on initial form load or when the
    // field is being set by a template. This prevents unwanted
    // messages from appearing before the user interacts.
    // ---------------------------------------------------------
    if (isLoading || newValue === '') {
        return;
    }

    // ---------------------------------------------------------
    // Clear any previous info or error messages to avoid
    // stacking multiple banners when the user changes Impact
    // several times in a row.
    // ---------------------------------------------------------
    g_form.clearMessages();

    // ---------------------------------------------------------
    // Display a contextual message based on the selected value.
    //
    // ServiceNow stores Impact as a choice value:
    //   '1' = High
    //   '2' = Medium
    //   '3' = Low
    // ---------------------------------------------------------
    switch (newValue) {
        case '1':
            g_form.addInfoMessage(
                'Impact set to HIGH — This incident affects a large number of users ' +
                'or a critical business service. Please ensure the Description and ' +
                'Assignment Group are filled in accurately.'
            );
            break;

        case '2':
            g_form.addInfoMessage(
                'Impact set to MEDIUM — This incident affects a moderate number of ' +
                'users or a non-critical business service.'
            );
            break;

        case '3':
            g_form.addInfoMessage(
                'Impact set to LOW — This incident affects a single user or a ' +
                'non-essential service.'
            );
            break;

        default:
            // No message for unexpected or custom values.
            break;
    }
}
