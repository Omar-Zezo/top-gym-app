import React, {Component} from 'react';

class MemberesPlans extends Component{
    render(){
        return(
            <div className="plans" id="plans">
                <h6>PRICES TABLES</h6>
                <h2>Memberchip Plans</h2>
                <div className="plans-container">
                    <div className="plan">
                        <h3>20<span>L.E</span><span className="second">/Day</span></h3>
                        <h4>One Day Training</h4>
                        <p>giving information on its</p>
                        <p>giving information</p>
                        <p>giving information on its</p>
                        <p>giving information</p>
                    </div>
                    <div className="plan special">
                        <h3>250<span>L.E</span><span className="second">/Month</span></h3>
                        <h4>12 Month Memberchip</h4>
                        <p>giving information on its</p>
                        <p>giving information</p>
                        <p>giving information on its</p>
                        <p>giving information</p>
                    </div>
                    <div className="plan">
                        <h3>300<span>L.E</span><span className="second">/Monthly</span></h3>
                        <h4>Pay Every Month</h4>
                        <p>giving information on its</p>
                        <p>giving information</p>
                        <p>giving information on its</p>
                        <p>giving information</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemberesPlans;