import SpendingBars from "./SpendingBars";

const SpendingCard = () => {
    return (
        <div className="spending-card card">
            <h1>Spedning - Last 7 days</h1>
            <SpendingBars></SpendingBars>

            <div className="spending-card-bottom">
                <h2>Total this month</h2>
                <div className="total-spending-numbers">
                    <p className="total-number">$478.33</p>
                    <div className="total-spending-numbers-right">
                        <p className="percent-increase-number">+2.4%</p>
                        <p>from last month</p>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default SpendingCard;