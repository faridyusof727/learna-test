import React from 'react';

interface Props {
    children? : JSX.Element
}

export function Header(props: Props): JSX.Element {
    return (
        <header>
            Lerna is the original monorepo tool! {props.children}
        </header>
    );
}
