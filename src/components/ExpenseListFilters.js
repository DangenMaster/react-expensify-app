import React from "react";
import { connect } from "react-redux";
import 'react-dates/initialize';
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByFilter, setStartDateFilter, setEndDateFilter } from "./../actions/filters";

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDateFilter(startDate);
    this.props.setEndDateFilter(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSelectChange = (e) => {
    e.preventDefault();
    this.props.sortByFilter(e.target.value);
  }
  render() {
    return(
      <div>
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSelectChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          startDateId="expenseStartDateFilterId"
          endDate={this.props.filters.endDate}
          endDateId="expenseEndDateFilterId"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setStartDateFilter: (startDate) => dispatch(setStartDateFilter({ startDate })),
  setEndDateFilter: (endDate) => dispatch(setEndDateFilter({ endDate })),
  setTextFilter: (text) => dispatch(setTextFilter({ text })),
  sortByFilter: (sortBy) => dispatch(sortByFilter({ sortBy }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
