import './RadioButton.scss';

function RadioButton({ id, name, value, label, checked, onChange }) {
    return (
        <div className="radio-button">
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default RadioButton;
