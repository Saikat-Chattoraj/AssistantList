import { useState } from "react"
import Backdrop from "../backdrop/Backdrop"
import Modal from "../modal/Modal"
import "./todo.css"
export default function Todo(props) {
    const [modalIsOpen , setModalIsOpen] = useState(false);
    function deleteHandler(){
        setModalIsOpen(true);
    }
    function closeModalHandler(){
        setModalIsOpen(false);
    }
    return (
        <div className="todoWrapper">
            <div className="card">
                <h1>My Todos</h1>
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="button" onClick={deleteHandler}>
                        <h4>Delete</h4>
                    </button>  
                </div>
                {modalIsOpen ? <Modal onClick={closeModalHandler}/> : null}
                {modalIsOpen ? <Backdrop onClick={closeModalHandler}/> : null}
            </div>
        </div>
    )
}
