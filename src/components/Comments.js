import React from 'react'


class Comments extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event){
        event.preventDefault();
        const comment = event.target.elements.comment.value;

        if (comment) {
            this.props.startAddingComment(comment, this.props.id)
            event.target.elements.comment.value = ''
        }
    }
    render() {
        // console.log(this.props.comments);
        return (
            <div className = "p-9">
            {
                this.props.comments.map((comment, index) => {
                    return(
                        <p key = {index} className = "p-2 border-b border-gray-400 mb-1">
                            {comment}
                        </p>
                    )
                })
            }
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <input placeholder = "comment" name = "comment" className = "w-full p-2 border border-black" />
                        <input type = "submit" hidden/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Comments