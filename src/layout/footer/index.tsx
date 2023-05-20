import { DiGithubAlt } from 'react-icons/di'
import { Box, Text } from '@chakra-ui/react'
import { IconButtonCustom } from '../../components/common/iconButton'
import React from 'react'

const Footer: React.FC = (): React.ReactElement => {
    return (
        <Box textAlign="center">
            <IconButtonCustom
                link="https://github.com/jd-apprentice/waifuland-fe"
                icon={DiGithubAlt}
            />
            <Text display={{ base: 'block' }} fontSize={{ base: '20px' }}>
                © Copyright {new Date().getFullYear()}
            </Text>
        </Box>
    )
}

export default Footer
