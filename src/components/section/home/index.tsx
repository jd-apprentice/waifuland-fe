import { Box, Image, Skeleton, Text, Fade } from '@chakra-ui/react'
import { LoadImage } from '../../../components/common/loadImage'
import { TextBox } from '../../../components/common/textBox'
import { homeText } from '../../../const'
import { IMainProps } from '../../../models/types'
import { ImageStyle } from './styles'
import ButtonLink from '../../../components/common/link'
import React from 'react'

/**
 * @descriptions The home screen of the application with an image and some text
 * @param { undefined } onClick - The event fired when the user clicks on the image
 * @param { boolean } isLoading - Whether the image is loading or not
 * @param { string } data - The image data to be displayed
 * @returns Home component of the application
 */

export const Main: React.FC<IMainProps> = ({
    data,
    isLoading,
    hasErrors,
    onClick,
}: IMainProps) => {
    return (
        <>
            <Box
                display={{ base: 'flex' }}
                justifyContent={{ base: 'center' }}
                m={{ base: 2, md: 4 }}
            >
                {!isLoading ? (
                    <Fade delay={0.7} in={!isLoading}>
                        <Image
                            cursor="pointer"
                            onClick={() => window.open(data)}
                            sx={ImageStyle}
                            src={data}
                        />
                    </Fade>
                ) : (
                    <Skeleton w={300} h={400} />
                )}
            </Box>
            <LoadImage onClick={onClick} />
            {hasErrors && (
                <Box>
                    <Text>{`The following error ${hasErrors.message} broke the image`}</Text>
                </Box>
            )}
            {homeText &&
                homeText.map((text, index) => (
                    <TextBox key={index} text={text} />
                ))}
            <Box
                display={{ base: 'flex' }}
                justifyContent={{ base: 'center' }}
                mb={{ base: 2, md: 4 }}
            >
                <ButtonLink />
            </Box>
        </>
    )
}
