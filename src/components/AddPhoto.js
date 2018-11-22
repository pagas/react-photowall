import React,{Component} from 'react';


class AddPhoto extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const link = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        if (description && link) {
            this.props.startAddingPost({
                id: Number(new Date()),
                description: description,
                imageLink: link
            });
            this.props.history.push('/');
        }
    }
    render() {
        return <div>
            <div className="form" onSubmit={this.handleSubmit}>
                <form>
                    <input type="text" name="link" placeholder="Link"/>
                    <input type="text" name="description" placeholder="Description"/>
                    <button type="submit">Post</button>
                </form>
            </div>
        </div>;
    }
}

export default AddPhoto