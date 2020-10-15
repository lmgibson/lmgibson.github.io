'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    
    render() {
        if (this.state.liked) {
            return 'Liked';
    }

    return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        '👍🏼'
    );
    }
}

const domContainer = document.querySelector('#like_button_container')
ReactDOM.render(e(LikeButton), domContainer);