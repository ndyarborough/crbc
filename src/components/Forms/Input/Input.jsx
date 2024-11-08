import './Input.scss';

function Input({ type, placeholder, value, onChange, onFocus }) {
    const isTextArea = type === 'textarea';

    return (
        <div className='input'>
            {isTextArea ? (
                <textarea
                    placeholder={placeholder || ''}  // Default empty placeholder
                    value={value || ''}               // Default value is an empty string
                    onChange={onChange}               // Handle change event
                    onFocus={onFocus}                 // Handle focus event
                />
            ) : (
                <input
                    type={type || 'text'}             // Default to text if no type is provided
                    placeholder={placeholder || ''}  // Default empty placeholder
                    value={value || ''}              // Default value is an empty string
                    onChange={onChange}              // Handle change event
                    onFocus={onFocus}                // Handle focus event
                />
            )}
        </div>
    );
}

export default Input;
