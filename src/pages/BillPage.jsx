import React from 'react';
import CustomTable from "../components/CustomTable/CustomTable.jsx";
import Container from "../components/UI/Container.jsx";

const BillPage = () => {
    return (
        <div className="mt-7 pb-24 md:pb-5">
            <h1 className="text-center text-3xl">Bills</h1>
            <Container>
                <div className="table-wrapper mt-5 overflow-auto">
                    <CustomTable/>
                </div>
            </Container>
        </div>
    );
};

export default BillPage;