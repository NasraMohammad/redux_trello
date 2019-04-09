import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { connect } from "react-redux";

class MoveToDropdown extends React.Component {
  check = () => {
    console.log(this.props);
  };
  //state = { value: " " };
  render() {
    const { lists, originalListId } = this.props;

    const options = lists.map(list => {
      if (list.id !== originalListId) {
        return { key: list.id, text: list.id + 1, value: list.id };
      } else return;
    });
    // console.log(this.props);

    return (
      <div>
        <Menu compact>
          <Dropdown
            onChange={this.check}
            text="Move To"
            options={options}
            simple
            item
            //  value={this.state.value}
          />
        </Menu>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(MoveToDropdown);
