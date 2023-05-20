import { Icon, Link } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import React from 'react'

interface IconButtonProps {
    link: string
    icon: IconType
    padding?: number
}

export const IconButtonCustom: React.FC<IconButtonProps> = ({
    link,
    icon,
    padding,
}: IconButtonProps): React.ReactElement<IconButtonProps> => {
    return (
        <Link alignItems="center" target={'_blank'} href={link}>
            <Icon
                p={padding}
                border="1px"
                borderRadius="full"
                color="gray.700"
                backgroundColor="red.200"
                fontSize={{ base: '40px' }}
                m={1}
                as={icon}
            />
        </Link>
    )
}
