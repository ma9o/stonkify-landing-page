import { ChartData, ChartOptions } from "chart.js";
import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { platformColor } from "../constants/colors";
import { creators } from "../constants/datasets";
import { shuffleArray } from "../helpers/arrays";
import { hexToRgb, withAlpha } from "../helpers/colors";
import { capitalize } from "../helpers/text";
import { Calculator } from "./Calculator";
import { BaseContainer } from "./Containers";

const data: (shuffledCreators: any) => ChartData = (shuffledCreators) => {
  return {
    labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: shuffledCreators.map((creator) => {
      const rgbValues = hexToRgb(platformColor[creator.platform]);

      return {
        label: creator.label,
        data: creator.data,
        borderColor: withAlpha(rgbValues),
        backgroundColor: platformColor[creator.platform],
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
        spanGaps: false,
        pointHoverRadius: 0,
      };
    }),
  };
};

const options: ChartOptions = {
  legend: {
    display: false,
  },
  tooltips: {
    enabled: true,
    intersect: false,
    callbacks: {
      title: (tooltipItems, data) => {
        return capitalize(
          creators.find((val) => {
            return (
              val.label === data.datasets[tooltipItems[0].datasetIndex].label
            );
          }).platform
        );
      },
      label: (tooltipItem, data) => {
        return data.datasets[tooltipItem.datasetIndex].label;
      },
    },
  },
  hover: {
    mode: "nearest",
    intersect: false,
  },
  scales: {
    yAxes: [
      {
        position: "right",
        //type: "logarithmic",
        ticks: {
          beginAtZero: true,
          callback: (item) => {
            return item + "M";
          },
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const LineChartContainer = styled(BaseContainer)`
  align-items: center;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 4px 0 rgba(208, 214, 217, 0.93);
  height: min-content;

  padding: 16px;
`;

const InvestorChartContainer = styled(BaseContainer)`
  flex-direction: column;

  flex: 1 0 200px;
  margin: 0 min(5vw, 64px);

  padding: 16px;
`;

export function InvestorChart(props) {
  const { style, queryData } = props;

  const chartRef = useRef<Line>();

  useEffect(() => {
    shuffleArray(creators);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const i = setInterval(() => {
      setCurrentIndex((prev) => {
        return (prev + 1) % creators.length;
      });
    }, 4000);

    return () => {
      clearInterval(i);
    };
  }, []);

  useEffect(() => {
    const prevIndex =
      currentIndex === 0 ? creators.length - 1 : currentIndex - 1;

    if (chartRef?.current) {
      chartRef.current.chartInstance.data.datasets[currentIndex].borderColor =
        platformColor[creators[currentIndex].platform];

      chartRef.current.chartInstance.data.datasets[
        currentIndex
      ].borderWidth = 4;

      chartRef.current.chartInstance.data.datasets[
        prevIndex
      ].borderColor = withAlpha(
        hexToRgb(platformColor[creators[prevIndex].platform])
      );

      chartRef.current.chartInstance.data.datasets[prevIndex].borderWidth = 2;

      chartRef.current.chartInstance.update();
    }
  }, [!chartRef?.current, currentIndex]);

  return (
    <InvestorChartContainer>
      <LineChartContainer style={style}>
        <Line data={data(creators)} options={options} ref={chartRef} />
      </LineChartContainer>
      <Calculator
        currentLabel={creators[currentIndex].label}
        queryData={queryData}
      />
    </InvestorChartContainer>
  );
}
