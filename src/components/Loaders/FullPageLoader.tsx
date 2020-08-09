import React from 'react';
import styled from 'styled-components';
import {Spin} from "antd";

const FullPageLoaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

export const FullPageLoader = () => {
    return (
        <FullPageLoaderContainer>
            <Spin size={"large"}/>
        </FullPageLoaderContainer>
    );
};