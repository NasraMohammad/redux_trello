import React from "react";

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formStatus: false, title: "", user: "" };
  }

  addListFunction = () => {
    const { title } = this.state;

    if (title) {
      this.props.addList(title);
      this.setState({ title: "" });
    }

    return;
  };

  addCardFunction = () => {
    const { listId } = this.props;
    const { title } = this.state;

    if (title) {
      this.props.addCard(listId, title);
      this.setState({ title: "" });
    }

    return;
  };

  render() {
    renderButton = () => {
      const { list } = this.props;

      const buttonText = list ? "Add a list" : "Add a card";
      const buttonTextOpacity = list ? 1 : 0.5;
      const buttonTextColor = list ? "white" : "inherit";
      const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

      const styles = {
        addButtonContainer: {
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground
        }
      };

      return (
        <div
          style={styles.addButtonContainer}
          className="addButtonContainer"
          onClick={this.trueStatus}
        >
          <Icon>add</Icon>
          <p>{buttonText}</p>
        </div>
      );
    };
  }
}
export default AddButton;
