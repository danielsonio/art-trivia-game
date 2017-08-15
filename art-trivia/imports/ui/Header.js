import React from 'react';
import { Accounts } from 'meteor/accounts-base';


const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <button onClick={() => Accounts.logout()}>LOGOUT</button>
        </div>
    )
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default Header;