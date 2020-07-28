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

// // If you want to center the text with the handle
// const FlexHandle = styled(Handle)`
//   display: flex;
//   justify-content: center;
// `;

// // By default the text is rendered inside the handle, so we need to take it out
// // white-space: nowrap; ensures that it doesn't break on a new line, due to the handle being very small
// const Value = styled.div`
//   margin-top: -32px;
//   white-space: nowrap;
//   color: red;
//   font-size: 16px;
//   font-weight: bold;
// `;

export default RangeSliderHandle;
