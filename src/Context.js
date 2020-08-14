import React, { Component } from 'react'
const CommentContext = React.createContext();



export  class CommentProvider extends Component {

    state={
        comments:[
            
        ],
        dispatch:action=>{
            if (action.type==="newComment"){
                const oldComments=this.state.comments;
                var maxId=0
                oldComments.map(
                    comment=>{
                        maxId=Math.max(maxId,comment.id)
                    }
                )
                const info={
                    id:maxId+1,
                    name:action.name,
                    photo:action.photo,
                    content:action.content
                }
                oldComments.push(info)
                this.setState(
                    {comments:oldComments,}
                    );
            }
            
        }
    }
    render() {
        return (
            <div>
                <CommentContext.Provider value={this.state}>
                    {this.props.children}
                </CommentContext.Provider>
            </div>
        )
    }
}
const CommentConsumer= CommentContext.Consumer;

export default CommentConsumer;