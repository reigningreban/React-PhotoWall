import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../redux/actions"
import App from '../App'
import { withRouter } from "react-router-dom"

function mapStateToProps(state) {
    return{
        posts: state.posts,
        comments: state.comments,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
const Main = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default Main