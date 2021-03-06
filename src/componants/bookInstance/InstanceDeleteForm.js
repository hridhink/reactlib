import React, { useState } from 'react'

import { deleteInstance } from '../../api/bookInstance';
function InstanceDeleteForm(props) {

    const [instanceDelete, setInstanceDelete] = useState({ _id: props.id })
    const [acknowledgement, setAcknowledgement] = useState(null)
    props.func(acknowledgement)
    function onInputForm(e) {
        const { name, value } = e.target;
        setInstanceDelete(preInput => { return { ...instanceDelete, [name]: value } })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(instanceDelete)
            const resp = await deleteInstance(instanceDelete)
            if (resp.status == 200) {
                alert('instance deleted')
                console.log(resp.status)
                setAcknowledgement(true)
                setInstanceDelete({ _id: '' })
            }
        }
        catch (err) {
            console.log('error')
        }
    }
    return (
        <div className='card' id='form1'>
            <h3 >BOOK INSTANCE DELETE FORM</h3>
            <form onSubmit={onSubmit} className='form'>
                <input type='text' name='_id' value={instanceDelete._id} onChange={onInputForm} className='inputcontrol' placeholder='_id of the instance you want to delete' required readOnly='readOnly' /><br /><br />
                <input type='submit' className='formsubmit' value='DELETE' />
            </form>
        </div>
    )
}

export default InstanceDeleteForm