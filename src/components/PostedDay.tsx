import moment from 'moment';

function PostedDay({date}:{date:string}) {

    const dateTimeAgo = moment(new Date(date)).fromNow();
    
    return (
        <div className="posted-day">Posted {dateTimeAgo}</div>
        
    )
}
export default PostedDay; 