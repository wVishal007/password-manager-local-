import React from 'react';
import styled from 'styled-components';

const download = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <span className="small-text">Download Now!</span>
        <span className="title">Download our mobile application.</span>
        <span className="desc">Download Lorem mobile banking app for IOS &amp; Android to manage your online money.</span>
        <div className="buttons">
          <a href="#" className="button">
            <span className="icon"><svg width={34} height={34} viewBox="0 0 34 34" fill xmlns="http://www.w3.org/2000/svg">
                <path d="M4 28.9958V4.9125C4 4.07667 4.48167 3.34 5.19 3L19.1442 16.9542L5.19 30.9083C4.48167 30.5542 4 29.8317 4 28.9958ZM23.5642 21.3742L8.32083 30.1858L20.3483 18.1583L23.5642 21.3742ZM28.31 15.2683C28.7917 15.6508 29.1458 16.2458 29.1458 16.9542C29.1458 17.6625 28.8342 18.2292 28.3383 18.6258L25.0942 20.4958L21.5525 16.9542L25.0942 13.4125L28.31 15.2683ZM8.32083 3.7225L23.5642 12.5342L20.3483 15.75L8.32083 3.7225Z" fill="white" />
              </svg></span>
            <div className="button-text google">
              <span>Get it on</span>
              <span>Google Play</span>
            </div>
          </a>
          <a href="#" className="button">
            <span className="icon"><svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.5058 27.625C25.33 29.3817 24.0833 31.0958 22.185 31.1242C20.2866 31.1667 19.6775 30.005 17.5241 30.005C15.3566 30.005 14.6908 31.0958 12.8916 31.1667C11.0358 31.2375 9.6333 29.2967 8.4433 27.5825C6.0208 24.0833 4.16497 17.6375 6.6583 13.3025C7.8908 11.1492 10.1008 9.78916 12.495 9.74666C14.3083 9.71833 16.0366 10.9792 17.1558 10.9792C18.2608 10.9792 20.3575 9.46333 22.5533 9.68999C23.4741 9.73249 26.0525 10.0583 27.71 12.495C27.5825 12.58 24.6358 14.3083 24.6641 17.8925C24.7066 22.1708 28.4183 23.6017 28.4608 23.6158C28.4183 23.715 27.8658 25.6558 26.5058 27.625ZM18.4166 4.95833C19.4508 3.78249 21.165 2.88999 22.5816 2.83333C22.7658 4.49083 22.1 6.16249 21.1083 7.35249C20.1308 8.55666 18.5158 9.49166 16.9291 9.36416C16.7166 7.73499 17.51 6.03499 18.4166 4.95833Z" fill />
              </svg></span>
            <div className="button-text apple">
              <span>Download from</span>
              <span>App Store</span>
            </div>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    max-width: 350px;
    background-color: rgb(7 16 45);
    background: linear-gradient(to top right, rgb(7 16 45), rgb(58 60 84));
    background: -webkit-linear-gradient(to top right, rgb(7 16 45), rgb(58 60 84));
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid rgb(84 90 106);
  }

  .small-text, .title,.desc {
    font-weight: 600;
  }

  .title,.desc {
    margin: 8px 0;
  }

  .small-text {
    color: #488aec;
    font-size: 14px;
  }

  .title {
    color: #fff;
    font-size: 26px;
    line-height: 26px;
  }

  .desc {
    color: rgb(151 153 167);
    font-size: 13px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 6px;
    text-decoration: none;
  }

  .button:first-child {
    box-shadow: 0 4px 6px -1px #488aec31, 0 2px 4px -1px #488aec17;
    background-color: #488aec;
  }

  .button:last-child {
    box-shadow: 0 4px 6px -1px #0b162531, 0 2px 4px -1px #0e192b17;
    background-color: #fff;
  }

  .icon {
    height: 25px;
    width: 25px;
  }

  .icon svg {
    width: 100%;
    height: 100%;
  }

  .icon svg:last-child {
    fill: #000
  }

  .button-text {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }

  .button-text span:first-child {
    font-size: 12px;
    font-weight: 600;
  }

  .google span:first-child {
    color: rgb(219 206 253);
  }

  .apple span:first-child {
    color: rgb(81 87 108);
  }

  .google span:last-child {
    color: #fff;
    font-weight: 800;
  }

  .apple span:last-child {
    color: #000;
    font-weight: 800;
  }`;

export default download;
