import axios from "axios";


const PayPalButton = () => {
    const createOrder = async () => {

        try {
            const response = await axios.post(
                "http://localhost:4000/api/create-payment"
            );
            console.log(response)
            const approvalUrl = response.data.approval_url;
            window.location.replace(approvalUrl);
        } catch (error) {
            console.error("Error creating PayPal payment:", error);
        }
    };

    return <button onClick={createOrder}



    >Book Call</button>;
};

export default PayPalButton;