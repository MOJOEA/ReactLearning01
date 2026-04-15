import PropTypes from 'prop-types'

export default function Checkbox({ Text, isChecked }) {
    let ReturnValue = isChecked ? "Checked" : "Not Checked";
    return (
        <>
            <label>
                <input type="checkbox" checked={isChecked} />
                {ReturnValue} {Text}
            </label>
            <br />
        </>
    )
}

Checkbox.propTypes = {
    Text: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
}