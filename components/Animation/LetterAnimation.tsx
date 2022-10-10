import AnimatedText from 'react-animated-text-content';
const LetterAnimation = (props) => {
    return (
        <AnimatedText
            type="words" // animate words or chars
            animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
            }}
            animationType="blocks"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
        >
            {props.children}
        </AnimatedText>
    )
}

export default LetterAnimation