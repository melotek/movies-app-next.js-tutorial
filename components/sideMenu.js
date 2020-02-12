import React, {useState} from 'react'
import Modal from './modal'
import MovieCreateForm from './movieCreateForm'
import { createMovie } from '../actions/index'
//Containment
const SideMenu = (props) => {
  
const { categories, appName } = props
let modal = null

const handleCreateMovie = (movie) => {
  createMovie(movie).then((movies) => {
    console.log(JSON.stringify(movies))
    modal.closeModal()
  })
}
  return (
    <div>
      <Modal 
      ref={element => modal = element}
      hasSubmit={false}>
        <MovieCreateForm  handleFormSubmit={handleCreateMovie}/>
      </Modal>
      <h1 className="my-4">{appName}</h1>
      <div className="list-group">
        {
          categories.map(c=> (
            <a 
            href="#" 
            className="list-group-item"
            key={c.id}
            >{c.name}</a>
          ))
        }

      </div>

    </div>
  )
}

export default SideMenu
