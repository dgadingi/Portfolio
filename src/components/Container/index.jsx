import PropTypes from "prop-types";

const Container = ({ children, size = 'xl', className = '' }) => {
    const sizes = {
        sm: 'max-w-screen-sm',
        md: 'max-w-screen-md',
        lg: 'max-w-screen-lg',
        xl: 'max-w-screen-xl',
    };
    return (
        <div className={`container mx-auto ${sizes[size]} ${className}`}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    className: PropTypes.string,
}

export default Container