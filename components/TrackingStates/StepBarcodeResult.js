import { Steps } from "antd";
import { StepBarcodeResultStyle } from "./stepBarcodeResult.style";
const { Step } = Steps;

const StepBarcodeResult = ({ events }) => {


  return (
    <StepBarcodeResultStyle>
      <div className="wrapperStep">
        <Steps direction="vertical" size="small" current={1}>
          {events.map((event) => (
            <Step
              title={event.name}
              description={
                <ul className="liwrapper">
                  <li>{event.datetime}</li>
                  <li> {event.city}</li>
                  <li> {event.country}</li>
                </ul>
              }
            />
          ))}
        </Steps>
      </div>
    </StepBarcodeResultStyle>
  );
};

export default StepBarcodeResult;
