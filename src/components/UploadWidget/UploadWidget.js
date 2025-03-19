import { useEffect, useRef, useState } from "react"
import styles from './UploadWidget.module.scss'

const UploadWidget = ({value, valueName, setValue, title, name}) => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()

    cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dluqxr8lw',
            uploadPreset: 'hi5bzww0',
            sources: ['local'],
            multiple: false,
            clientAllowedFormats: ["jpg", "jpeg", "png"],
            maxFiles: 1
        }, function(err, result){
            if(result?.data?.info?.files) {
                setValue({
                    ...value,
                    [valueName]: result?.data?.info?.files?.[0]?.uploadInfo?.secure_url
                })
            }
        })

    useEffect(()=>{console.log(value.passportImage, valueName)}, [value])
    return (
        <label className={styles.uploadwidget}>
            <p className={styles.uploadwidget__title}>{title}</p>
            {value.valueName !== undefined && "erti" }
            <button className={styles.uploadwidget__btn} onClick={(e) => {
                widgetRef.current.open()
                e.preventDefault()
            }}>
                {name}
            </button>
        </label>
    )
}

export default UploadWidget