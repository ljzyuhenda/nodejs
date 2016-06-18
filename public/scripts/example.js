// var http = require('http');
// var url = require('url');

var ContentForm = React.createClass({
    getInitialState() {
        return { 'author': '', 'text': '' };
    },

    handleSubmit(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();

        if (!text || !author) {
            return;
        }
        this.props.onCommentCommit({ author: author, text: text });
        this.setState({ author: '', text: '' });
    },

    handleNamechange(e) {
        this.setState({ author: e.target.value });
    },

    handleTextchange(e) {
        this.setState({ text: e.target.value });
    },

    render() {
        return (
            <form classname='contentForm' onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='your name'
                    onChange={this.handleNamechange}
                    value={this.state.author}
                    />

                <input
                    type='text'
                    placeholder='say something'
                    onChange={this.handleTextchange}
                    value={this.state.text}
                    />

                <input type='submit' value='post' />
            </form>
        );
    }
});

var Comment = React.createClass({
    handleSubmit() {
        alert(this.props.url);
    },

    render() {
        return (
            <ContentForm onCommentCommit={this.handleSubmit}/>
        );
    }
});

ReactDOM.render(
    <Comment url='/api/comments'/>,
    document.getElementById('content')
);