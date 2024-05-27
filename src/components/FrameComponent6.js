import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`sign-in-wrapper ${className}`}>
      <div className="sign-in">
        <div className="sign-in-content">
          <div className="sign-in-title">
            <b className="sign-in1">Sign in</b>
            <div className="sign-in-to">
              Sign in to your account to see products catered to you
            </div>
          </div>
          <form className="input-fields">
            <FormControl
              className="username-password-labels"
              variant="standard"
              sx={{
                borderColor: "#d1d1d1",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "4px",
                width: "100%",
                height: "40px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "40px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "40px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "40px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "40px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#000",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Verdana",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "11px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/input-fields-wrapper.svg"
                    style={{ marginRight: "11px" }}
                  />
                )}
              >
                <MenuItem>Username</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="username-password-labels1">
              <div className="password">Password</div>
              <img
                className="username-password-labels-child"
                alt=""
                src="/frame-153-1.svg"
              />
            </div>
            <Button
              className="button7"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#0066ff",
                borderRadius: "4px",
                "&:hover": { background: "#0066ff" },
                height: 38,
              }}
            >
              Sign in
            </Button>
          </form>
          <div className="or-sign-in">or, sign in with</div>
          <div className="social-sign-in">
            <img
              className="social-icons"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-icons1"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-icons2"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default FrameComponent6;
