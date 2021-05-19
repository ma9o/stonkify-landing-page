import { ChartData, ChartOptions, LineElement } from "chart.js";
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
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      intersect: false,
      callbacks: {
        title: (tooltipItems) => {
          return capitalize(
            creators.find((val) => {
              return (
                val.label === tooltipItems[0].dataset.label
              );
            }).platform
          );
        },
        label: (tooltipItem) => {
          return tooltipItem.dataset.label;
        },
      },
    },
  },
  hover: {
    mode: "nearest",
    intersect: false,
  },
  scales: {
    y: {
      position: "right",
      //type: "logarithmic",
      beginAtZero: true,
      ticks: {
        callback: (item) => {
          return item + "M";
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
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

  const chartRef = useRef();

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
      chartRef.current.data.datasets[currentIndex].borderColor =
        platformColor[creators[currentIndex].platform];

      chartRef.current.data.datasets[
        currentIndex
      ].borderWidth = 4;

      chartRef.current.data.datasets[
        prevIndex
      ].borderColor = withAlpha(
        hexToRgb(platformColor[creators[prevIndex].platform])
      );

      chartRef.current.data.datasets[prevIndex].borderWidth = 2;

      chartRef.current.update();
    }
  }, [!chartRef?.current, currentIndex]);

  return (
    <InvestorChartContainer>
      <LineChartContainer style={style}>
        <Line data={data(creators)} options={options} ref={chartRef} type="Line" />
      </LineChartContainer>

      <Calculator
        currentLabel={creators[currentIndex].label}
        queryData={queryData}
      />
    </InvestorChartContainer>
  );
}
