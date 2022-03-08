import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AnimatedLineProgressBar, LineProgressBar } from "@frogress/line";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
const Container = styled.div``;
const SyllabusContainer = styled.div`
  width: 386px;
  height: 429px;
  border-radius: 10px;
  border: 1px solid lightgray;
  margin-right: 20px;
  margin-top: 75px;
  padding-top: 38px;
  padding-left: 28px;
`;

const SyllabusHeading = styled.h1`
  font-weight: 700;
  font-size: 16px;
`;
const SyllabusItem = styled.div`
  margin-top: 20px;
`;
const SyllabusTitle = styled.h1`
  font-weight: 400;
  font-size: 16px;
  color: #566474;
  margin-bottom: 15px;
`;
const SyllabusProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content-space-between;
`;
const SyllabusProgressNumber = styled.h4`
  font-weight: 700;
  font-size: 16px;
  margin-left: 90px;
  color: ${(props) => props.color};
`;
const QuestionContainer = styled.div`
  width: 386px;
  height: 393px;

  border: 1px solid lightgray;
  border-radius: 10px;
  margin-top: 30px;
  padding: 30px;
`;
const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const QuestionTitle = styled.h1`
  font-weight: 700;
  font-size: 16px;
`;
const QuestionCorrect = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #438af6;
`;
const QuestionDescription = styled.p`
  margin-top: 25px;
`;
const QuestionQuantity = styled.span`
  font-weight: 700;
  font-size: 13px;
  color: #566474;
`;

const QuestionConclusion = styled.span`
  font-weight: 400;
  font-size: 13px;
  color: #566474;
`;
const QuantityProgressBarContainer = styled.div`
  height: 180px;
  width: 180px;
  margin-top: 50px;
  margin-left: 70px;
`;
const QuantityProgressImage = styled.img`
  width: 34px;
  height: 41px;
  object-fit: cover;
`;
const RightBar = () => {
  const stateData = useSelector((state) => state.data);

  const [correctProgress, setCorrectProgress] = useState(0);
  const [correctTotal, setCorrectTotal] = useState(15);
  const [correctFinal, setCorrectFinal] = useState(
    useSelector((state) => state.data.data.correctAnswers)
  );
  const [SyllabusData, SetSyllabusData] = useState([
    {
      title: "HTML Forms ,Title,History",
      initialValue: 0,
      maxValue: 80,
      color: "#438AF6",
    },
    {
      title: "Tags and References with HTML",
      initialValue: 0,
      maxValue: 60,
      color: "#FF9142",
    },
    {
      title: "Tables & CSS Basics",
      initialValue: 0,
      maxValue: 24,
      color: "#FB5E5E",
    },
    {
      title: "Tables ",
      initialValue: 0,
      maxValue: 96,
      color: "#2EC971",
    },
  ]);
  //useEffec for syllabus
  useEffect(() => {
    setInterval(() => {
      SetSyllabusData((arr) => {
        const newArr = arr.slice();
        newArr.forEach((item) => {
          if (item.initialValue + 1 <= item.maxValue) {
            item.initialValue += 1;
          }
        });
        return newArr;
      });
    }, 20);
  }, []);
  //useEffect for progress
  useEffect(() => {
    setInterval(() => {
      setCorrectProgress((value) => {
        if (value+1 <=stateData.data.correctAnswers) {
          return value + 1;
        }
      });
    }, 200);
  }, [stateData.data.correctAnswers]);
  //useEffect for updates

  useEffect(() => {
    setCorrectProgress(0);
  }, [stateData.data.correctAnswers]);

  return (
    <Container>
      <SyllabusContainer>
        <SyllabusHeading>Syllabus wise Analysis </SyllabusHeading>
        {SyllabusData.map((item) => {
          return (
            <SyllabusItem>
              <SyllabusTitle>{item.title}</SyllabusTitle>
              <SyllabusProgressContainer>
                <LineProgressBar
                  percent={item.initialValue}
                  rounded={36}
                  height={10}
                  width={197}
                  progressColor={item.color}
                />
                <SyllabusProgressNumber color={item.color}>
                  {item.initialValue}%
                </SyllabusProgressNumber>
              </SyllabusProgressContainer>
            </SyllabusItem>
          );
        })}
      </SyllabusContainer>

      <QuestionContainer>
        <QuestionHeader>
          <QuestionTitle>Question Analysis</QuestionTitle>
          <QuestionCorrect>
            {stateData.data.correctAnswers}/{correctTotal}
          </QuestionCorrect>
        </QuestionHeader>

        <QuestionDescription>
          <QuestionQuantity>
            You scored {stateData.data.correctAnswers} correct out of{" "}
            {correctTotal} questions{" "}
          </QuestionQuantity>
          <QuestionConclusion>
            However it still needs improvements
          </QuestionConclusion>
        </QuestionDescription>
        <QuantityProgressBarContainer>
          <CircularProgressbarWithChildren
            styles={buildStyles({
              rotation: 0.25,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "0px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `#438AF6`,
              textColor: "#fff",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
            value={(correctProgress / correctTotal) * 100}
            strokeWidth={17}
            text={`${(7 / 14) * 100}%`}
          >
            <QuantityProgressImage src="data:image/jpeg;base64,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" />
          </CircularProgressbarWithChildren>
        </QuantityProgressBarContainer>
      </QuestionContainer>
    </Container>
  );
};

export default RightBar;
