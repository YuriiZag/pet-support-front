import { GoXCircleFill } from "react-icons/go";
import { FormHint, FormMarkWrapper } from "./formMarks.styled";


export const FormMark = ({ message }: { message: string}) => {
  return (
    <>
      <FormMarkWrapper>
        <GoXCircleFill
          style={{ width: "20px", height: "20px" }}
        ></GoXCircleFill>
      </FormMarkWrapper>
      <FormHint>{message}</FormHint>
    </>
  );
};


