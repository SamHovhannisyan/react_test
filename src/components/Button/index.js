const Button = ({title, color, bgColor}) => {
    return <button style={{
        color: color,
        background: bgColor,
        border: 'none',
        borderRadius: '12px',
        padding: '8px 40px',
        fontSize: '19px',
        lineHeight: '30px',
    }}>{title}</button>
}

export default Button;