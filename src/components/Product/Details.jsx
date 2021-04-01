import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const FeatureList = ({ feature, selectedFeature }) => {
  return <CustomButton onClick={selectedFeature}>{feature}</CustomButton>;
};

const Details = ({ title, description, colorOptions, featureList }) => {
  const [featureImage, setFeatureImage] = useState(colorOptions[0]);
  const [active, setActive] = useState(false);
  const [showTimeFeature, setShowTimeFeature] = useState(true);

  const selectedFeature = (i) => {
    setShowTimeFeature(!showTimeFeature);
  };

  return (
    <>
      <ImageContainer>
        <img src={featureImage.imageUrl} alt="" />

        {showTimeFeature ? (
          <TimeContainer>
            <TimeTitle>
              {new Date().getHours()}:{new Date().getMinutes()}
            </TimeTitle>
          </TimeContainer>
        ) : (
          <HeartRateContainer>
            <i className="fas fa-heartbeat"></i>
            <p>82</p>
          </HeartRateContainer>
        )}

        <ImageTitle>{featureImage.styleName}</ImageTitle>
      </ImageContainer>

      <DetailsContainer>
        <ProductTitle> {title}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>

        <SectionTitle>Select Color</SectionTitle>

        <OptionImageContainer>
          {colorOptions.map((color, i) => (
            <OptionImage
              key={i}
              src={color.imageUrl}
              alt={color.styleName}
              active={active}
              style={
                featureImage === colorOptions[i]
                  ? { border: "2px solid green" }
                  : { border: "2px solid white" }
              }
              onClick={() => {
                setFeatureImage(colorOptions[i]);
                setActive(true);
              }}
            />
          ))}
        </OptionImageContainer>

        <SectionTitle>Features</SectionTitle>

        <FeatureContainer>
          {featureList.map((feature, i) => (
            <FeatureList
              key={i}
              feature={feature}
              selectedFeature={() => {
                selectedFeature(i);
              }}
            />
          ))}
        </FeatureContainer>
      </DetailsContainer>
    </>
  );
};

export default Details;

const ImageContainer = styled.div`
  flex: 0.4;
  text-align: center;
  box-sizing: center;
  position: relative;
  > img {
    width: 100%;
  }
`;

const TimeContainer = styled.div`
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 600;
`;

const heartbeat = keyframes`
  0% { transform: scale(1, 1) }
    
  50% { transform: scale(1.2, 1.2) }
    
  100% { transform: scale(1, 1) }
`;

const HeartRateContainer = styled.div`
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  font-weight: 600;
  color: white;
  > i {
    font-size: 45px;
    color: red;
    animation-name: ${heartbeat};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`;

const TimeTitle = styled.h1`
  /* font-size: 18px; */
  color: white;
`;
const ImageTitle = styled.p`
  font-size: 18px;
  color: grey;
`;

const DetailsContainer = styled.div`
  flex: 0.6;
  /* border: 1px solid red; */
`;

const ProductTitle = styled.h1``;

const ProductDescription = styled.p`
  font-size: 18px;
  color: grey;
`;

const OptionImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 8% 0;
`;

const OptionImage = styled.img`
  cursor: pointer;
  height: 60px;

  border-radius: 5px;
`;

const SectionTitle = styled.h3``;

const FeatureContainer = styled.div`
  display: flex;
  width: 70%;
`;

const CustomButton = styled.button`
  font-weight: bold;
  padding: 10px;
  background-color: lightgray;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10%;
`;
