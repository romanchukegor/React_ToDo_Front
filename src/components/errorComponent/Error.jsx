const Error = ({errorText}) => {
    return (
        <div>
            <p style={{fontSize: "50px", color: "red"}}>Произошла ошибка... {errorText}</p>
        </div>
    )
}

export default Error