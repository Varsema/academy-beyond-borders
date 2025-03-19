import styles from './NewTextInput.module.scss'

const NewTextInput = ({type, value, placeholder, name, icon, onChange, label, rows, selectData}) => {
    switch (type) {
        case 'select':
            return (
                <label className={`${styles['textlabel']}`}>
                    {icon && <img src={icon} alt="icon" className={`${styles['textlabel__icon']}`} />}
                    <select 
                        className={`${styles['textlabel__input']}`}
                        type={type}
                        value={value}
                        name={name}
                        onChange={(e) => onChange(e)}>
                        <option>{placeholder}</option>
                            {selectData?.map(_it => {
                                return (
                                    <option
                                        key={_it}
                                        value={_it}
                                        >
                                        {_it}
                                        </option>
                                )
                            })}
                    </select>
                </label>
            )
        case 'textarea':
            return (
                <label className={`${styles['textlabel']}`}>
                    <textarea
                        rows={rows ? rows : '5'}
                        className={`${styles['textlabel__input']} ${styles['textlabel__textarea']}`}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        name={name}
                        onChange={(e) => onChange(e)}></textarea>
                </label>
            )
        default:
            return (
                <>
                {label && <p>{label}</p>}
                <label className={`${styles['textlabel']}`}>
                    {icon && <img src={icon} alt="icon" className={`${styles['textlabel__icon']}`} />}
                    <input 
                        className={`${styles['textlabel__input']}`}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        name={name}
                        onChange={(e) => onChange(e)}/>
                </label>
                </>
            )
    }
}

export default NewTextInput



  