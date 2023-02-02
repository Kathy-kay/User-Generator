
import {Link} from 'react-router-dom'


const UserDisplay = (props) => {
    return ( 
        <div className="user-list">
            <div className="content">
                <img src={props.picture.large} alt=
                {props.username} />
            <div className='user-description'>
                <h2> {props.name.title} {props.name.first} {props.name.last}</h2> 
                <p>{props.email}</p>
                <p>{props.phone}</p>
            <nav>
                <Link
                    to={{pathname: `/user/${props.email}/${props.phone}`}}>
                    <p>View for more Information</p>
                </Link>
            </nav>
            </div>
      </div>
    
     </div>
    );
}
 
export default UserDisplay;