import { PageHintPhrase, PageLink } from "./pageHint.styled";

interface IHintProps {
  hintMessage: string;
  linkMessage: string;
  linkPath: string;
}

export const PageHint = ({ hintMessage, linkMessage, linkPath }: IHintProps) => {
  return (
    <PageHintPhrase>
      {hintMessage} <PageLink href={linkPath}>{linkMessage}</PageLink>
    </PageHintPhrase>
  );
};
