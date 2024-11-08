import './Label.scss';

function Label({ text, htmlFor, color, fontSize, fontWeight, fontFamily }) {
    const style = {
        color: color || 'inherit',         // Default to inherited color if not passed
        fontSize: fontSize || '1rem',      // Default font size
        fontWeight: fontWeight || 'normal', // Default font weight
        fontFamily: fontFamily || 'Arial, sans-serif', // Default font family
    };

    return (
        <label htmlFor={htmlFor} className="label" style={style}>
            {text}
        </label>
    );
}

export default Label;
