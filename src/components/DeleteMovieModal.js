import React from 'react';
import { Link, useParams, useHistory } from "react-router-dom";

const DeleteMovieModal = ({ deleteMovie }) => {

    const { id } = useParams();
    const { push } = useHistory();

    const handleDelete = e => {
        e.preventDefault();
        deleteMovie(id);
    }

    return (<div id="deleteEmployeeModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Movie</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={() => push(`/movies/${id}`)}>&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete this movie?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <Link to={`/movies/${id}`} className="btn btn-default">Cancel</Link>
                        <input type="submit" className="btn btn-danger" value="Delete" onClick={handleDelete}/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;
