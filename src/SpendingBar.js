const SpendingBar = ({day, amount, maxAmount}) => {
    const maxHeightRem = 10;

    return (  
        <div className="bar-block">
            <p className="bar-label">${ amount }</p>
            <div 
                className={ 
                    "bar " + ((amount === maxAmount) && "max-bar")
                } 
                style={ {height: (amount / maxAmount * maxHeightRem) + "rem"} }
            ></div>
            <p>{ day }</p>
        </div>
    );
}
 
export default SpendingBar;