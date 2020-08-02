import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Handle from "rc-slider";

const RangeSliderHandle = (props) => {
  const { value, dragging, index, ...rest } = props;
  return (
    <Handle key={index} value={value} {...rest}>
      {dragging && { value }}
    </Handle>
  );
};

RangeSliderHandle.propTypes = {};

export default RangeSliderHandle;
