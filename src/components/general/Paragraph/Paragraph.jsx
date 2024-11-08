import './Paragraph.scss';

function Paragraph({
    text,
    size = '16px',
    fontFamily = 'Lato, sans-serif',
    fontWeight = 'normal',
    color = '#4B4B4B', // Gray-color from _variables.scss
    lineHeight = '40px',
}) {
    return (
        <p 
            className='paragraph'
            style={{
                fontSize: size,
                fontFamily: fontFamily,
                fontWeight: fontWeight,
                color: color,
                lineHeight: lineHeight,
            }}
        >
            {text}
        </p>
    );
}

export default Paragraph;
