import * as FaIcon from "react-icons/fa";

const BarIconButton = ({icon, text = 'tooltip'}) => {
    return (
        <button type="button" className={`icon-btn group`}>
            <div disabled className="bottom-tooltip">{text}</div>
            {icon}
        </button>
    );
}

const BottomBar = () => {
    const icons = [
        [<FaIcon.FaAngleLeft size={"calc(3vh + 1.2vw)"} />,"Previous Content"],
        [<FaIcon.FaHeart size={"calc(3vh + 1.2vw)"} />,"Heart"],
        [<FaIcon.FaAngleRight size={"calc(3vh + 1.2vw)"} />, "Next Content"],
    ]
    return (
        <div className="bottom-bar">
            {
                icons.map((icon) => {
                    return <BarIconButton icon={icon[0]} text={icon[1]}></BarIconButton>
                })
            }
        </div>
    )
};


export default BottomBar;