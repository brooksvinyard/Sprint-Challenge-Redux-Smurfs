import React from 'react';
import { deleteSmurf } from '../actions';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';

const Smurf = props => {
    return (
        <div className="Smurf">
            {/* <Link to={`/smurfs/${props.id}`} key={props.smurfs.id}> */}
            <h3>{props.name}</h3>
            <strong>{props.height} tall</strong>
            <p>{props.age} smurf years old</p>
            <button className="delete-button" onClick={e => props.deleteSmurf(props.id)}>Delete</button>
            {/* </Link> */}
        </div>
    );
};

Smurf.defaultProps = {
    name: '',
    height: '',
    age: '',
    id: ''
};


const mapStateToProps = state => ({

});

export default connect(
    mapStateToProps,
    { deleteSmurf }
)(Smurf);