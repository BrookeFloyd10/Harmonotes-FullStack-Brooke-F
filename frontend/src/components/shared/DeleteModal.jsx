import Button from "./Button"

const DeleteModal = ({ handleDelete, onCancel, id, title }) => {
    return (
      <div className="overlay-wrapper">
        <div className="delete-modal">
            <h3>WAIT!</h3>
            <p>Are you sure you want to delete {title}?</p>
                <Button 
                    className="remove-btn"
                    type="button"
                    onClick={() =>handleDelete(id)}
                    label= "Yes, Delete" />
        
                <Button 
                    className="cancel-btn"
                    type="button"
                    onClick={onCancel}
                    label="No, Cancel" />
            </div> 
        </div> 
    );
};

export default DeleteModal;