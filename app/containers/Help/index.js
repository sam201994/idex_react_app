import React, { Component } from 'react';
import styled from 'styled-components';
import { BlackText, DarkGrey, WhiteText } from 'components/textTypes';
import { FormattedMessage } from 'react-intl';
import messages from 'utils/messages';

const FormBox = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  width: auto;
  margin: 20px;
  border: 1px solid #f2f2f2;
`;

const BreakLine = styled.div`
  background-color: #f2f2f2;
  height: 1px;
  margin-left: 10px;
  margin-right: 10px;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;

const SubHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0066ff;
  margin: 20px;
  width: 100px;
  padding: 10px;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TextArea = styled.div`
  width: auto;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  textarea {
    width: 70%;
    border: 1px solid #f2f2f2;
    padding: 10px;
    font-size: 10px;
    min-height: 200px;
  }
  margin-bottom: 20px;
`;

const str =
  'Let us know if you have any questions, we could be more than happy to help you!';

export default function Help() {
  return (
    <FormBox>
      <HeadingContainer>
        <BlackText size={27}>
          <FormattedMessage {...messages.contactUs} />
        </BlackText>
      </HeadingContainer>
      <BreakLine />
      <SubHeadingContainer>
        <DarkGrey size={12}>
          <FormattedMessage {...messages.contactUsSubHeading} />
        </DarkGrey>
      </SubHeadingContainer>
      <TextArea>
        <textarea
          id="noter-text-area"
          name="textarea"
          placeholder={str}
          place
        />
      </TextArea>
      <ButtonContainer>
        <Button>
          <WhiteText size={10}>
            <FormattedMessage {...messages.send} />
          </WhiteText>
        </Button>
      </ButtonContainer>
    </FormBox>
  );
}
