export class OrderListDetail{
    public orders: [
            {
                id: string,
                merchantName: string,
                totalOrderedAmount: number,
                senderName: string,
                senderEmail: string,
                senderContactNumber: string,
                recipientName: string,
                recipientEmail: string,
                recipientContactNumber: string,
                dateOrdered: Date,
                additionalMessage: string,
                orderProductData: {
                    id: string,
                    name: string,
                    description: string,
                    price: number,
                    quantity: number
                }
            }
        ];
        public httpCode: number;
        public errorMessage: string;
}
