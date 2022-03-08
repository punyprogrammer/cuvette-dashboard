import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeData } from "../redux/storeRedux";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Area,
  ReferenceLine,
} from "recharts";
import "react-responsive-modal/styles.css";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { UpdateDisabledTwoTone } from "@mui/icons-material";
const Container = styled.div`
  width: 740px;
  margin-right: 20px;
  margin-left: 0px;
`;
const SkillHeader = styled.div`
  width: 717px;
  height: 109px;
  border-radius: 10px;
  border: 1px solid lightgray;
  margin-top: 75px;
  margin-left: 20px;
  padding: 25px;
  display: flex;
  align-items: center;
`;
const SkillImage = styled.img`
  height: 50px;
  object-fit: cover;
`;
const SkillContent = styled.div`
  margin-left: 18px;
  width: 50%;
`;
const SkillHeading = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #222f3e;
`;
const SkillSubHeading = styled.h1`
  font-weight: 400;
  font-size: 12px;
  color: #566474;
  margin-top: 5px;
`;
const SkillButton = styled.button`
  height: 44px;
  width: 120px;
  font-weight: 700;
  font-size: 14px;
  border-radius: 5px;
  background-color: #142683;
  color: white;
  border: none;
  outline: none;
  margin-left: 160px;
  cursor: pointer;
`;
const StatsContainer = styled.div`
  height: 158px;
  width: 717px;
  border-radius: 10px;
  border: 1px solid lightgray;
  margin-top: 30px;
  margin-left: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;
const StatsHeading = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #1e272e;
  margin-top: 40px;
`;
const StatsContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const StatsItem = styled.div`
  display: flex;
  align-items: center;
`;
const StatsImage = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #f7f8fa;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f8fa;
  border: 1px solid #ebf0f5;
  margin-right: 20px;
`;
const StatsText = styled.div``;
const StatsTextHeading = styled.h1`
  font-weight: 700;
  font-size: 22px;
  color: #1e272e;
`;
const StatsTextSubHeading = styled.h1`
  font-weight: 400;
  text-transform: capitalize;
  font-size: 12px;
  color: #9eaab7;
`;
const GraphContainer = styled.div`
  height: 525px;
  width: 717px;
  border-radius: 10px;
  border: 1px solid lightgray;
  margin-top: 30px;
  margin-left: 20px;
  padding: 30px;
`;
const GraphHeader = styled.div`
  position: relative;
`;
const GraphHeading = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #1e272e;
`;
const GraphHeaderLogo = styled.div`
  position: absolute;
  top: 10px;
  left: 600px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #f7f8fa;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f8fa;
  border: 1px solid #ebf0f5;
`;
const GraphHeaderLogoImage = styled.img``;
const GraphSubheading = styled.p`
  margin-top: 30px;
  line-height: 21px;
  font-size: 14px;
  font-weight: 400;
  color: #566474;
`;
const GraphSubheadingBold = styled.span`
  font-weight: 700;
`;

const ChartContainer = styled.div``;

const TooltipTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: white;
`;
const TooltipSubtitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
`;

const ModalContainer = styled.div`
  height: 521px;
  width: 880px;
  border-radius: 10px;
  padding: 36px 40px;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ModalHeading = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #222f3e;
`;
const ModalLogoContainer = styled.div``;
const ModalHr = styled.div`
  width: 800px;
  height: 1px;
  background-color: #ebf0f5;
  margin-top: 50px;
`;
const ModalLogoImg = styled.img`
  height: 48px;
  width: 36px;
  object-fit: cover;
`;
const UpdateContainer = styled.div`
  margin-top: 30px;
`;
const UpdateItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 38px;
`;
const UpdateNumber = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #142683;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const UpdateNumberContent = styled.div`
  color: white;
`;
const UpdateText = styled.div`
  margin-left: 18px;
  color: #566474;
  font-weight: 400;
  font-size: 18px;
`;
const UpdateTextBold = styled.span`
  color: #566474;
  font-weight: 700;
  font-size: 18px;
`;
const UpdateButton = styled.div`
  position: fixed;
  left: 650px;
  display: flex;
  align-items: center;
  height: 40px;
  width: 155px;
  border: 1px solid #142683;
  padding: 20px;
  justify-content: space-between;
  border-radius: 5px;
  justify-self: flex-end;
`;
const UpdateButtonQuantity = styled.span`
  color: #142683;
  font-size: 16px;
  font-weight: 700;
`;
const ModalHr2 = styled.div`
  width: 800px;
  height: 1px;
  background-color: #ebf0f5;
  margin-top: 30px;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 40px;
