import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImagesWrapper = styled.div``;
const Image = styled.img.attrs(({ scroll }) => ({
    style: {
        transform: `translateY(-${scroll}%)`,
    },
}))`
    position: absolute;
    border-radius: 6px;
    transition: transform 0.2s ease-out;
    right: ${props => props.right}vw;
    bottom: ${props => props.bottom}vh;
    height: ${props => props.height}vh;
    z-index: ${props => props.zIndex};
`;

function Images(props) {
    const rightArr = [3, 1, 6];
    const bottomArr = [-80, -50, -30];
    const heightArr = [38, 42, 36];
    const zIndexArr = [1, 3, 2];
    
    let scrollParam = 24;
    let scrollPercent = props.scrollPercent;
    const calcScrollPercent = () => {
        const heighttoBeReducedinVH = (props.boxHeight * props.projectIndex) - 100;
        const scrollOffset = (props.screenHeight * heighttoBeReducedinVH) / 100;
        const scrollOffsetInPercent = (scrollOffset * 100 / props.scrollHeight) - ((props.projectIndex - 1) * 2);
        scrollPercent -= scrollOffsetInPercent;
    };
    calcScrollPercent();

    const renderImage = (src, i) => {
        if (i) {
            scrollParam /= 2;
        }
        return (
            <Image
                key={i}
                src={src}
                right={rightArr[i]}
                bottom={bottomArr[i]}
                height={heightArr[i]}
                zIndex={zIndexArr[i]}
                scroll={scrollPercent * scrollParam}
                alt={`project${props.projectIndex}_${i}`}
            />
        );
    };

    return (
        <ImagesWrapper>
            {
                props.imgs.map(renderImage)
            }
        </ImagesWrapper>
    )
}

Images.propTypes = {
    projectIndex: PropTypes.number.isRequired,
    imgs: PropTypes.array.isRequired,
    boxHeight: PropTypes.number.isRequired,
    screenHeight: PropTypes.number.isRequired,
    scrollHeight: PropTypes.number.isRequired,
    scrollPercent: PropTypes.number.isRequired,
};

export default Images;
