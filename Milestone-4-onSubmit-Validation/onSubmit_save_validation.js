/**
 * ============================================================
 * ServiceNow Client Script — onSubmit
 * ============================================================
 *
 * Name:        Validate Required Fields Before Save
 * Table:       Incident (incident)
 * Type:        onSubmit
 * Field name:  (not applicable — onSubmit scripts are not
 *              bound to a specific field)
 * Active:      true
 *
 * Description:
 *   Validates that the Short Description and Category fields
 *   are populated before allowing the Incident form to be
 *   submitted. If either field is empty, the script:
 *     - Shows an inline error message under the empty field
 *     - Marks the field as mandatory
 *     - Shows a form-level error banner
 *     - Returns false to prevent submission
 *
 * Configuration:
 *   1. Navigate to System Definition → Client Scripts.
 *   2. Click New.
 *   3. Set Table = Incident, Type = onSubmit.
 *   4. Leave Field name blank.
 *   5. Paste this script into the Script field.
 *   6. Save / Submit.
 *
 * APIs Used:
 *   - g_form.getValue(field)               → Get field value
 *   - g_form.showFieldMsg(field, msg, type) → Inline field message
 *   - g_form.setMandatory(field, bool)      → Dynamic mandatory flag
 *   - g_form.addErrorMessage(msg)           → Form-level error banner
 *
 * Note:
 *   The fields validated here (Short Description, Category) are
 *   EXAMPLES for learning purposes. Customize the validated
 *   fields to match your organization's requirements.
 * ============================================================
 */

function onSubmit() {
    // ---------------------------------------------------------
    // Track whether all validations pass.
    // If any check fails, this flag is set to false and the
    // form submission will be blocked.
    // ---------------------------------------------------------
    var isValid = true;

    // ---------------------------------------------------------
    // Validation 1: Short Description
    //
    // The 'short_description' field is a standard field on the
    // Incident table. We check if it is empty or contains only
    // whitespace characters.
    // ---------------------------------------------------------
    var shortDesc = g_form.getValue('short_description');
    if (!shortDesc || shortDesc.trim() === '') {
        g_form.showFieldMsg(
            'short_description',
            'Short Description is required before saving.',
            'error'
        );
        g_form.setMandatory('short_description', true);
        isValid = false;
    }

    // ---------------------------------------------------------
    // Validation 2: Category
    //
    // The 'category' field is a choice field on the Incident
    // table. An empty value means the user has not selected
    // a category from the dropdown.
    // ---------------------------------------------------------
    var category = g_form.getValue('category');
    if (!category || category.trim() === '') {
        g_form.showFieldMsg(
            'category',
            'Please select a Category before saving.',
            'error'
        );
        g_form.setMandatory('category', true);
        isValid = false;
    }

    // ---------------------------------------------------------
    // Final decision: Block or allow submission
    // ---------------------------------------------------------
    if (!isValid) {
        // Show a prominent error banner at the top of the form
        g_form.addErrorMessage(
            'Submission blocked — Please fill in all required fields ' +
            'highlighted above before saving this Incident.'
        );

        // Returning false prevents the form from being submitted
        return false;
    }

    // All validations passed — allow form submission
    return true;
}
