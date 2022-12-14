import React from 'react';
import styled from 'styled-components';
import BattlePeerFeature from '../organism/feature'
function BattlePeerPage() {
  return (
    <PageWrapper className='Battlepeer_s'>
      <PageBody>
        <BattlePeerFeature />
      </PageBody>
    </PageWrapper>
  );
}
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
// padding: 3rem;
const PageBody = styled.div`
  margin: 1.4rem 15rem;
  background-color: #806dff;
  position: relative;
  @media (max-width: 768px) {
    margin: 1.4rem 3rem;
  }
`;

export default BattlePeerPage;
