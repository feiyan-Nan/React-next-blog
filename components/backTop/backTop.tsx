import React, { useEffect, useState } from 'react';
import './index.css';
import Animate from '../Animate';

export interface IBackTop {
    target?: HTMLElement | Window,
    visibilityHeight?: number,
    onClick?: () => void
}

const prefixClass = 'yy-back-top';

const toStyle = {
    transform: `translateX(0)`
}

const fromStyle = {
    transform: `translateY(100%)`
}

const Animation = Animate.Animation;

const BackTop: React.FC<IBackTop> = props => {
    console.log(props)
    const [visible, setVisible] = useState(false)
    const { target, visibilityHeight, onClick } = props;

    // 当滚动的时候检测回到顶部按钮是否显示
    const onScroll = () => {
        const currentScrollTop = getScrollTop()
        if (visibilityHeight !== undefined) {
            if (currentScrollTop >= visibilityHeight) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
    }

    // 获取这个元素滚动的高度
    const getScrollTop = (): number => {
        let currentScrollTop = 0;
        if (target !== undefined) {
            if (target instanceof Window) {
                currentScrollTop = window.pageYOffset
            } else if (target instanceof HTMLElement) {
                currentScrollTop = target.scrollTop
            }
        }
        return currentScrollTop
    }

    // 滚动到某个位置
    const scrollSmoothTo = (position: number) => {
        let currentScrollTop = getScrollTop();
        const step = () => {
            const distance = position - currentScrollTop;
            currentScrollTop = currentScrollTop + distance / 5;
            if (Math.abs(distance) < 1) {
                (target as HTMLElement | Window).scrollTo(0, position);
            } else {
                (target as HTMLElement | Window).scrollTo(0, currentScrollTop);
                requestAnimationFrame(step);
            }
        };
        step();
    }
    // 点击
    const handleClick = () => {
        if (onClick) {
            onClick()
        }
        // 平滑的滚动到顶部
        scrollSmoothTo(0);
    }

    useEffect(() => {
        (target as HTMLElement | Window).addEventListener('scroll', onScroll)
        return () => {
            (target as HTMLElement | Window).removeEventListener('scroll', onScroll)
        }
    }, [])

    const backTopStyles = {}
    return (
        <Animation animation={visible} duration={150} to={toStyle} from={fromStyle}>
            <div className={`${prefixClass}`} style={backTopStyles} onClick={handleClick}>
                <span className="iconfont icon-winfo-icon-shangjiantou"></span>
            </div>
        </Animation>
    )
}

function noop() { }

BackTop.defaultProps = {
    target: window,
    visibilityHeight: 0,
    onClick: noop
}
export default BackTop;
