export default {
    user_card: {
        border: '1px solid grey',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        borderRadius: '3px',
        marginBottom: '10px',
    },
    user_info: {
        display: 'flex',
    },
    user_photo: {
        marginRight: '10px',
        padding: '5px'
    },
    user_name: {
        '& div': {
            fontSize: '0.8em',
            fontStyle: 'italic',
            marginTop: '10px'
        }
    },
    controls: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px'
    }
}