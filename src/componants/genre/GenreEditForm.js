import React, { useState } from 'react'

import { updateGenre } from '../../api/genre'
function GenreEditForm(props) {
    const [addGenre, setAddGenre] = useState({ _id: props.id, name: '' })
    const [acknowledgement, setAcknowledgement] = useState(null)
    props.func(acknowledgement)
    const onInputChange = (e) => {
        const { name, value } = e.target
        setAddGenre(prevInput => { return { ...addGenre, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await updateGenre(addGenre)
            if (resp.status == 200) {
                alert('DATA UPDATED SUCCESSFULLY')
                console.log(resp.status)
                setAcknowledgement(true)
                setAddGenre({ _id: '', name: '' })
            }
        }
        catch (err) {
            console.log('error')
        }
    }
    return (
        <>
            <div className='card' id='form1'>
                <h3>GENRE UPDATE FORM</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">

                        <label className='labelcontrol'> GENRE ID - </label>
                        <input type="text" name='_id' value={addGenre._id} onChange={onInputChange} className='inputcontrol' required readOnly='readOnly' /><br /><br />

                        <label className='labelcontrol'>ADD GENRE - </label>
                        <input type="text" name='name' onChange={onInputChange} className='inputcontrol' placeholder='eg: fantasy,action' required /><br /><br />


                    </div>
                    <input type='submit' className='formsubmit' value='EDIT GENRE' />

                </form>

            </div >

        </>
    )
}

export default GenreEditForm