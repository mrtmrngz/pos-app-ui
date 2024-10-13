import {memo} from 'react';

const Button = ({children, className, type, size="medium"}) => {
    return <button className={`btn ${type && type} ${className && className} ${size && size}`}>{children}</button>
};

export default memo(Button);