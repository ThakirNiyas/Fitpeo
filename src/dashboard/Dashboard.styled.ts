import styled from "styled-components";

export const DashboardStyle = styled.div`
.dashboard {
  padding: 20px;
  background-color: #2c2f33;
  color: #fff;
  font-family: Arial, sans-serif;
}

.dashboard-header {
    margin-bottom: -15px;
    margin-top: -2rem;
    text-align: justify;
    font-size: small;
}
.dashboard-headers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #23272a;
}
.dashboard-container {
  display: flex;
  flex: 1;
}

.dashboard-main {
  // flex: 1;
  // padding: 20px;
}

.sidebar {
  width: 60px;
  background-color: #2c2f33;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.sidebar-icon {
  font-size: 24px;
  margin: 10px 0;
  cursor: pointer;
}

.dashboard-stats {
  display: flex;
  justify-content: space-between;
  // margin-bottom: 20px;
}
.grid-container {
  display: grid;
  gap: 10px;
  padding: 10px;
}

.grid-item {
  // padding: 20px;
  // display: flex;
}

.item1 {
  grid-column: 1 / span 2;
  grid-row: 1;
  display: flex;
}
.item2 {
  grid-column: 3;
  grid-row: 1 / span 1;
}
.item3 {
  grid-column: 1 / span 2;
  grid-row: 2;
}
.item4 {
  grid-column: 2;
  grid-row: 2 / span 1;
  position: absolute;
  bottom: 62%;
  right: 21%;
  /* top: 32%; */
  background-color: #3b3e44;
  border-radius: 10px;
  //padding: 76px;
}
.item5 {
  grid-column: 1 / span 2;
  grid-row: 3;
  width: 62.5rem;
  background-color: #3b3e44;
    /* padding: 20px; */
  border-radius: 10px;
}
.item6 {
  grid-column: 3 / span 1;
  grid-row: 3;
  margin-left: -26rem;
  font-size: smaller;
  width: 24rem;
}

.stat {
  background-color: #3b3e44;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  margin: 0 10px;
  text-align: left;
  width: 12rem;
  padding-bottom: 0;
}
.stats {
  background-color: #3b3e44;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  margin: 0 10px;
  text-align: left;
  width: 22rem;
  padding-bottom: 8px;
}

.activity {
  // margin-bottom: 20px;
  width: 62.5rem;
  background-color: #3b3e44;
    /* padding: 20px; */
  border-radius: 10px;
}

.chart {
  display: flex;
  // justify-content: space-between;
  align-items: flex-end;
  gap: 0%;
}

.bar {
  background-color: #7289da;
  width: 20px;
  margin: 0 5px;
  position: relative;
  border-radius: 10px;
}

.bar span {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}

.recent-orders {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #444;
}

.customer-feedback {
  background-color: #3b3e44;
  padding: 10px;
  border-radius: 10px;
}
.number-style {
 display: flex;
 justify-content: space-between;
}

.text-align {
  text-align: left;
  margin-left: 0.5rem;
}
.text-aligns {
  text-align: left;
  margin-top: 0;
}
.text-alignment {
  text-align: left;
  padding: 10px;
  margin-top: 0;
}
.profit-style {
  margin-top: 0;
}
.data-style {
 font-size: 2rem;
  margin: 0;
}

.percentage-style {
 margin: 0.5rem;
}

.feedback {
  background-color: #3b3e44;
  text-align: left;
}

.rating {
  color: #f1c40f;
}

.fb-style {
 margin: 0;
}
`
