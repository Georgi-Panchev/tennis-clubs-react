import React, { Component } from 'react';
import queryString from 'query-string';
import ClubCard from '../ClubCard/ClubCard';
import clubActions from '../../../flux/actions/clubActions';
import petStore from '../../../flux/stores/ClubStore';

class ClubListPage extends Component {
    constructor(props) {
        super(props);

        const queryStringObject = queryString.parse(props.location.search);
        const page = parseInt(queryStringObject.page, 10) || 1;

        this.state = {
            petList: [],
            page: page
        };

        petStore.on(petStore.eventTypes.PETS_FETCHED, this.all);
    }

    all = (data) => {
        console.log(data);
        this.setState({
            petList: data
        });
    };

    componentWillUnmount() {
        petStore.off(petStore.eventTypes.PETS_FETCHED, this.all);
    }

    componentDidMount() {
        clubActions.all(this.state.page);
    }

    goToPrevPage = () => {
        let currentPage = this.state.page;

        if (currentPage === 1) {
            return;
        }

        currentPage -= 1;
        this.setState({ page : currentPage });

        clubActions.all(currentPage);
        this.props.history.push(`/?page=${currentPage}`);
    };

    goToNextPage = () => {
        let currentPage = this.state.page;

        if (this.state.petList.length === 0) {
            return;
        }

        currentPage += 1;
        this.setState({ page : currentPage });

        clubActions.all(currentPage);
        this.props.history.push(`/?page=${currentPage}`);
    };

    getPetListElements() {
        if (this.state.petList.length > 0) {
            return this.state.petList
                .map((pet) => (
                    <ClubCard key={pet.id} pet={pet} />
                ));
        }

        return 'No Pets available';
    }

    render() {
        const petListElements = this.getPetListElements();
        return (
            <div>
                <h1>Pet List Page</h1>
                {petListElements}
                <div>
                    <button onClick={this.goToPrevPage}>Prev</button>
                    <button onClick={this.goToNextPage}>Next</button>
                </div>
            </div>
        );
    }
}

export default ClubListPage;
