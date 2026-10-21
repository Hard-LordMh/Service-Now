/**
 * ============================================================
 * ServiceNow Client Script — onCellEdit
 * ============================================================
 *
 * Name:        Prevent Critical Priority on List Edit
 * Table:       Incident (incident)
 * Type:        onCellEdit
 * Field name:  (not applicable — onCellEdit scripts are not
 *              bound to a specific field)
 * Active:      true
 *
 * Description:
 *   Validates cell edits made from the Incident list view.
 *   If a user attempts to set the Priority field to
 *   "1 - Critical" via list editing, the script rejects
 *   the change and displays a message instructing the user
 *   to open the full Incident form instead.
 *
 * Configuration:
 *   1. Navigate to System Definition → Client Scripts.
 *   2. Click New.
 *   3. Set Table = Incident, Type = onCellEdit.
 *   4. Leave Field name blank.
 *   5. Paste this script into the Script field.
 *   6. Save / Submit.
 *
 * Prerequisites:
 *   - List editing must be enabled in the instance.
 *     (System Properties → UI Properties → Enable list edit)
 *
 * API Signature:
 *   function onCellEdit(sysIDs, table, oldValues, newValue, callback)
 *
 *   Parameters:
 *     sysIDs    (Array)          - sys_ids of records being edited
 *     table     (String)         - Table name (e.g., 'incident')
 *     oldValues (Object)         - Old values keyed by sys_id
 *     newValue  (GlideListValue) - Object with getName() and getValue()
 *     callback  (Function)       - Call callback(true) to allow,
 *                                  callback(false, 'msg') to reject
 *
 * Note:
 *   This restriction is an EXAMPLE for learning purposes.
 *   Your organization may have different rules about which
 *   fields can be edited from the list view.
 * ============================================================
 */

function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    // ---------------------------------------------------------
    // Determine which field is being edited.
    //
    // The newValue object provides getName() to return the
    // internal field name (e.g., 'priority', 'short_description')
    // and getValue() to return the new value being set.
    // ---------------------------------------------------------
    var fieldName = newValue.getName();

    // ---------------------------------------------------------
    // Only apply validation to the 'priority' field.
    // All other field edits are allowed without restriction.
    // ---------------------------------------------------------
    if (fieldName === 'priority') {
        var newVal = newValue.getValue();

        // -----------------------------------------------------
        // Check if the user is trying to set Priority to
        // "1 - Critical". In ServiceNow, the value '1'
        // corresponds to the "1 - Critical" choice.
        // -----------------------------------------------------
        if (newVal === '1') {
            // Reject the edit with an explanatory message.
            // callback(false, message) prevents the cell from
            // being updated and displays the message to the user.
            callback(
                false,
                'Setting Priority to Critical is not allowed from the list view. ' +
                'Please open the Incident form to set Critical priority so that ' +
                'all required fields can be reviewed.'
            );
            return;
        }
    }

    // ---------------------------------------------------------
    // If we reach here, the edit is either:
    //   - Not on the Priority field, OR
    //   - Priority is being set to a non-Critical value
    //
    // Allow the edit by calling callback(true).
    // ---------------------------------------------------------
    callback(true);
}
