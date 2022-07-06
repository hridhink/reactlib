import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import GenreCreateForm from './GenreCreateForm';
import GenreDeleteForm from './GenreDeleteForm'
import GenreEditForm from './GenreEditForm';
import { getGenres } from '../../api/genre';

function Genre() {
    const [genre, setGenre] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [id, setId] = useState('')
    const navigate = useNavigate();
    function getGenre() {


        getGenres('/genres').then(res => {
            console.log(res.data)
            const myGenre = res.data;
            setGenre(myGenre)

        })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <div className='genre'>
            <button className='button4' onClick={getGenre} >show genres</button>
            <button className='backbutton' onClick={() => { navigate(-1) }} >back</button>


            <table className='table table-striped'>
                <thead>
                    <tr><th>ID</th>
                        <th>GENRES</th>
                    </tr>
                </thead>
                <tbody>

                    {genre.map((item) => {
                        return (
                            <tr key={item._id}>
                                <td>{item._id}</td>

                                <td>{item.name}</td>
                                <td><button className='genreupdate' onClick={() => { setShowUpdateForm(true) }}>UPDATE GENRE</button></td>
                                <td><button className='genredelete' onClick={() => { setShowDeleteForm(true); setId(item._id); console.log(item._id) }}>DELETE GENRE</button></td>
                            </tr>)
                    })}




                </tbody>
            </table><br />
            <button className='genrecreate' onClick={() => { setShowCreateForm(true) }}>ADD NEW GENRE</button>



            <button className='authorcreate' onClick={() => { setShowCreateForm(false); setShowUpdateForm(false); setShowDeleteForm(false) }}>close</button>

            {showCreateForm && <GenreCreateForm />}<br />
            {showUpdateForm && <GenreEditForm />}<br />
            {showDeleteForm && <GenreDeleteForm id={id} />}

        </div>
    )

}

export default Genre