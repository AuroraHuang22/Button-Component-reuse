import styled from "styled-components";

const Btn = styled.button`
  position: relative;
  box-sizing: border-box;
  padding: ${(props) => {
    if (props.width === "max" && props.drop) {
      return "10px 16px 10px 128.5px";
    } else if (props.text !== "" && props.width === "min") {
      return "6px 16px";
    } else if (props.text !== "" && props.width === "default") {
      return "10px 16px";
    } else if (props.text !== "" && props.width === "max") {
      return "10px 128.5px";
    } else if (props.text === "" && !props.circle) {
      return "8px";
    } else if (props.text === "" && props.circle) {
      return "16px";
    }
  }};
  margin: 5px;
  display: flex;
  flex-direction: ${(props) => {
    if (props.drop === true) {
      return "row";
    } else if (props.iconPosition === "right") {
      return "row-reverse";
    } else if (props.iconPosition === "left") {
      return "row";
    }
  }};
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => {
    if (props.theme === "cyan") {
      return "#28646e";
    } else if (props.theme === "green" || props.theme === "confirm") {
      return "#AAF1E7";
    } else if (props.theme === "disabled") {
      return "#9B9B9B";
    }
  }};
  outline: none;
  border: 2px solid;
  border-color: ${(props) => {
    if (props.theme === "cyan") {
      return "#AAF1E7";
    } else if (props.theme === "green" || props.theme === "confirm") {
      return "#28646E";
    } else if (props.theme === "plain" || props.theme === "white") {
      return "#EBEBEB";
    } else if (props.theme === "outline") {
      return "#9b9b9b";
    } else if (props.theme === "disabled") {
      return "#EBEBEB";
    }
  }};
  border-radius: ${(props) => {
    if (props.circle) {
      return "50%";
    } else {
      return "10px";
    }
  }};
  background-color: ${(props) => {
    if (props.theme === "cyan") {
      return "#AAF1E7";
    } else if (props.theme === "green" || props.theme === "confirm") {
      return "#28646E";
    } else if (
      props.theme === "plain" ||
      props.theme === "white" ||
      props.theme === "outline"
    ) {
      return "#e9e9e9";
    } else if (props.theme === "disabled") {
      return "#EBEBEB";
    }
  }};
  transition: all 0.2s;
  cursor: ${(props) => {
    if (props.theme === "disabled") {
      return "not-allowed";
    } else {
      return "pointer";
    }
  }};

  :hover {
    border-color: ${(props) => {
      if (props.theme === "cyan") {
        return "#c4f5ee";
      } else if (props.theme === "green" || props.theme === "confirm") {
        return "#69939a";
      } else if (
        props.theme === "plain" ||
        props.theme === "white" ||
        props.theme === "outline"
      ) {
        return "#f1f1f1";
      }
    }};
    background-color: ${(props) => {
      if (props.theme === "cyan") {
        return "#c4f5ee";
      } else if (props.theme === "green" || props.theme === "confirm") {
        return "#69939a";
      } else if (
        props.theme === "plain" ||
        props.theme === "white" ||
        props.theme === "outline"
      ) {
        return "#f1f1f1";
      }
    }};
  }

  :active {
    border-color: ${(props) => {
      if (props.theme === "cyan") {
        return "#90d5cf";
      } else if (props.theme === "green" || props.theme === "confirm") {
        return "#205058";
      } else if (
        props.theme === "plain" ||
        props.theme === "white" ||
        props.theme === "outline"
      ) {
        return "#cbcbcb";
      }
    }};
    background-color: ${(props) => {
      if (props.theme === "cyan") {
        return "#90d5cf";
      } else if (props.theme === "green" || props.theme === "confirm") {
        return "#205058";
      } else if (
        props.theme === "plain" ||
        props.theme === "white" ||
        props.theme === "outline"
      ) {
        return "#cbcbcb";
      }
    }};
  }

  img {
    width: 20px;
    height: 20px;
    position: ${(props) => {
      if (props.width === "max") {
        return "absolute";
      } else {
        return "static";
      }
    }};
    top: ${(props) => {
      if (props.width === "max") {
        return "50%";
      } else {
        return "auto";
      }
    }};
    right: ${(props) => {
      if (props.width === "max" && props.iconPosition === "right") {
        return "26px";
      } else {
        return "auto";
      }
    }};
    left: ${(props) => {
      if (props.width === "max" && props.iconPosition === "left") {
        return "26px";
      } else {
        return "auto";
      }
    }};
    transform: ${(props) => {
      if (props.width === "max" && props.iconPosition === "right") {
        return "translate(50%, -50%)";
      } else if (props.width === "max" && props.iconPosition === "left") {
        return "translate(-50%, -50%)";
      } else {
        return "none";
      }
    }};

    display: ${(props) => {
      if (props.width === "min") {
        return "none";
      } else {
        return "block";
      }
    }};
    justify-self: flex-end;
    filter: ${(props) => {
      if (props.theme === "disabled") {
        return "grayscale(80%)";
      }
    }};
    opacity: ${(props) => {
      if (props.theme === "disabled") {
        return "0.5";
      }
    }};
    margin: ${(props) => {
      if (props.text === "") {
        return "0px";
      } else if (props.iconPosition === "right") {
        return "0px 0px 0px 14px";
      } else {
        return "0px 14px 0px 0px";
      }
    }};
  }
`;

const Icon = styled.div`
  display: ${(props) => {
    if (props.width === "min") {
      return "none";
    } else {
      return "block";
    }
  }};

  background-image: url("./icons/drop.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 20px;
  height: 20px;
  margin-left: ${(props) => {
    if (props.width === "max") {
      return "92.5px";
    } else if (props.width === "default") {
      return "12px";
    }
  }};
`;

function Button(props) {
  const theme = props.theme ? props.theme : "white";
  const iconPosition = props.iconPosition
    ? props.drop
      ? "left"
      : props.iconPosition
    : "left";
  const text = props.text ? (props.circle ? "" : props.text) : "";
  const icon = props.icon ? props.icon : "placeholder";
  const width = props.width ? props.width : "default";
  const circle = props.circle ? props.circle : false;
  const drop = props.drop ? props.drop : false;
  return (
    <Btn
      theme={theme}
      width={width}
      iconPosition={iconPosition}
      circle={circle}
      text={text}
      drop={drop}
    >
      <img src={`./icons/${icon}.svg`} alt={`This is the icon of ${icon}`} />
      {text}
      {drop ? <Icon width={width} /> : null}
    </Btn>
  );
}

export default Button;
