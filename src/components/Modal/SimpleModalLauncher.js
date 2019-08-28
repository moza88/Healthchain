import React, { Component } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import SimpleModal from "./SimpleModal";
import '../../App.css'; // Import regular stylesheet
import { Button, Accordian, Icon } from 'semantic-ui-react'

class SimpleModalLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { buttonLabel, children, classes } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <Button
          className="card-buttons"
          type="button"
          onClick={() => this.handleToggleModal()}
        >
          {buttonLabel}
        </Button>

        {showModal && (
          <SimpleModal onCloseRequest={() => this.handleToggleModal()}>
            {children}
          </SimpleModal>
        )}
      </div>
    );
  }
}

SimpleModalLauncher.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  sheet: PropTypes.object,
  classes: PropTypes.object
};

export default SimpleModalLauncher;