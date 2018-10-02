/* @flow */
import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import FilterField from "../../components/FilterField";
import {changeFilterAction} from "../../actions/index";

type Props = {
    city: string,
    name: string,
    changeFilter: (name: string, value: string) => void,
};
type State = {
    city: string,
    name: string,
};

class FilterForm extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            city: props.city || '',
            name: props.name || ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    /*:: handleChange: () => void */
    handleChange(event) {
        const { changeFilter } = this.props;
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
        changeFilter(name, value);
    }

    render() {
        const {name,city} = this.state;
        return (
            <Fragment>
                <FilterField
                  label='Name'
                  id='name'
                  value={name}
                  onChange={this.handleChange}
                />

                <FilterField
                  label='City'
                  id='city'
                  value={city}
                  onChange={this.handleChange}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = ({filters: {city, name}}) => (
    {
        city,
        name
    }
);
const mapDispatchToProps = (dispatch) => ({
    changeFilter: (filterName, value) => dispatch(changeFilterAction(filterName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);