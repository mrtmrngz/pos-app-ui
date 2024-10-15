
const CustomTable = () => {



    return (
        <table className="custom-table w-full">
            <thead>
            <tr>
                <th style={{width: "10%"}}>Bill No</th>
                <th style={{width: "25%"}}>Customer Name</th>
                <th style={{width: "20%"}}>Created At</th>
                <th style={{width: "250px"}}>Payment Method</th>
                <th>Total Price</th>
                <th style={{width: "150px"}}>Print</th>
            </tr>
            </thead>

            <tbody>
            <tr className="border border-border-color border-t-0">
                <td>INV-123456</td>
                <td>
                    <h3 className="text-sm">Customer 1</h3>
                </td>
                <td>
                    <span>October 15, 2024</span>
                </td>
                <td>Cash</td>
                <td>
                    <strong>$5.800.000.000.00</strong>
                </td>
                <td>
                    <button className="text-blue-500">Print</button>
                </td>
            </tr>
            <tr className="border border-border-color border-t-0">
                <td>INV-123456</td>
                <td>
                    <h3 className="text-sm">Customer 1</h3>
                </td>
                <td>
                    <span>October 15, 2024</span>
                </td>
                <td>Cash</td>
                <td>
                    <strong>$5.800.000.000.00</strong>
                </td>
                <td>
                    <button className="text-blue-500">Print</button>
                </td>
            </tr>
            <tr className="border border-border-color border-t-0">
                <td>INV-123456</td>
                <td>
                    <h3 className="text-sm">Customer 1</h3>
                </td>
                <td>
                    <span>October 15, 2024</span>
                </td>
                <td>Cash</td>
                <td>
                    <strong>$5.800.000.000.00</strong>
                </td>
                <td>
                    <button className="text-blue-500">Print</button>
                </td>
            </tr>
            <tr className="border border-border-color border-t-0">
                <td>INV-123456</td>
                <td>
                    <h3 className="text-sm">Customer 1</h3>
                </td>
                <td>
                    <span>October 15, 2024</span>
                </td>
                <td>Cash</td>
                <td>
                    <strong>$5.800.000.000.00</strong>
                </td>
                <td>
                    <button className="text-blue-500">Print</button>
                </td>
            </tr>
            <tr className="border border-border-color border-t-0">
                <td>INV-123456</td>
                <td>
                    <h3 className="text-sm">Customer 1</h3>
                </td>
                <td>
                    <span>October 15, 2024</span>
                </td>
                <td>Cash</td>
                <td>
                    <strong>$5.800.000.000.00</strong>
                </td>
                <td>
                    <button className="text-blue-500">Print</button>
                </td>
            </tr>
            <tr className="border border-border-color border-t-0">
                <td>INV-123456</td>
                <td>
                    <h3 className="text-sm">Customer 1</h3>
                </td>
                <td>
                    <span>October 15, 2024</span>
                </td>
                <td>Cash</td>
                <td>
                    <strong>$5.800.000.000.00</strong>
                </td>
                <td>
                    <button className="text-blue-500">Print</button>
                </td>
            </tr>
            <tr className="border border-border-color border-t-0">
                <td>INV-123456</td>
                <td>
                    <h3 className="text-sm">Customer 1</h3>
                </td>
                <td>
                    <span>October 15, 2024</span>
                </td>
                <td>Cash</td>
                <td>
                    <strong>$5.800.000.000.00</strong>
                </td>
                <td>
                    <button className="text-blue-500">Print</button>
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default CustomTable;