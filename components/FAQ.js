import Collapse from 'rc-collapse';
import React from 'react';
import 'rc-collapse/assets/index.css'
import Collapsible from 'react-collapsible';

const FAQ = () => {
    return (
        <>
            <Collapsible trigger="Start here1" transitionTime={200}>
                <p>
                    This is the collapsible content. It can be any element or React
                    component you like.
                </p>
                <p>
                    It can even be another Collapsible component. Check out the next
                    section!
                </p>
            </Collapsible>
            <Collapsible trigger="Start here2" transitionTime={200}>
                <p>
                    This is the collapsible content. It can be any element or React
                    component you like.
                </p>
                <p>
                    It can even be another Collapsible component. Check out the next
                    section!
                </p>
            </Collapsible>
            <Collapsible trigger="Start here" transitionTime={200}>
                <p>
                    This is the collapsible content. It can be any element or React
                    component you like.
                </p>
                <p>
                    It can even be another Collapsible component. Check out the next
                    section!
                </p>
            </Collapsible>
        </>
    );
};

export default FAQ;