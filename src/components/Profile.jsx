function Profile(props){
    
  const {name ,lastname} = props
    return (
        <h1>
            {/* Name : {props.name} {props.lastname} */}
            {/* {props.children} */}
            Name : {name} {lastname}
        </h1>
        )
        
}

export default Profile