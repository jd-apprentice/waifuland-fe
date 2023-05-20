import { Images } from '../../components'
import { waifusPerFetch } from '../../const'
import DefaultLayout from '../../layout/index'
import { IImage, Tag } from '../../models/types'
import { useEffect, useState } from 'react'
import api from '../../services/base/api'
import { useCheckToken } from '../../hooks/checkToken'

export const ImagesView = () => {
    const [waifu, setWaifu] = useState<IImage[]>() // Array of images
    const [tags, setTags] = useState<Tag[]>([]) // Array of tags
    // Get waifus
    const obtainWaifu = async (amount: number, tag_id?: number) => {
        try {
            const image = await api.waifuApi.getWaifus(amount, tag_id)
            return image
        } catch (error) {
            console.log(error)
        }
    }
    // Get tags
    const obtainTags = async () => {
        try {
            const tags = await api.waifuApi.getTags()
            return tags
        } catch (error) {
            console.log(error)
        }
    }

    // Check token on the first render
    useEffect(() => {
        useCheckToken()
    }, [api.api.token])

    useEffect(() => {
        obtainTags().then((tag) => {
            setTags(tag)
        })
        obtainWaifu(waifusPerFetch).then((waifus) => {
            setWaifu(waifus)
        })
    }, [])

    return (
        <DefaultLayout
            route={
                <Images
                    onChange={async (e: {
                        target: { value: string | number }
                    }) =>
                        await obtainWaifu(waifusPerFetch, +e.target.value).then(
                            (waifus: IImage[]) => setWaifu(waifus)
                        )
                    }
                    tags={tags}
                    images={waifu}
                />
            }
        />
    )
}
