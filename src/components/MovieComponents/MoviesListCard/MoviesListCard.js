const MoviesListCard = (props) => {
    let {name} = props
    return (
        <div>
            <p>{name}</p>
        </div>
    );
}

export {MoviesListCard};