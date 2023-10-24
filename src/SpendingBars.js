import { useState, useEffect } from "react";

import SpendingBar from "./SpendingBar";

const SpendingBars = () => {

    function getBarsData(){
        const data = require("./data.json");
        setMaxAmount(Math.max(...data.map(o => o.amount)));
        setBarsData(data);
    }

    const [barsData, setBarsData] = useState([]);
    const [maxAmount, setMaxAmount] = useState(1);
    useEffect(getBarsData, []);


    return (
        <div className="spending-bars">
            {
                barsData.map((el, ind) => {
                    return <SpendingBar 
                        key={ ind } 
                        day={ el.day } 
                        amount={ el.amount } 
                        maxAmount={ maxAmount }
                    ></SpendingBar>
                })
            }
        </div>
    );
}
 
export default SpendingBars;