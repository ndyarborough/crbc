import './Input.scss';

function Input({ type, placeholder, value, onChange, name, onFocus }) {
    const isTextArea = type === 'textarea';

    return (
        <div className='input'>
            {isTextArea ? (
                <textarea
                    name={name}                      // Add name for identifying in the parent form
                    placeholder={placeholder || ''}  // Default empty placeholder
                    value={value || ''}               // Default value is an empty string
                    onChange={onChange}               // Handle change event
                    onFocus={onFocus}                 // Handle focus event
                />
            ) : (
                <input
                    name={name}                       // Add name for identifying in the parent form
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
