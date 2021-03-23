import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { shadows } from "../constants/colors";
import { MediumText } from "./Typography";
import { LoadingSvg } from "./svg/LoadingSvg";

const ActionButton = styled.button`
  background: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  font-weight: 500;

  white-space: nowrap;
  color: #4f6fc9;
  background: #4f6fc9;
  color: white;
  border: none;
  margin-left: 8px;

  padding: 0 16px;
`;

const EmailInputContainer = styled.form`
  display: flex;
  flex-direction: row;

  padding: 8px;
  background: white;
  border-radius: 8px;
  width: min-content;

  ${shadows.default}

  margin-top: 16px;

  height: 50px;
`;

const EmailInputComponent = styled.input`
  border-radius: 8px;
  border-color: rgb(224, 224, 224);
  border-style: solid;
  border-width: 1px;
`;

export function EmailInput() {
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    (event) => {
      setLoading(true);

      const email = event.target.email.value;

      if (!submitted)
        addToMailchimp(email, null, null).then(() => {
          setSubmitted(true);

          setLoading(false);
        });
    },
    [submitted]
  );

  return !submitted ? (
    <EmailInputContainer action="javascript:;" onSubmit={onSubmit}>
      <EmailInputComponent
        type="email"
        placeholder="   Your email address"
        name="email"
      />
      <ActionButton type="submit">
        {!loading ? (
          "Stay tuned"
        ) : (
          <LoadingSvg
            style={{
              margin: "4px 0",
              height: "26px",
            }}
          />
        )}
      </ActionButton>
    </EmailInputContainer>
  ) : (
    <EmailInputContainer as="div" style={{ padding: "8px 16px" }}>
      <MediumText
        style={{
          whiteSpace: "nowrap",
        }}
      >
        We'll be in touch! 🎉
      </MediumText>
    </EmailInputContainer>
  );
}
