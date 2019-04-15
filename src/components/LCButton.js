import React from "react";

import { connect } from "react-redux";
import { addList, addCard } from "../actions";

import LCRenderButton from "./LCRenderButton";
import LCAddForm from "./LCAddForm";

class LCButton extends React.Component {
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

  handleTitle = e => this.setState({ title: e.target.value });

  render() {
    return this.state.formStatus ? (
      <LCAddForm
        list={this.props.list}
        title={this.state.title}
        addListFunction={this.addListFunction}
        addCardFunction={this.addCardFunction}
        handleTitle={this.handleTitle}
        falseStatus={this.falseStatus}
      />
    ) : (
      <LCRenderButton
        pState={this.state}
        list={this.props.list}
        trueStatus={this.trueStatus}
      />
    );
  }
}

export default connect(
  null,
  { addList, addCard }
)(LCButton);
