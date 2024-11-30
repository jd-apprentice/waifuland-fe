import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import React from 'react'

const ButtonLink: React.FC = (): React.ReactElement => {
    const { t } = useTranslation()

    return (
        <Box mt={{ base: 2 }}>
            <Link to="/docs">
                <Button backgroundColor="red.200" color="gray.700">
                    {t('documentation.button')}
                </Button>
            </Link>
        </Box>
    )
}

export default ButtonLink
