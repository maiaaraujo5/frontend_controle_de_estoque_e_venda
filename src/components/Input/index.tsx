import React, {InputHTMLAttributes, useCallback, useEffect, useRef, useState} from 'react'
import {IconBaseProps} from "react-icons";
import {useField} from "@unform/core";
import {FiAlertCircle} from "react-icons/all";
import {Container, Error} from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const {fieldName, defaultValue, error, registerField} = useField(name);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value)
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField]);


    return (
        <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
            {Icon && <Icon size={20}/>}
            <input
                defaultValue={defaultValue}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                ref={inputRef}
                {...rest}
            />
            {error &&(
                <Error title={error}>
                    <FiAlertCircle color="#c53030" size={20}/>
                </Error>)}
        </Container>
    )
};

export default Input;