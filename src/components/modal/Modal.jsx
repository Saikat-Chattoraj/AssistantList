import "./modal.css"

export default function Modal(props) {
    return (
        <div className="modal">
            <p>Are you sure</p>
            <button className="btncnc" onClick={props.onClick}>Cancel</button>
            <button className="btncnf" onClick={props.onClick}>Confirm</button>
        </div>
    )
}
