import React from "react";

/*let formatName = (user) => {
    return user.firstName + ' ' + user.lastName;
};*/

const user = {
    firstName: 'Megha',
    lastName: 'Patel'
};
//let tick = () => {

const element = (<div>
        <h1>
            Hello, {formatName(user)}!

        </h1>      <h2>How r u???.</h2></div>
);
//};

//setInterval(new Date().toLocaleTimeString(), 1000);
export   class Demo extends React.Component {

    render() {
        return (
            //<div className="shopping-list">
            <h1>Shopping List for </h1>
            /*  <ul>
                  <li>Instagram</li>
                  <li>WhatsApp</li>
                  <li>Oculus</li>
              </ul>
          </div>*/);
    }
}