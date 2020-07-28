// import React from "react";
// import PropTypes from "prop-types";
// import BatteryUnknownRoundedIcon from "@material-ui/icons/BatteryUnknownRounded";
// import Battery20RoundedIcon from "@material-ui/icons/Battery20Rounded";
// import Battery30RoundedIcon from "@material-ui/icons/Battery30Rounded";
// import Battery50RoundedIcon from "@material-ui/icons/Battery50Rounded";
// import Battery60RoundedIcon from "@material-ui/icons/Battery60Rounded";
// import Battery80RoundedIcon from "@material-ui/icons/Battery80Rounded";
// import Battery90RoundedIcon from "@material-ui/icons/Battery90Rounded";
// import BatteryFullRoundedIcon from "@material-ui/icons/BatteryFullRounded";
// import Tooltip from "@material-ui/core/Tooltip";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   coverageContainer: { padding: "0.5rem 0.5rem 0rem" },
// });

// const CoverageIndicator = ({ coverage }) => {
//   const classes = useStyles();

//   const coverageIcon = (coverage) => {
//     const c = coverage * 100;
//     if (c < 10) {
//       return <BatteryUnknownRoundedIcon />;
//     } else if (c >= 10 && c < 30) {
//       return <Battery20RoundedIcon />;
//     } else if (c >= 30 && c < 50) {
//       return <Battery30RoundedIcon />;
//     } else if (c >= 50 && c < 60) {
//       return <Battery50RoundedIcon />;
//     } else if (c >= 60 && c < 80) {
//       return <Battery60RoundedIcon />;
//     } else if (c >= 80 && c < 90) {
//       return <Battery80RoundedIcon />;
//     } else if (c >= 90 && c < 99) {
//       return <Battery90RoundedIcon />;
//     } else if (c >= 99) {
//       return <BatteryFullRoundedIcon />;
//     }
//   };

//   return (
//     <Tooltip
//       title={`Есть данные по ${coverage * 100} % метеостанций`}
//       className={classes.coverageContainer}
//     >
//       {coverageIcon(coverage)}
//     </Tooltip>
//   );
// };

// CoverageIndicator.propTypes = {};

// export default CoverageIndicator;
