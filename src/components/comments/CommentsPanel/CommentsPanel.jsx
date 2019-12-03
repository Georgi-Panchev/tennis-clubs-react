import React, { Component } from 'react';
import toastr from 'toastr';
import CreateCommentForm from '../CreateCommentForm/CreateCommentForm';
import FormHelpers from '../../../utils/FormHelpers';
import commentActions from '../../../state-management/actions/commentActions';
import commentStore from '../../../state-management/stores/TournamentStore';
import CommentItem from '../CommentItem/CommentItem';

class CommentsPanel extends Component {
    constructor(props) {
        super(props);

        const petId = this.props.petId;

        this.state = {
            petId,
            comment: {
                message: ''
            },
            errors: {
                message: ''
            },
            commentList: []
        };

        commentStore.on(commentStore.eventTypes.COMMENT_CREATED, this.create);
        commentStore.on(commentStore.eventTypes.COMMENTS_FETCHED, this.all);
    }

    create = (data) => {
        console.log(data);
        if (!data.success) {
            return toastr.error(data.message);
        }

        toastr.success(data.message);
        const commentList = this.state.commentList;
        commentList.push(data.comment);
        this.setState({
            commentList: commentList
        });
    };

    all = (data) => {
        console.log(data);
        this.setState({
            commentList: data
        });
    };

    componentWillUnmount() {
        commentStore.off(commentStore.eventTypes.COMMENT_CREATED, this.create);
        commentStore.off(commentStore.eventTypes.COMMENTS_FETCHED, this.all);
    }

    componentDidMount() {
        commentActions.all(this.state.petId);
    }

    handleChange = (event) => {
        FormHelpers.handleFormChange.bind(this)(event, 'comment');
    };

    createComment = (event) => {
        event.preventDefault();
        const comment = this.state.comment;

        if (!this.validateComment(comment)) {
            return;
        }

        console.log(comment);
        commentActions.create(this.state.petId, comment);
    };

    validateComment(comment) {
        let isFormValid = true;
        let errors = {};
        if (!comment.message || comment.message.length < 10) {
            errors.message = 'Minimum 10 Symbols!';
            isFormValid = false;
        }

        this.setState({ errors: errors });
        return isFormValid;
    }

    getCommentListElements() {
        const commentList = this.state.commentList;
        if (commentList.length > 0) {
            return commentList
                .map((comment, index) => (
                    <CommentItem key={index} comment={comment} />
                ));
        }

        return 'No Comments available';
    }

    render() {
        const commentListElements = this.getCommentListElements();
        return (
            <div>
                <h1>Create Comment</h1>
                <CreateCommentForm comment={this.state.comment} errors={this.state.errors}
                                   handleChange={this.handleChange} handleSubmit={this.createComment} />
                <h1>Comment List</h1>
                {commentListElements}
            </div>
        );
    }
}

export default CommentsPanel;
