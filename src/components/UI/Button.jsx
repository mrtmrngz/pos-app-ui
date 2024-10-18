import {memo} from 'react';

const Button = ({children, className, type, size="medium", onClick}) => {
    return <button onClick={onClick} className={`btn ${type && type} ${className && className} ${size && size}`}>{children}</button>
};

export default memo(Button);