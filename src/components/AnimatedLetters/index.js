import './index.scss';

const AnimatedLetters = ({letterClass, stringArray, index}) => {
    return (
        <span>
            {
                stringArray.map((character, i) => (
                <span key={character + index} className={`${letterClass} _${i + index}`}>
                    {character}
                </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters