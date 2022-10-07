import React from 'react';

interface Props {
    /**
     * Children
     */
    children? : JSX.Element[] | JSX.Element | string;
    onClick?:  React.MouseEventHandler<HTMLButtonElement>
}

export function Header(props: Props): JSX.Element {
    return (
        <header>
            <button onClick={props.onClick}>{props.children}</button>
        </header>
    );
}
