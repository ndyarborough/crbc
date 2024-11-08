import './Text.scss';

function Text({ text, color, fontSize, fontWeight, fontFamily, className }) {
    const style = {
        color: color || 'inherit',         // Default to inherited color if not passed
        fontSize: fontSize || '16px',      // Default font size
        fontWeight: fontWeight || 'normal', // Default font weight
        fontFamily: fontFamily || 'Arial, sans-serif', // Default font family
    };

    return (
        <div className={`text ${className}`} style={style}>
            {text}
        </div>
    );
}

export default Text;
