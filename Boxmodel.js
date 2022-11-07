import * as React from 'react';
import './BoxmodelStyle.css'
import Cube from 'react-3d-cube';

class Boxmodel extends React.Component {
  render() {
    return (
      <div>
        <center>
           
            <div
            style={{
                width: 300,
                height: 300
            }}
            >
            <Cube size={300} index="front" />
            <span>
            
            </span>
            </div>
            
            
            
        </center>
      </div>
    );
  }
}
export default Boxmodel