import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {Button, WingBlank} from 'antd-mobile';
import axios from 'axios';
import { changeMembershipLevel } from '../../actions/membershipAction';
import {fetchBenefits} from '../../actions/benefitAction';
import MembershipLevelType from '../../enums/MembershipLevelType';
import BenefitAdder from '../BenefitAdder';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#app');

class Guest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  componentDidMount() {
    this.props.fetchBenefits();
  }
  render() {
    return (
      <div>
        <WingBlank>
          <h1>고객님은 팔콘 멤버십 회원이 아닙니다.</h1>
          <div>
            <Button onClick={() => {
              this.setState({
                isOpen: true
              });
            }}>혜택보기</Button>
          </div>
          <div>
            <Button
              onClick={() => {
                this.props.changeMembershipLevel(MembershipLevelType.TRIAL);
              }}>
              30일 가입하기
            </Button>
          </div>
          <div>
            <Button
              type="primary"
              onClick={() => {
                this.props.changeMembershipLevel(MembershipLevelType.MEMBER);
              }}>
              정회원 가입하기
            </Button>
          </div>
          <Modal
            isOpen={this.state.isOpen}
            style={customStyles}
          >
            <Button onClick={() => {
              this.setState({
                isOpen: false
              })
            }}>
              닫기
            </Button>
            <div>
              <ul>
                {this.props.benefits.map((benefit) => {
                  return (
                    <li key={benefit.id}>
                      {benefit.description}<br />
                    </li>
                  );
                })}
              </ul>
            </div>
          </Modal>
          <BenefitAdder />
        </WingBlank>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    membershipLevel: state.membershipLevel,
    benefits: state.benefits
  }
};
const mapDispatchToProps = {
  changeMembershipLevel,
  fetchBenefits
};
export default connect(mapStateToProps, mapDispatchToProps)(Guest);