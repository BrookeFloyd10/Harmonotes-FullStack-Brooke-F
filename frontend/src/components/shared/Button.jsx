const Button =({ id, type, disabled, icon, label, className, onClick}) => {
    return ( 
        <button
            id={id}
            type={type}
            disabled={disabled}
            className={className}
            onClick={onClick}>
            {icon}
            {label}
        </button>
    );
};

export default Button;


