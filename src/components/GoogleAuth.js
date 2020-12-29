import React from "react";

class GoogleAuth extends React.Component {
  // componentDidMount() {
  //   window.gapi.load("client:auth2", () => {
  //     window.gapi.client
  //       .init({
  //         clientId:
  //           "945760231124-i43k7nmucedt9565d8eugb52sb3mffnj.apps.googleusercontent.com",
  //         scope: "email"
  //       })
  //       .then(() => {
  //         this.auth = window.gapi.auth2.getAuthInstance();
  //         this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  //       });
  //   });
  // }

  rendereButton() {
    if (this.state.isSignedIn === null) {
      return <div>Not Signed In</div>;
    } else if (this.state.isSignedIn) {
      return <div>signed in</div>;
    } else {
      return <div>{this.rendereButton()}</div>;
    }
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
