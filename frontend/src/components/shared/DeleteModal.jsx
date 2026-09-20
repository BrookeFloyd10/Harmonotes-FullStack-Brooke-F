import Button from "./Button"

const DeleteModal = ({ handleDelete, onCancel, id, title }) => {
    return (
      <div className="overlay-wrapper">
        <div className="delete-modal">
            <h3>WAIT! Are you sure you want to delete {title}?</h3>
                <Button 
                    className="delete-btn"
                    type="button"
                    onClick={() =>handleDelete(id)}
                    label= "Yes, Delete" />
        
                <Button 
                    className="cancel-btn"
                    type="button"
                    onClick={onCancel}
                    label="No, Cancel"
                />
            </div> 
        </div> 
    );
};

export default DeleteModal;