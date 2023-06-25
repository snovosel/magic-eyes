import React, { useMemo, useState, useEffect } from 'react';

import { HStack, VStack } from '@chakra-ui/react';

import Eye from './Eye';

const Eyes = ({
    children
}) => {
    const [position, setPosition] = useState({
        left: '50%',
        bottom: '5%'
    });
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        if ( children === undefined ) {
            document.addEventListener('mousemove', e => {
                console.log('e', {
                    left: e.x / 10,
                    top: 100 - e.y / 10
                });
                setPosition({
                    left: e.x / 10,
                    top: 100 - e.y / 10
                })
            });
            setFocused(true);
        }
    }, []);

    const toggleFocus = newFocus => setFocused(newFocus);

    const handleTextChange = (e) => {
        setPosition(e.target.value.length)
    }

    const renderChildren = useMemo(() => {
        return React.Children.map(children, child => {
            return React.cloneElement(child, {
                onChange: handleTextChange,
                onFocus: () => toggleFocus(true),
                onBlur: () => toggleFocus(false)
            })
        })
    }, []);

    return (
        <VStack>
            <HStack
                direction="row"
                justify="center"
                align="center"
            >
                <Eye focused={focused} position={position} />
                <Eye focused={focused} position={position} />
            </HStack>
            {renderChildren}
        </VStack>
    )
}

export default Eyes;