`;
const CancelButton = styled.button`
  cursor: pointer;
  width: 82px;
  height: 41px;
  border: none;
  border: 1px solid #142683;
  color: #142683;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: white;
  margin-right: 35px;
`;
const SaveButtonContainer = styled.button`
  cursor: pointer;
  width: 92px;
  height: 41px;
  border: none;
  border: 1px solid #142683;
  color: white;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #142683;
  margin-right: 42px;
`;
const SaveButtonText = styled.span``;
const ModalButtonSave = styled.div``;

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value, stateData } = props;
  console.log(payload);

  // /   if (value > 2500) {
  //     return (
  //       <svg
  //         x={cx - 10}
  //         y={cy - 10}
  //    /     width={20}
  //         height={20}
  //         fill="red"
  //         viewBox="0 0 1024 1024"
  //       >
  //         <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
  //       </svg>
  //     );
  //   }

  //   return (
  //     <svg
  //       x={cx - 10}
  //       y={cy - 10}
  //       width={20}
  //       height={20}
  //       fill="green"
  //       viewBox="0 0 1024 1024"
  //     >
  //       <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
  //     </svg>
  //   );

  if (payload.name === stateData.percentile) {
    return (
      <Tooltip
        open={true}
        arrow
        title={
          <div>
            <TooltipTitle>{payload.name}% Percentile</TooltipTitle>
            <TooltipSubtitle>Your Score</TooltipSubtitle>
          </div>
        }
        placement="right"
      >
        <svg x={cx - 5.5} y={cy - 5.5} fill="#438AF6" width={11} height={11}>
          <circle cx="50%" cy="50%" r="5.5" fill="#438AF6" />
        </svg>
      </Tooltip>
    );
  }
  return <div></div>;
};
const CenterBar = () => {
  const stateData = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const [updateDataTrack, setUpdateDataTrack] = useState(stateData);
  const [updateData, setUpdateData] = useState([
    {
      text: "rank",
      name: "rank",
      serialNo: 1,
      value: updateDataTrack.rank,
    },
    {
      text: "percentile",
      serialNo: 2,
      value: updateDataTrack.percentile,
      name: "percentile",
    },
    {
      text: "current score",
      name: "correctAnswers",
      serialNo: 3,
      value: updateDataTrack.correctAnswers,
    },
  ]);
  const [open, setOpen] = useState(false);
  const toggleFunction = (e) => {
    setOpen(!open);
  };
  const handleIncrement = (direction, fieldName) => {
    const currData = { ...updateDataTrack };
    if (fieldName === "rank") {
      if (direction === "up") {
        currData.rank += 1;
      } else {
        if (currData.rank === 0) return;
      }
    } else if (fieldName === "percentile") {
      if (direction === "down") {
        if (currData.percentile === 0) return;
        else {
          currData.percentile -= 10;
        }
      } else {
        if (currData.percentile === 100) return;
        else {
          currData.percentile += 10;
        }
      }
    } else {
      if (direction === "up") {
        if (currData.correctAnswers === 15) return;
        else {
          currData.correctAnswers += 1;
        }
      } else {
        if (currData.correctAnswers === 0) return;
        else {
          currData.correctAnswers -= 1;
        }
      }
    }

    setUpdateDataTrack(currData);
  };
  const handleDataChange = (e) => {
    console.log("asdasdasd");
    e.preventDefault();
    const newData = { ...updateDataTrack };
    dispatch(changeData(newData));
    setOpen(false);
  };
  const data = [
    {
      name: 0,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 10,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 20,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 30,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 40,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 50,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 60,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 60,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 70,
      uv: 1234,
      pv: 3678,
      amt: 2100,
    },
    {
      name: 80,
      uv: 2321,
      pv: 3400,
      amt: 2100,
    },
    {
      name: 90,
      uv: 3453,
      pv: 430,
      amt: 2100,
    },
    {
      name: 100,
      uv: 3453,
      pv: 4,
      amt: 2100,
    },
  ];
  var tooltip;
  const CustomTooltip = ({ active, payload }) => {
    if (!active || !tooltip) return null;
    for (const bar of payload)
      if (bar.dataKey === tooltip)
        return (
          <div>
            AMARDEEP
            <br />
            {bar.value.toFixed(2)}
          </div>
        );
    return null;
  };
  return (
    <>
      <PureModal
        width="880px"
        borderRadius="10px"
        isOpen={open}
        onClose={() => {
          setOpen(false);
          return true;
        }}
      >
        <ModalContainer>
          <ModalHeader>
            <ModalHeading>Update Skill Scores</ModalHeading>
            <ModalLogoContainer>
              <ModalLogoImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"></ModalLogoImg>
            </ModalLogoContainer>
          </ModalHeader>
          <ModalHr />
          <UpdateContainer>
            {updateData.map((item, index) => {
              return (
                <UpdateItem>
                  <UpdateNumber>
                    <UpdateNumberContent>{index + 1}</UpdateNumberContent>
                  </UpdateNumber>
                  <UpdateText>
                    Update your <UpdateTextBold>{item.text}</UpdateTextBold>
                  </UpdateText>
                  <UpdateButton>
                    <AddIcon
                      onClick={() => handleIncrement("up", `${item.name}`)}
                      style={{
                        color: "#566474",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                    />
                    <UpdateButtonQuantity>
                      {updateDataTrack[item.name]}
                    </UpdateButtonQuantity>
                    <RemoveIcon
                      onClick={() => handleIncrement("down", `${item.name}`)}
                      style={{
                        color: "#566474",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                    />
                  </UpdateButton>
                </UpdateItem>
              );
            })}
          </UpdateContainer>
          <ModalHr2 />
          <ButtonContainer>
            <CancelButton onClick={()=>setOpen(false)}>Cancel</CancelButton>
            <SaveButtonContainer onClick={handleDataChange}>
              <SaveButtonText>Save</SaveButtonText>
              <ArrowRightAltIcon />
            </SaveButtonContainer>
          </ButtonContainer>
        </ModalContainer>
      </PureModal>

      <Container>
        <SkillHeader>
          <SkillImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
          <SkillContent>
            <SkillHeading>HyperText Markup Language</SkillHeading>
            <SkillSubHeading>
              Questions: 08 |Duration: 15min |Submitted on June 5 2021
            </SkillSubHeading>
          </SkillContent>
          <SkillButton onClick={() => setOpen(true)}>Update</SkillButton>
        </SkillHeader>
        <StatsContainer>
          <StatsHeading>Quick Statistics</StatsHeading>
          <StatsContent>
            <StatsItem>
              <StatsImage>🏆</StatsImage>
              <StatsText>
                <StatsTextHeading>{stateData.rank}</StatsTextHeading>
                <StatsTextSubHeading>YOUR RANK</StatsTextSubHeading>
              </StatsText>
            </StatsItem>

            <StatsItem>
              <StatsImage>📋</StatsImage>
              <StatsText>
                <StatsTextHeading>{stateData.percentile}%</StatsTextHeading>
                <StatsTextSubHeading>YOUR PERCENTILE</StatsTextSubHeading>
              </StatsText>
            </StatsItem>

            <StatsItem>
              <StatsImage>✅</StatsImage>
              <StatsText>
                <StatsTextHeading>
                  {stateData.correctAnswers}/15
                </StatsTextHeading>
                <StatsTextSubHeading>CORRECT ANSWERS</StatsTextSubHeading>
              </StatsText>
            </StatsItem>
          </StatsContent>
        </StatsContainer>
        <GraphContainer>
          <GraphHeader>
            <GraphHeading>Comparison Graph</GraphHeading>
            <GraphSubheading>
              <GraphSubheadingBold>
                You scored {stateData.percentile}% percentile{" "}
              </GraphSubheadingBold>
              which is lower than the
              <br />
              average percentile 72% of all engineers that took the test
            </GraphSubheading>
            <GraphHeaderLogo>📈</GraphHeaderLogo>
          </GraphHeader>

          <ChartContainer>
            <LineChart
              width={640}
              height={307}
              data={data}
              margin={{ top: 30 }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />

              {/* <Tooltip
              contentStyle={{
                backgroundColor: "#1E272E",
                color: "white",
                width: 400,
              }}
              payload={[{ name: "37% Your Score", value: "Yusfsd" }]}
              itemStyle={{ color: "#fff" }}
              cursor={false}
              content={<CustomTooltip />}
            /> */}
              {/* <Legend /> */}
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                dot={<CustomizedDot stateData={stateData} />}
              />

              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="yellow"
              />
              <ReferenceLine
                type="montone"
                strokeDasharray="5 5"
                stroke="#438AF6"
                x={stateData.percentile}
                label="iPhone"
              />
              {/* <ReferenceLine
                stroke="#438AF6"
                strokeDasharray="3 3"
                y={9800}
                label="yPhone"
              /> */}
            </LineChart>
          </ChartContainer>
        </GraphContainer>
      </Container>
    </>
  );
};

export default CenterBar;
