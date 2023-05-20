import { Text, Code } from '@chakra-ui/react'
import { CodeBoxProps } from '../../../models/types'
import React from 'react'

/**
 * @description Creates a component for displaying Text and Code boxes in the documentation
 * @param { string } method - The method name to execute
 * @param { string } text - The text to explain what the endpoint does
 * @param  { string } endpoint - The current endpoint to be called
 * @returns A Text component with code inside
 */

export const CodeBox: React.FC<CodeBoxProps> = ({
    method,
    text,
    endpoint,
}: CodeBoxProps): React.ReactElement<CodeBoxProps> => {
    return (
        <Text m={2}>
            <Code>{method.toUpperCase()}</Code> {text} <Code>{endpoint}</Code>
        </Text>
    )
}
