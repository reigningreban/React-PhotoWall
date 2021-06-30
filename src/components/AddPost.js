import React from 'react'

class AddPost extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const picture = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: picture,
        }
        if (picture && description) {
            this.props.startAddingPost(post)
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <div className = "container mx-auto max-w-sm pt-5">
                <div className = "">
                    <form className = "bg-white shadow-md rounded px-8 pt-9 pb-8 mb-4" onSubmit = {this.handleSubmit}>
                        <h2 className="text-center font-bold mb-9 text-blue-500 text-2xl uppercase">Add Photo</h2>
                        <div className = "mb-7">
                            <input type = "text" placeholder = "Photo Link" className = "appearance-none border-2 rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-4" name = "link"/>
                        </div>
                        <div className = "mb-7">
                            <input type = "text" placeholder = "Photo Description" className = "appearance-none border-2 rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-4" name = "description"/>
                        </div>
                        
                        <div>
                            <button className = "bg-blue-500 hover:bg-blue-700 text-white py-3 px-3 rounded w-full hover:bg-blue-900">Post</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default AddPost