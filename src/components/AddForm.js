import React from "react";
import Card from "@material-ui/core/Card";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formStatus: false, title: "", user: "" };
  }

  trueStatus = () => {
    this.setState({ formStatus: true });
  };

  falseStatus = () => {
    this.setState({ formStatus: false });
  };

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
    const placeholder = list ? "Enter List Title" : "Enter Card Title";
    const buttonText = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "6px 6px 6px 6px"
          }}
        >
          <div className="ui input ">
            <input
              type="text"
              placeholder={placeholder}
              onBlur={this.falseStatus}
              autoFocus
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              style={{
                marginRight: "5px",
                fontFamily: "Gill Sans MT",
                borderColor: "white"
              }}
            />
          </div>
        </Card>
        <div
          style={{ marginTop: "8px", display: "flex", alignItems: "center" }}
        >
          <button
            className="ui button"
            onMouseDown={list ? this.addListFunction : this.addCardFunction} //use onMouseDown because onBlur gets called first whih is why onClick doesnt work
            variant="contained"
            style={{
              fontFamily: "Gill Sans MT",
              color: "white",
              backgroundColor: "#5aac44",
              margin: "5px"
            }}
          >
            {buttonText}
          </button>
          <Icon
            style={{ marginLeft: "8px", cursor: "pointer", color: "white" }}
          >
            close
          </Icon>
        </div>
      </div>
    );
  }
}

export default AddForm;
