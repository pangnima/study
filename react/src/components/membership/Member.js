import React from 'react';
import ContentBox from './ContentBox';
import { Button, WingBlank } from 'antd-mobile';
import { unRegister } from '../../actions/membershipAction';
import { connect } from 'react-redux';

function Member(props) {
  return (
    <div>
      <WingBlank>
        <h1>멤버입니다</h1>
        <ContentBox />
        <Button
          type="warning"
          onClick={props.unRegister}
        >
          해지하기
        </Button>
      </WingBlank>
    </div>
  );
}
export default connect(() => ({}), {
  unRegister
})(Member);