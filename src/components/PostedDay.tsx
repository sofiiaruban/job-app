import moment from 'moment';

function PostedDay({date, className}:{date:string,
className?: string}) {

    const dateTimeAgo = moment(new Date(date)).fromNow();
    
    return (
        <div className={className}>Posted {dateTimeAgo}</div>
        
    )
}
export default PostedDay; 