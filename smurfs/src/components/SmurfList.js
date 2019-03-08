import React from 'react';
import { connect } from "react-redux";

import Smurf from './Smurf';

class SmurfList extends React.Component {

    render() {
        return (
            <div className="Smurfs">
                <h1>Smurf Village</h1>
                <div className="Smurf-List" >
                    {this.props.smurfs.map(smurf => {
                        return (
                            <Smurf name={smurf.name} id={smurf.id} age={smurf.age} height={smurf.height} key={smurf.id}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(
    mapStateToProps,
    {}
)(SmurfList);