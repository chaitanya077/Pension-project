import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const Home1 = () => {
  return (
    <>
      <div className="d-flex text-center custom w-100 h-100">
        <RadioGroup name="use-radio-group" defaultValue="first" className="">
          <MyFormControlLabel
            value="first"
            label="Family Pension"
            control={<Radio />}
          />
          <MyFormControlLabel
            value="second"
            label="Pension for self"
            control={<Radio />}
          />
        </RadioGroup>
      </div>
      <Button variant="contained">Submit</Button>
    </>
  );
};

export default Home1;
