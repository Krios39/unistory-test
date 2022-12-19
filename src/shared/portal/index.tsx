import { ReactNode, ReactPortal, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
    children?: ReactNode;
    className?: string;
    el?: string;
    id?: string;
}

export const Portal = ({ children, className = 'root-portal', el = 'div', id }: PortalProps): ReactPortal => {
    const [container] = useState(document.createElement(el));

    useEffect(() => {
        container.classList.add(className);
        container.id = id || className;
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        };
    }, []);
    return ReactDOM.createPortal(children, container);
};