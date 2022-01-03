import "./portfolioButton.scss"

export const PortfolioButton = ({title, id, active, setSelected}) => {
    return (
        <li className={active ? "portfolioButton active" : "portfolioButton"} 
        onClick={() => setSelected(id)}
         >
            {title}
        </li>
    )
}
