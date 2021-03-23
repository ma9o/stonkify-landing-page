import styled from "styled-components";

export const BaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: visible;
`;

export const ResponsiveContainer = styled(BaseContainer)`
  flex-wrap: wrap;
  height: 100%;
  padding: 0 calc((100vw - 1440px) / 2);
  align-items: center;
`;

export const PageContainer = styled(BaseContainer)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin: auto;
  background-color: #f6f8fc;
  min-height: 100vh;
  justify-content: flex-start;

  align-items: center;

  overflow: hidden;
`;
